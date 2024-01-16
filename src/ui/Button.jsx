import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick, width }) {
  const base = `uppercase py-4 px-4 border border-primary text-center tracking-widest text-sm transition-all duration-300`;

  const styles = {
    primary:
      base +
      ` bg-primary text-white hover:bg-[#662e2e] text-sm tracking-wide sm:text-base sm:tracking-widest w-${width} `,
    secondary: base + ` bg-white text-primary hover:bg-[#eae1e1] w-${width} `,
  };

  if (to)
    return (
      <Link to={to} className={`block ${styles[type]} `}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
