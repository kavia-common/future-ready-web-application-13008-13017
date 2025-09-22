import React from 'react';
import Button from '../../components/atoms/Button';
import { useApp } from '../../App';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Profile() {
  /** Basic profile screen with logout action */
  const { user, setUser } = useApp();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--white)', padding: 16, borderRadius: 12, boxShadow: 'var(--elev-1)' }}>
        <div aria-hidden style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gray-300)' }} />
        <div>
          <div style={{ fontWeight: 700 }}>{user?.name || 'Guest User'}</div>
          <div className="text-body" style={{ color: 'var(--gray-600)' }}>{user?.email || 'guest@example.com'}</div>
        </div>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 12, boxShadow: 'var(--elev-1)' }}>
        {[
          'Orders', 'Addresses', 'Payments', 'Notifications', 'Help & Support'
        ].map((item) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottom: '1px solid var(--gray-200)' }}>
            <div className="text-body">{item}</div>
            <div aria-hidden style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--gray-400)' }} />
          </div>
        ))}
        <div style={{ padding: 16 }}>
          <Button variant="secondary" onClick={logout}>Logout</Button>
        </div>
      </div>
    </div>
  );
}
