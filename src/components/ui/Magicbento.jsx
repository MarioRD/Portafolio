import React, { useRef, useEffect } from 'react';
import './MagicBento.css';

const MagicBento = ({ cards = [] }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gridRef.current) return;
      const cardsEls = gridRef.current.querySelectorAll('.magic-bento-card');
      
      cardsEls.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        const dist = Math.hypot(e.clientX - (rect.left + rect.width/2), e.clientY - (rect.top + rect.height/2));
        const intensity = dist < 500 ? 1 : 0.2; // Brillo tenue constante

        card.style.setProperty('--glow-x', `${x}%`);
        card.style.setProperty('--glow-y', `${y}%`);
        card.style.setProperty('--glow-intensity', intensity);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="card-grid bento-section" ref={gridRef}>
      {cards.slice(0, 7).map((card, i) => (
        <div key={i} className="magic-bento-card">
          <div className="magic-bento-card__icon-wrapper">
            {card.icon}
          </div>
          <div className="magic-bento-card__text-content">
            <span className="card-category">{card.category}</span>
            <h3 className="card-title">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;