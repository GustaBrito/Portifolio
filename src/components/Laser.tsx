import React, { useEffect, useRef } from 'react';
import './Laser.css';

const LaserEffect: React.FC = () => {
  // Usamos um único ref para o container (wrapper) dos efeitos
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const laserRef     = useRef<HTMLDivElement>(null);
  const chargingRef  = useRef<HTMLDivElement>(null);
  const explosionRef = useRef<HTMLDivElement>(null);

  // Referências para o SVG e seus elementos
  const electricSvgRef     = useRef<SVGSVGElement>(null);
  const electricPolygonRef = useRef<SVGPolygonElement>(null);
  const electricLineRef    = useRef<SVGPolylineElement>(null);

  const animationRefs = useRef({
    electricInterval : null as number | null,
    burnInterval     : null as number | null,
    chargingTimeout  : null as number | null,
    explosionTimeout : null as number | null,
  });

  const lastMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Aguarda 500ms para iniciar os event listeners (somente no carregamento da página)
    const initTimeout = setTimeout(() => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup',   handleMouseUp);

      /* listeners para telas touch */
      document.addEventListener('touchmove',  handleTouchMove,  { passive: false });
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend',   handleMouseUp);
    }, 500);

    // Função para criar marcas de queimadura na tela
    function createBurnMark(x: number, y: number) {
      const mark = document.createElement('div');
      mark.classList.add('burn-mark');
      const clampedX = Math.max(0, Math.min(x, window.innerWidth));
      const clampedY = Math.max(0, Math.min(y, window.innerHeight));
      mark.style.left = `${clampedX}px`;
      mark.style.top  = `${clampedY}px`;
      document.body.appendChild(mark);
      mark.addEventListener('animationend', () => mark.remove());
    }

    // Atualiza os pontos do efeito elétrico do SVG
    const updateElectricEffect = () => {
      if (electricSvgRef.current?.dataset.active !== 'true' ||
          !electricPolygonRef.current ||
          !electricLineRef.current) return;

      const height = parseFloat(electricSvgRef.current.style.height || '0');
      if (height <= 0) return;

      const segmentsPolygon = 20;
      const leftSide : string[] = [];
      const rightSide: string[] = [];

      for (let i = 0; i <= segmentsPolygon; i++) {
        const fraction   = i / segmentsPolygon;
        const amplitudeX = (1 - fraction) * 100;
        const offsetX    = (Math.random() - 0.5) * amplitudeX;
        const baseX      = 25 + offsetX;
        const halfWidth  = 5 * (1 - fraction);
        const amplitudeY = (1 - fraction) * 20;
        const offsetY    = (Math.random() - 0.5) * amplitudeY;
        const baseY      = fraction * height + offsetY;

        leftSide .push(`${baseX - halfWidth},${baseY}`);
        rightSide.push(`${baseX + halfWidth},${baseY}`);
      }
      electricPolygonRef.current.setAttribute(
        'points',
        [...leftSide, ...rightSide.reverse()].join(' ')
      );

      const segmentsLine = 20;
      const linePoints: string[] = [];
      for (let i = 0; i <= segmentsLine; i++) {
        const fraction = i / segmentsLine;
        const offsetX  = (Math.random() - 0.5) * 15;
        const x        = 25 + offsetX;
        const offsetY  = (Math.random() - 0.5) * 5;
        const y        = fraction * height + offsetY;
        linePoints.push(`${x},${y}`);
      }
      electricLineRef.current.setAttribute('points', linePoints.join(' '));
    };

    // Calcula a posição relativa ao container e atualiza os efeitos
    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current || !laserRef.current || !electricSvgRef.current) return;

      const rect    = wrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const mouseX  = e.clientX;
      const mouseY  = e.clientY;
      const deltaX  = mouseX - centerX;
      const deltaY  = mouseY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const angle    = Math.atan2(deltaY, deltaX) - Math.PI / 2;

      lastMousePositionRef.current = { x: mouseX, y: mouseY };
      document.body.style.setProperty('--mouse-x', `${mouseX}px`);
      document.body.style.setProperty('--mouse-y', `${mouseY}px`);

      // Atualiza a rotação dos efeitos
      laserRef.current!.style.transform       = `rotate(${angle}rad)`;
      electricSvgRef.current!.style.transform = `rotate(${angle}rad)`;

      // Se o laser estiver ativo, atualiza seu comprimento (baseado na distância)
      if (laserRef.current!.dataset.active === 'true') {
        laserRef.current!.style.height       = `${distance}px`;
        electricSvgRef.current!.style.height = `${distance}px`;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!laserRef.current || !electricSvgRef.current || !chargingRef.current || !explosionRef.current) return;

      // Atualiza imediatamente a posição dos efeitos
      handleMouseMove(e);

      clearAllAnimations();

      // Inicia sequência de carregamento
      chargingRef.current.style.display = 'block';
      document.body.classList.add('laser-charging');

      animationRefs.current.chargingTimeout = window.setTimeout(() => {
        chargingRef.current!.style.display = 'none';

        // Exibe explosão
        explosionRef.current!.style.display = 'block';
        explosionRef.current!.classList.add('active');

        animationRefs.current.explosionTimeout = window.setTimeout(() => {
          explosionRef.current!.style.display = 'none';
          explosionRef.current!.classList.remove('active');

          // Ativa o laser
          activateLaser();
        }, 450);
      }, 400);
    };

    /* ======== FUNÇÕES TOUCH (atualizadas) ======== */
    const handleTouchMove = (e: TouchEvent) => {
      /* se o laser está em uso, bloqueia o scroll */
      if (document.body.classList.contains('laser-active') ||
          document.body.classList.contains('laser-charging')) {
        e.preventDefault();                 // impede arrastar a tela
      }

      const t = e.touches[0];
      if (!t) return;
      handleMouseMove(
        new MouseEvent('mousemove', { clientX: t.clientX, clientY: t.clientY })
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      /* também previne scroll logo no toque */
      e.preventDefault();
      handleMouseDown(
        new MouseEvent('mousedown', { clientX: t.clientX, clientY: t.clientY })
      );
    };
    /* ============================================ */


    const activateLaser = () => {
      if (!laserRef.current || !electricSvgRef.current) return;

      laserRef.current.dataset.active   = 'true';
      electricSvgRef.current.dataset.active = 'true';
      document.body.classList.remove('laser-charging');
      document.body.classList.add('laser-active');

      // Atualiza a posição dos efeitos com base na última posição conhecida
      handleMouseMove(
        new MouseEvent('mousemove', {
          clientX: lastMousePositionRef.current.x,
          clientY: lastMousePositionRef.current.y,
        })
      );

      animationRefs.current.electricInterval = window.setInterval(updateElectricEffect, 50);
      animationRefs.current.burnInterval = window.setInterval(() => {
        const { x, y } = lastMousePositionRef.current;
        createBurnMark(x, y);
      }, 200);
    };

    const handleMouseUp = () => {
      deactivateLaser();
    };

    const deactivateLaser = () => {
      if (!laserRef.current || !electricSvgRef.current) return;

      clearAllAnimations();

      laserRef.current.dataset.active   = 'false';
      electricSvgRef.current.dataset.active = 'false';

      setTimeout(() => {
        laserRef.current!.style.height       = '0';
        electricSvgRef.current!.style.height = '0';
      }, 250);

      document.body.classList.remove('laser-active', 'laser-charging');
    };

    const clearAllAnimations = () => {
      const { current } = animationRefs;
      if (current.chargingTimeout) clearTimeout(current.chargingTimeout);
      if (current.explosionTimeout) clearTimeout(current.explosionTimeout);
      if (current.electricInterval) clearInterval(current.electricInterval);
      if (current.burnInterval) clearInterval(current.burnInterval);

      current.chargingTimeout  = null;
      current.explosionTimeout = null;
      current.electricInterval = null;
      current.burnInterval     = null;

      if (chargingRef.current) chargingRef.current.style.display = 'none';
      if (explosionRef.current) {
        explosionRef.current.style.display = 'none';
        explosionRef.current.classList.remove('active');
      }
    };

    // Registra os event listeners
    // document.addEventListener('mousemove', handleMouseMove);
    // document.addEventListener('mousedown', handleMouseDown);
    // document.addEventListener('mouseup',   handleMouseUp);

    // document.addEventListener('touchmove',  handleTouchMove,  { passive: false });
    // document.addEventListener('touchstart', handleTouchStart, { passive: true });
    // document.addEventListener('touchend',   handleMouseUp);

    return () => {
      clearTimeout(initTimeout);

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup',   handleMouseUp);

      document.removeEventListener('touchmove',  handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend',   handleMouseUp);

      document.body.style.removeProperty('--mouse-x');
      document.body.style.removeProperty('--mouse-y');
      document.body.classList.remove('laser-active', 'laser-charging');

      clearAllAnimations();
    };
  }, []);

  return (
    <div className="laser-wrapper" ref={wrapperRef}>
      {/* Efeito de Carregamento */}
      <div className="charging-effect" ref={chargingRef}>
        <div className="charging-aura"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
        <div className="spark"></div>
      </div>

      {/* Explosão */}
      <div className="explosion" ref={explosionRef}></div>

      {/* Laser principal */}
      <div className="laser" ref={laserRef} data-active="false"></div>

      {/* Efeito Elétrico via SVG */}
      <svg
        ref={electricSvgRef}
        data-active="false"
        width="50"
        height="50"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-25px)',
          transformOrigin: '25px 0',
          overflow: 'visible',
          zIndex: 9999,
        }}
      >
        <defs>
          <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="red" stopOpacity="0"   />
            <stop offset="25%"  stopColor="red" stopOpacity="0.3" />
            <stop offset="50%"  stopColor="red" stopOpacity="0.8" />
            <stop offset="100%" stopColor="red" stopOpacity="1"   />
          </linearGradient>
        </defs>
        <polygon  ref={electricPolygonRef} fill="url(#redGradient)" stroke="none" />
        <polyline ref={electricLineRef}   fill="none" stroke="url(#redGradient)" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default LaserEffect;
