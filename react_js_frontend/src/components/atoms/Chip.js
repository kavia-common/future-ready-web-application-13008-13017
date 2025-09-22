import React from 'react';

// PUBLIC_INTERFACE
export default function Chip({ label, selected, onClick }) {
  /** Pill chip supporting selected state */
  return (
    <button
      onClick={onClick}
      className="transition-base"
      style={{
        height: 36,
        padding: '0 14px',
        borderRadius: 'var(--radius-16)',
        fontSize: 'var(--fs-body-2)',
        lineHeight: 'var(--lh-body-2)',
        background: selected ? 'var(--color-primary-600)' : 'var(--gray-100)',
        color: selected ? 'var(--white)' : 'var(--gray-700)',
        border: selected ? '1px solid transparent' : '1px solid var(--gray-300)',
        boxShadow: selected ? 'var(--elev-1)' : 'var(--elev-0)',
      }}
    >
      {label}
    </button>
  );
}
