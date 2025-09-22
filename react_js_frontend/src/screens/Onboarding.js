import React, { useState } from 'react';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';

// PUBLIC_INTERFACE
export default function Onboarding() {
  /** Simple onboarding carousel */
  const slides = [
    { id: 1, title: 'Freshly Brewed', body: 'Discover premium coffee curated by our baristas.' },
    { id: 2, title: 'Customize Your Drink', body: 'Choose size, sweetness, and add-ons your way.' },
    { id: 3, title: 'Fast Delivery', body: 'Sip happiness at your doorstep quickly and safely.' },
  ];
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();
  const { setOnboarded } = useApp();

  const next = () => setIdx(i => Math.min(slides.length - 1, i + 1));
  const skip = () => { setOnboarded(true); navigate('/login', { replace: true }); };
  const getStarted = () => { setOnboarded(true); navigate('/login', { replace: true }); };

  return (
    <div className="container safe-top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ alignSelf: 'flex-end', marginTop: 8 }}>
        <Button variant="tertiary" onClick={skip}>Skip</Button>
      </div>
      <div style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
        <div style={{ width: 260, height: 200, borderRadius: 24, background: 'var(--gray-200)' }} />
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <div style={{ fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 700 }}>{slides[idx].title}</div>
          <div className="text-body" style={{ marginTop: 8, color: 'var(--gray-600)' }}>{slides[idx].body}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          {slides.map((s, i) => (
            <div key={s.id} style={{
              width: 8, height: 8, borderRadius: 4,
              background: i === idx ? 'var(--color-primary-600)' : 'var(--gray-300)'
            }} />
          ))}
        </div>
      </div>
      <div className="safe-bottom" style={{ marginTop: 16 }}>
        {idx < slides.length - 1 ? (
          <Button block onClick={next}>Continue</Button>
        ) : (
          <Button block onClick={getStarted}>Get Started</Button>
        )}
      </div>
    </div>
  );
}
