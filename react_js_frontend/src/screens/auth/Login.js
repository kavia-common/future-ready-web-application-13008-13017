import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../App';

// PUBLIC_INTERFACE
export default function Login() {
  /** Mock login screen */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useApp();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // mock auth flow
    setUser({ id: 'u1', email });
    navigate('/home', { replace: true });
  };

  return (
    <div className="container safe-top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: 24, marginBottom: 24, textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: 24, background: 'var(--color-primary-600)', margin: '0 auto' }} />
        <div style={{ fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 700, marginTop: 8 }}>Welcome back</div>
        <div className="text-body" style={{ color: 'var(--gray-600)' }}>Sign in to continue</div>
      </div>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Input name="email" label="Email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="email" />
        <Input name="password" label="Password" placeholder="••••••••" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="current-password" />
        <Button type="submit" block>Login</Button>
      </form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <span className="text-body">New here? </span>
        <Link to="/signup" style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>Create an account</Link>
      </div>
    </div>
  );
}
