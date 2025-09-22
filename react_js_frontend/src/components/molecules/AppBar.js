import React from 'react';
import Badge from '../atoms/Badge';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function AppBar({ title, rightContent }) {
  /** Top app bar with location and actions */
  const navigate = useNavigate();
  return (
    <header
      className="shadow-1"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-header)',
        background: 'var(--app-surface)',
      }}
    >
      <div className="container" style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <div aria-hidden style={{ width: 24, height: 24, borderRadius: 8, background: 'var(--color-primary-600)' }} />
          <div>
            <div className="text-caption" style={{ color: 'var(--gray-600)' }}>Deliver to</div>
            <div style={{ fontSize: 'var(--fs-subtitle-1)', fontWeight: 600, lineHeight: 'var(--lh-subtitle-1)' }}>{title || 'Home'}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <button
              aria-label="Notifications"
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'transparent', border: 'none', position: 'relative', cursor: 'pointer'
              }}
            >
              <span aria-hidden style={{ width: 20, height: 20, borderRadius: 4, background: 'var(--gray-700)', display: 'inline-block' }} />
              <Badge count={2} />
            </button>
          </div>
          <button
            aria-label="Profile"
            onClick={() => navigate('/profile')}
            style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--gray-200)', border: 'none', cursor: 'pointer' }}
          />
          {rightContent}
        </div>
      </div>
    </header>
  );
}
