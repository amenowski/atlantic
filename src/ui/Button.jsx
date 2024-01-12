import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = `uppercase py-3 px-4 border border-primary w-1/2 text-center tracking-widest text-sm transition-all duration-300`;

  const styles = {
    primary: base + ' bg-primary text-white hover:bg-[#662e2e]',
    secondary: base + ' bg-white text-primary hover:bg-[#eae1e1]',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
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
