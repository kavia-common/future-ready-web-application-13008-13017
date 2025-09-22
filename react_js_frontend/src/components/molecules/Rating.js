import React from 'react';

// PUBLIC_INTERFACE
export default function Rating({ value = 0, size = 16 }) {
  /** Read-only star rating */
  const stars = [1,2,3,4,5];
  return (
    <div style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }} aria-label={`Rating ${value} out of 5`}>
      {stars.map((s) => (
        <span
          key={s}
          aria-hidden
          style={{
            width: size, height: size, borderRadius: 4,
            background: s <= value ? '#F59E0B' : 'var(--gray-300)'
          }}
        />
      ))}
    </div>
  );
}
