import React from 'react';

// PUBLIC_INTERFACE
export default function QuantityStepper({ value, onChange, min = 0, max = 99 }) {
  /** Quantity control with - / + buttons */
  const dec = () => onChange(Math.max(min, (value || 0) - 1));
  const inc = () => onChange(Math.min(max, (value || 0) + 1));
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <button aria-label="Decrease" onClick={dec} style={btnStyle}>-</button>
      <div style={{ minWidth: 24, textAlign: 'center', fontWeight: 600 }}>{value || 0}</div>
      <button aria-label="Increase" onClick={inc} style={btnStyle}>+</button>
    </div>
  );
}

const btnStyle = {
  width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--gray-300)',
  background: 'var(--white)', cursor: 'pointer'
};
