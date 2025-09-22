import React, { useMemo, useState } from 'react';
import Input from '../../components/atoms/Input';
import Chip from '../../components/atoms/Chip';
import Card from '../../components/molecules/Card';
import Rating from '../../components/molecules/Rating';
import Button from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { banners, categories, products } from '../../data/mockData';

// PUBLIC_INTERFACE
export default function Home() {
  /** Home screen: search, categories, banner and product grid */
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');
  const navigate = useNavigate();

  const list = useMemo(() => {
    return products.filter(p => (cat === 'all' || p.category === cat) && p.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, cat]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input
        placeholder="Search coffee, e.g., Latte"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        leading={<div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--gray-500)' }} />}
      />
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {categories.map(c => (
          <Chip key={c.id} label={c.name} selected={cat === c.id} onClick={()=>setCat(c.id)} />
        ))}
      </div>

      {banners[0] && (
        <Card style={{ background: 'var(--grad-primary-135)', color: 'var(--white)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 'var(--fs-h3)', lineHeight: 'var(--lh-h3)', fontWeight: 700 }}>{banners[0].title}</div>
              <div className="text-body" style={{ opacity: 0.9, marginTop: 4 }}>{banners[0].body}</div>
              <div style={{ marginTop: 12 }}>
                <Button variant="secondary" onClick={()=>navigate('/home')}>{banners[0].cta}</Button>
              </div>
            </div>
            <div aria-hidden style={{ width: 96, height: 96, borderRadius: 16, background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </Card>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
      }}>
        {list.map(p => (
          <Card key={p.id} onClick={()=>navigate(`/product/${p.id}`)} style={{ padding: 12 }}>
            <div style={{ position: 'relative' }}>
              <div aria-hidden style={{ width: '100%', aspectRatio: '1/1', borderRadius: 12, background: 'var(--gray-200)' }} />
              <button
                aria-label="Add to cart"
                style={{
                  position: 'absolute',
                  right: 8, bottom: 8,
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--color-primary-600)',
                  color: 'var(--white)', border: 'none', cursor: 'pointer',
                  boxShadow: 'var(--elev-2)'
                }}
                onClick={(e)=>{ e.stopPropagation(); navigate(`/product/${p.id}`); }}
              >+</button>
            </div>
            <div style={{ marginTop: 8, fontWeight: 600 }}>{p.title}</div>
            <div className="text-caption" style={{ color: 'var(--gray-600)' }}>Hot • 250ml</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
              <div style={{ fontWeight: 700 }}>${p.price.toFixed(2)}</div>
              <Rating value={p.rating} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
