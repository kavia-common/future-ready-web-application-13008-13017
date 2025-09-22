import React from 'react';

// PUBLIC_INTERFACE
export default function Segmented({ options = [], value, onChange }) {
  /** Segmented control for selecting single value */
  return (
    <div
      style={{
        background: 'var(--gray-100)',
        padding: 4,
        borderRadius: 'var(--radius-16)',
        display: 'inline-flex',
        gap: 4,
      }}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className="transition-base"
            style={{
              border: 'none',
              cursor: 'pointer',
              padding: '8px 14px',
              borderRadius: 'var(--radius-12)',
              background: active ? 'var(--white)' : 'transparent',
              boxShadow: active ? 'var(--elev-1)' : 'none',
              color: active ? 'var(--gray-900)' : 'var(--gray-700)',
              fontWeight: 600,
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
