import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick, width }) {
  const base = ` gap-2 uppercase border border-primary text-center tracking-widest transition-all duration-300`;

  const styles = {
    primary:
      base +
      ` p-3  md:p-4 bg-primary text-white hover:bg-[#662e2e] tracking-wide sm:tracking-widest w-${width} `,
    secondary:
      base + ` py-4 px-4 bg-white text-primary hover:bg-[#eae1e1] w-${width} `,
    primarySmall:
      base +
      ` p-2 flex items-center text-sm bg-primary text-white hover:bg-[#662e2e] tracking-wide sm:tracking-widest w-${width} `,
  };

  if (to)
    return (
      <Link to={to} onClick={onClick} className={`block ${styles[type]} `}>
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
