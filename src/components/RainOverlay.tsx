import React, { useEffect, useState } from 'react';
import './RainOverlay.css';

interface RainOverlayProps {
  isActive: boolean;
  intensity?: number;
}

const RainOverlay: React.FC<RainOverlayProps> = ({ isActive, intensity = 300 }) => {
  const matrixChars = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヲ', 'ン',
    '0', '1', '∀', 'Ԑ', 'ꓭ', '߈', 'ᘔ', 'ㄣ', 'Ɫ', 'Ꝑ'
  ];

  const [raindrops, setRaindrops] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateRaindrops = () => {
      const newRaindrops = Array.from({ length: intensity }, (_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 1 + Math.random() * 2;
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Determina a classe de brilho
        const brightnessRand = Math.random();
        let brightnessClass = 'normal';
        
        if (brightnessRand > 0.85) {
          brightnessClass = 'bright';
        } else if (brightnessRand < 0.3) {
          brightnessClass = 'dim';
        }

        // Determina se pisca
        const doesFlicker = Math.random() > 0.85;
        
        const classes = [
          'raindrop',
          brightnessClass,
          doesFlicker ? 'flicker' : ''
        ].filter(Boolean).join(' ');

        return (
          <div
            key={`${i}-${Date.now()}`}
            className={classes}
            style={{
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`, // Quanto menor, mais rápido
              fontSize: `${14 + Math.random() * 10}px`
            }}
          >
            {char}
          </div>
        );
      });
      
      setRaindrops(newRaindrops);
    };

    generateRaindrops();
    const interval = setInterval(generateRaindrops, 10000);
    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className={`rain-overlay ${isActive ? 'active' : ''}`}>
      <div className="rain-effect">
        <div className="rain-background" />
        {raindrops}
      </div>
    </div>
  );
};

export default RainOverlay;