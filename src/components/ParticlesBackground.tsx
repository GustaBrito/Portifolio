import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurações
    const particleCount = 200;
    const particleSize = 1.5;
    const connectionDistance = 100;
    const mouseConnectionDistance = 150;

    // Ajustar canvas para o tamanho da tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Inicializar partículas
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          size: particleSize
        });
      }
    };

    // Atualizar posição das partículas
    const updateParticles = () => {
      particlesRef.current.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Rebater nas bordas
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
    };

    // Desenhar partículas e conexões
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar conexões
      particlesRef.current.forEach(p1 => {
        // Conexão com o mouse
        const distanceToMouse = Math.sqrt(
          Math.pow(p1.x - mouseRef.current.x, 2) + 
          Math.pow(p1.y - mouseRef.current.y, 2)
        );

        if (distanceToMouse < mouseConnectionDistance) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distanceToMouse/mouseConnectionDistance})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Conexões entre partículas
        particlesRef.current.forEach(p2 => {
          if (p1 === p2) return;
          
          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) + 
            Math.pow(p1.y - p2.y, 2)
          );

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance/connectionDistance * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Desenhar partículas
      particlesRef.current.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });
    };

    // Animação
    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Inicialização
    resizeCanvas();
    initParticles();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Iniciar animação
    const animationId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticlesBackground;