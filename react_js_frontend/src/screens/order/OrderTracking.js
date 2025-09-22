import React from 'react';
import Button from '../../components/atoms/Button';
import { useNavigate, useParams } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function OrderTracking() {
  /** Order progress status screen */
  const { orderId } = useParams();
  const navigate = useNavigate();

  const steps = ['Received', 'Preparing', 'On the way', 'Delivered'];
  const activeIndex = 2;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontWeight: 700 }}>Order #{orderId}</div>
      <div aria-hidden style={{ height: 160, borderRadius: 16, background: 'var(--gray-200)' }} />
      <div>
        {steps.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
            <div style={{
              width: 12, height: 12, borderRadius: 6,
              background: i <= activeIndex ? 'var(--color-primary-600)' : 'var(--gray-300)'
            }} />
            <div style={{ color: i <= activeIndex ? 'var(--gray-900)' : 'var(--gray-600)', fontWeight: i <= activeIndex ? 700 : 500 }}>
              {s}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary">Contact Driver</Button>
        <Button onClick={() => navigate('/home')}>Back to Home</Button>
      </div>
    </div>
  );
}
