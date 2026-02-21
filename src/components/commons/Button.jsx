import '../../styles/button.css';

export default function Button({
  children,
  variant = 'primary', // primary | secondary | accent | neutral | danger | subtle
  size = 'md', // sm | md | lg
  fullWidth = false,
  outline = false,
  ghost = false,
  pill = false,
  loading = false,
  leftIcon,
  rightIcon,
  disabled = false,
  ...props
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    outline && 'btn-outline',
    ghost && 'btn-ghost',
    pill && 'btn-pill',
    fullWidth && 'btn-full',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="btn-spinner" />}
      {!loading && leftIcon && <span className="btn-icon">{leftIcon}</span>}
      <span className="btn-text">{children}</span>
      {!loading && rightIcon && <span className="btn-icon">{rightIcon}</span>}
    </button>
  );
}
