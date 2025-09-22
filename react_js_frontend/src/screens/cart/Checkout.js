import React, { useState } from 'react';
import Button from '../../components/atoms/Button';
import Segmented from '../../components/molecules/Segmented';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../App';

// PUBLIC_INTERFACE
export default function Checkout() {
  /** Checkout with delivery and payment options (stubs) */
  const [delivery, setDelivery] = useState('asap');
  const navigate = useNavigate();
  const { cart, clearCart } = useApp();

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0) + (cart.length ? 1.2 : 0);

  const placeOrder = () => {
    const orderId = Math.floor(Math.random() * 100000).toString();
    clearCart();
    navigate(`/order-tracking/${orderId}`, { replace: true });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 100 }}>
      <section style={card}>
        <div style={sectionTitle}>Delivery Address</div>
        <div className="text-body" style={{ color: 'var(--gray-600)' }}>123 Ocean Ave, Suite 100</div>
      </section>
      <section style={card}>
        <div style={sectionTitle}>Payment Method</div>
        <div className="text-body" style={{ color: 'var(--gray-600)' }}>VISA •••• 4242</div>
      </section>
      <section style={card}>
        <div style={sectionTitle}>Delivery Time</div>
        <Segmented options={[{label:'ASAP', value:'asap'},{label:'Schedule', value:'schedule'}]} value={delivery} onChange={setDelivery} />
      </section>
      <div className="safe-bottom" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: 'var(--white)', padding: 16, boxShadow: 'var(--elev-1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, flex: 1 }}>${total.toFixed(2)}</div>
          <Button onClick={placeOrder}>Place Order</Button>
        </div>
      </div>
    </div>
  );
}

const card = { background: 'var(--white)', borderRadius: 12, padding: 16, boxShadow: 'var(--elev-1)' };
const sectionTitle = { fontWeight: 700, marginBottom: 6 };
