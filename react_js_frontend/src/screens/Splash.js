import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Splash() {
  /** Splash with gradient background and app mark */
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate('/gate', { replace: true }), 1000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--grad-primary-vertical)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--white)',
      textAlign: 'center'
    }}>
      <div style={{
        width: 112, height: 112, borderRadius: '50%',
        background: 'rgba(255,255,255,0.15)', boxShadow: 'var(--elev-3)', display: 'grid', placeItems: 'center'
      }}>
        <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--white)' }} />
      </div>
      <div style={{ marginTop: 16, fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 700, opacity: 0.9 }}>
        Ocean Coffee
      </div>
      <div style={{ marginTop: 8, fontSize: 'var(--fs-caption)', lineHeight: 'var(--lh-caption)', opacity: 0.7 }}>
        Crafted beverages, delivered fresh.
      </div>
      <div style={{ position: 'absolute', bottom: 40, width: 120, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.5)' }} />
    </div>
  );
}
