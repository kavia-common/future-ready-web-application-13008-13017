import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../App';

// PUBLIC_INTERFACE
export default function Signup() {
  /** Mock signup screen */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useApp();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({ id: 'u1', email, name });
    navigate('/home', { replace: true });
  };

  return (
    <div className="container safe-top" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: 24, marginBottom: 24, textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: 24, background: 'var(--color-primary-600)', margin: '0 auto' }} />
        <div style={{ fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 700, marginTop: 8 }}>Create account</div>
        <div className="text-body" style={{ color: 'var(--gray-600)' }}>Join Ocean Coffee</div>
      </div>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Input name="name" label="Full name" placeholder="Jane Doe" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="name" />
        <Input name="email" label="Email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="email" />
        <Input name="password" label="Password" placeholder="Create a password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="new-password" />
        <Button type="submit" block>Sign up</Button>
      </form>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <span className="text-body">Have an account? </span>
        <Link to="/login" style={{ color: 'var(--color-primary-600)', fontWeight: 600 }}>Log in</Link>
      </div>
    </div>
  );
}
