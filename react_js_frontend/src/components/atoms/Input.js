import React from 'react';

// PUBLIC_INTERFACE
export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  helperText,
  leading,
  trailing,
  name,
  autoComplete,
}) {
  /** Text input with label and optional icons */
  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label
          htmlFor={name}
          style={{
            display: 'block',
            marginBottom: '6px',
            color: 'var(--gray-600)',
            fontSize: 'var(--fs-caption)',
            lineHeight: 'var(--lh-caption)',
            fontWeight: 500,
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 48,
          padding: '0 12px',
          borderRadius: 'var(--radius-12)',
          border: `1px solid ${error ? 'var(--color-danger-500)' : 'var(--gray-200)'}`,
          background: 'var(--white)',
          boxShadow: 'var(--elev-0)',
        }}
      >
        {leading && <span style={{ display: 'inline-flex', color: 'var(--gray-500)' }}>{leading}</span>}
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            flex: 1,
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: 'var(--fs-body-2)',
            lineHeight: 'var(--lh-body-2)',
            color: 'var(--gray-900)',
            background: 'transparent',
          }}
        />
        {trailing && <span style={{ display: 'inline-flex', color: 'var(--gray-500)' }}>{trailing}</span>}
      </div>
      {helperText && (
        <div
          style={{
            marginTop: 6,
            color: error ? 'var(--color-danger-500)' : 'var(--gray-600)',
            fontSize: 'var(--fs-caption)',
            lineHeight: 'var(--lh-caption)',
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
}
