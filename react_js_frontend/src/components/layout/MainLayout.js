import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '../molecules/AppBar';

// PUBLIC_INTERFACE
export default function MainLayout() {
  /** Main application layout with header and bottom navigation */
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    { key: 'home', label: 'Home', path: '/home' },
    { key: 'cart', label: 'Cart', path: '/cart' },
    { key: 'profile', label: 'Profile', path: '/profile' },
  ];

  return (
    <div style={{ minHeight: '100%', background: 'var(--app-bg)' }}>
      <AppBar title="Current Location" />
      <main className="container" style={{ paddingTop: 16, paddingBottom: 88 }}>
        <Outlet />
      </main>
      <nav
        className="shadow-1 safe-bottom"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--white)',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <div className="container" style={{ display: 'flex', height: 64, alignItems: 'center', justifyContent: 'space-around' }}>
          {items.map(it => {
            const active = pathname.startsWith(it.path);
            return (
              <button
                key={it.key}
                onClick={() => navigate(it.path)}
                style={{
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  color: active ? 'var(--color-primary-600)' : 'var(--gray-600)',
                  fontWeight: active ? 700 : 500
                }}
              >
                {it.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
