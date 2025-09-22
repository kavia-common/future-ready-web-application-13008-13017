import React from 'react';

/**
 * Generic Card container following Ocean Professional design.
 * Provides a white surface, rounded corners, padding, and subtle elevation.
 */
// PUBLIC_INTERFACE
export default function Card({ children, style, onClick, role }) {
  /** Card wrapper component with optional click handling */
  return (
    <div
      role={role}
      onClick={onClick}
      className="shadow-1"
      style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-16)',
        padding: 16,
        ...style
      }}
    >
      {children}
    </div>
  );
}
