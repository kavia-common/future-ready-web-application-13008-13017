import React from 'react';

// PUBLIC_INTERFACE
export default function Badge({ count }) {
  /** Small circular notification badge */
  if (!count) return null;
  return (
    <span
      aria-label={`${count} notifications`}
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translate(50%, -50%)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 18,
        borderRadius: 'var(--radius-full)',
        background: 'var(--color-danger-500)',
        color: 'var(--white)',
        fontSize: 10,
        fontWeight: 600,
      }}
    >
      {count}
    </span>
  );
}
