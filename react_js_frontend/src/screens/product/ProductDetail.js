import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../../data/mockData';
import Segmented from '../../components/molecules/Segmented';
import Rating from '../../components/molecules/Rating';
import QuantityStepper from '../../components/molecules/QuantityStepper';
import Button from '../../components/atoms/Button';
import { useApp } from '../../App';

// PUBLIC_INTERFACE
export default function ProductDetail() {
  /** Product details with size and quantity selection */
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);

  if (!product) return <div>Not found</div>;

  const price = product.price + (size === 'L' ? 0.7 : size === 'S' ? -0.3 : 0);

  const handleAdd = () => {
    addToCart({ id: product.id, title: product.title, price, size });
    navigate('/cart');
  };

  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{ position: 'relative', margin: '-16px -16px 0 -16px' }}>
        <button
          aria-label="Back"
          onClick={() => navigate(-1)}
          style={{ position: 'absolute', top: 16, left: 16, width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.9)', cursor: 'pointer' }}
        >←</button>
        <button
          aria-label="Favorite"
          style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.9)', cursor: 'pointer' }}
        >♥</button>
        <div aria-hidden style={{ height: 280, background: 'var(--gray-200)', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }} />
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-h2)', fontWeight: 700 }}>{product.title}</div>
        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Rating value={product.rating} />
          <span className="text-caption" style={{ color: 'var(--gray-600)' }}>{product.rating}.0 (120)</span>
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="text-caption" style={{ color: 'var(--gray-600)', marginBottom: 8 }}>Size</div>
          <Segmented
            options={[{label:'S', value:'S'},{label:'M', value:'M'},{label:'L', value:'L'}]}
            value={size}
            onChange={setSize}
          />
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="text-caption" style={{ color: 'var(--gray-600)', marginBottom: 8 }}>Description</div>
          <div className="text-body" style={{ color: 'var(--gray-600)' }}>
            A rich and aromatic coffee beverage brewed to perfection. Customize your size and enjoy the perfect balance.
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="text-caption" style={{ color: 'var(--gray-600)', marginBottom: 8 }}>Quantity</div>
          <QuantityStepper value={qty} onChange={setQty} min={1} />
        </div>
      </div>

      <div
        className="safe-bottom shadow-1"
        style={{
          position: 'fixed', left: 0, right: 0, bottom: 0,
          background: 'var(--white)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12
        }}
      >
        <div style={{ fontSize: 'var(--fs-h2)', fontWeight: 700, flex: 1 }}>${(price * qty).toFixed(2)}</div>
        <Button onClick={handleAdd}>Add to cart</Button>
      </div>
    </div>
  );
}
