import React from 'react';

/**
 * Button component supporting variants and sizes.
 * Variants: primary | secondary | tertiary
 * Sizes: md | lg
 */
// PUBLIC_INTERFACE
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
}) {
  /** Button component following Ocean Professional tokens */
  const base = {
    padding: size === 'lg' ? '0 var(--space-20)' : '0 var(--space-16)',
    height: size === 'lg' ? 56 : 52,
    borderRadius: 'var(--radius-12)',
    fontSize: 'var(--fs-button)',
    lineHeight: 'var(--lh-button)',
    fontWeight: 600,
    letterSpacing: '0.3px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    width: block ? '100%' : 'auto',
    transition: 'transform var(--duration-std) var(--ease-standard), background var(--duration-std) var(--ease-standard), box-shadow var(--duration-std) var(--ease-standard)',
    boxShadow: variant === 'primary' ? 'var(--elev-2)' : 'var(--elev-0)',
    border: '1.5px solid transparent',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    opacity: disabled ? 0.5 : 1,
    background: 'transparent',
    color: 'inherit',
  };

  const stylesByVariant = {
    primary: {
      background: 'var(--color-primary-600)',
      color: 'var(--white)',
    },
    secondary: {
      border: '1.5px solid var(--color-primary-600)',
      color: 'var(--color-primary-600)',
      background: 'transparent',
    },
    tertiary: {
      color: 'var(--color-primary-600)',
      background: 'transparent',
      boxShadow: 'none',
    },
  };

  const style = { ...base, ...stylesByVariant[variant] };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={disabled ? undefined : onClick}
      style={style}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.98)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(1)'; }}
      onBlur={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {children}
    </button>
  );
}
