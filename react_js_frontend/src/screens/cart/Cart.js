import React from 'react';
import QuantityStepper from '../../components/molecules/QuantityStepper';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../App';

// PUBLIC_INTERFACE
export default function Cart() {
  /** Cart items and summary */
  const { cart, updateQty } = useApp();
  const navigate = useNavigate();

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = subtotal > 0 ? 1.2 : 0;
  const total = subtotal + fee;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 100 }}>
      {cart.length === 0 && <div className="text-body" style={{ color: 'var(--gray-600)' }}>Your cart is empty.</div>}
      {cart.map(it => (
        <div key={`${it.id}-${it.size}`} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--white)', padding: 12, borderRadius: 12, boxShadow: 'var(--elev-1)' }}>
          <div aria-hidden style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--gray-200)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>{it.title}</div>
            <div className="text-caption" style={{ color: 'var(--gray-600)' }}>Size {it.size}</div>
            <div style={{ marginTop: 4, fontWeight: 700 }}>${it.price.toFixed(2)}</div>
          </div>
          <QuantityStepper value={it.qty} onChange={(v)=>updateQty(it.id, it.size, v)} min={0} />
        </div>
      ))}

      <div style={{ marginTop: 8, background: 'var(--white)', borderRadius: 12, padding: 16, boxShadow: 'var(--elev-1)' }}>
        <div style={row}><span className="text-body">Subtotal</span><span className="text-body">${subtotal.toFixed(2)}</span></div>
        <div style={row}><span className="text-body">Delivery fee</span><span className="text-body">${fee.toFixed(2)}</span></div>
        <div style={{ ...row, marginTop: 8 }}><span style={{ fontWeight: 700 }}>Total</span><span style={{ fontWeight: 700 }}>${total.toFixed(2)}</span></div>
      </div>

      <div className="safe-bottom" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'var(--white)', padding: 16, boxShadow: 'var(--elev-1)' }}>
        <Button block onClick={()=>navigate('/checkout')} disabled={cart.length === 0}>Checkout</Button>
      </div>
    </div>
  );
}

const row = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 };
