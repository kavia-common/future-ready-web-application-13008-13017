import React, { useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// Screens (imports must be at the top)
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/home/Home';
import ProductDetail from './screens/product/ProductDetail';
import Cart from './screens/cart/Cart';
import Checkout from './screens/cart/Checkout';
import OrderTracking from './screens/order/OrderTracking';
import Profile from './screens/profile/Profile';

// Layout
import MainLayout from './components/layout/MainLayout';

/**
 * AppState context keeps global app state:
 * - auth (mock)
 * - cart
 * - theme preferences
 */
const AppContext = React.createContext(null);

// PUBLIC_INTERFACE
export function useApp() {
  /** Hook to access application context */
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

function AppProvider({ children }) {
  const [user, setUser] = useState(null); // mock auth
  const [onboarded, setOnboarded] = useState(false);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex(p => p.id === item.id && p.size === item.size);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + (item.qty || 1) };
        return copy;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  const updateQty = (id, size, qty) => {
    setCart(prev => prev.map(i => (i.id === id && i.size === size ? { ...i, qty } : i)).filter(i => i.qty > 0));
  };

  const clearCart = () => setCart([]);

  const value = useMemo(() => ({
    user, setUser,
    onboarded, setOnboarded,
    cart, addToCart, updateQty, clearCart,
    theme, setTheme
  }), [user, onboarded, cart, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function Protected({ children }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function Gate() {
  const { user, onboarded } = useApp();
  if (!onboarded) return <Navigate to="/onboarding" replace />;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to="/home" replace />;
}

// PUBLIC_INTERFACE
function App() {
  /** Root App with routing and providers */
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/gate" element={<Gate />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Protected><MainLayout /></Protected>}>
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
