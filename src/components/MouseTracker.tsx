/* MouseTracker.tsx */
import React, { useState, useEffect, useRef } from 'react';
import './MouseTracker.css';
import LaserEffect from './Laser';

const MouseTracker: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [insideSpace, setInsideSpace] = useState(false);
  const [hoveredEye, setHoveredEye] = useState<'left' | 'right' | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLButtonElement>(null);
  const rightEyeRef = useRef<HTMLButtonElement>(null);

  /* ===== mouse + touch move ===== */
  useEffect(() => {
    const move = (x: number, y: number) => {
      setMousePos({ x, y });
      const space = wrapperRef.current;
      if (space) {
        const r = space.getBoundingClientRect();
        setInsideSpace(x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
      }
    };

    const handleMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) move(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  /* remove blink quando sai da área */
  useEffect(() => {
    if (!insideSpace) {
      [leftEyeRef, rightEyeRef].forEach(ref => {
        ref.current?.querySelector('.btn-lid')?.classList.remove('blink');
      });
    }
  }, [insideSpace]);

  const getPupilStyle = (eyeRef: React.RefObject<HTMLButtonElement>) => {
    if (hoveredEye !== null || !eyeRef.current) return { transform: 'translate(0,0)' };

    const { left, top, width, height } = eyeRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const distance = Math.hypot(dx, dy) || 1;
    const max = Math.min(width, height) * 0.25;         // proporcional
    const offsetX = (dx / distance) * Math.min(distance, max);
    const offsetY = (dy / distance) * Math.min(distance, max);

    return { transform: `translate(${offsetX}px, ${offsetY}px)` };
  };

  /* utilitário blink/click */
  const lidBlink = (ref: React.RefObject<HTMLButtonElement>, on: boolean) => {
    const lid = ref.current?.querySelector('.btn-lid');
    lid?.classList.toggle('blink', on);
  };

  const pupilClick = (ref: React.RefObject<HTMLButtonElement>) => {
    const pupil = ref.current?.querySelector('.btn-pupil');
    if (!pupil) return;
    pupil.classList.add('pupil-click');
    setTimeout(() => {
      pupil.classList.remove('pupil-click');
      (pupil as HTMLElement).style.transform = 'translate(0,0)';
    }, 300);
  };

  /* === JSX === */
  return (
    <div className="wrapper" ref={wrapperRef}>
      {/* Left Eye */}
      <button
        className="btn-button left-eye"
        ref={leftEyeRef}
        onMouseEnter={() => { setHoveredEye('left'); lidBlink(leftEyeRef, true); }}
        onMouseLeave={() => { setHoveredEye(null); lidBlink(leftEyeRef, false); }}
        onTouchStart={() => { setHoveredEye('left'); lidBlink(leftEyeRef, true); }}
        onTouchEnd={() => { setHoveredEye(null); lidBlink(leftEyeRef, false); }}
        onClick={() => pupilClick(leftEyeRef)}
        onTouchEndCapture={() => pupilClick(leftEyeRef)}
      >
        <div className="btn-lid" />
        <div className="btn-pupil" style={getPupilStyle(leftEyeRef)}>
          <LaserEffect />
        </div>
      </button>

      {/* Right Eye */}
      <button
        className="btn-button right-eye"
        ref={rightEyeRef}
        onMouseEnter={() => { setHoveredEye('right'); lidBlink(rightEyeRef, true); }}
        onMouseLeave={() => { setHoveredEye(null); lidBlink(rightEyeRef, false); }}
        onTouchStart={() => { setHoveredEye('right'); lidBlink(rightEyeRef, true); }}
        onTouchEnd={() => { setHoveredEye(null); lidBlink(rightEyeRef, false); }}
        onClick={() => pupilClick(rightEyeRef)}
        onTouchEndCapture={() => pupilClick(rightEyeRef)}
      >
        <div className="btn-lid" />
        <div className="btn-pupil" style={getPupilStyle(rightEyeRef)}>
          <LaserEffect />
        </div>
      </button>
    </div>
  );
};

export default MouseTracker;
