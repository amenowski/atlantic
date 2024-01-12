import { createContext, useContext, useState } from 'react';

const MobileNavContext = createContext();

function MobileNavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileNavContext.Provider
      value={{
        onSetIsOpenNav: setIsOpen,
        isNavOpen: isOpen,
      }}
    >
      {children}
    </MobileNavContext.Provider>
  );
}

function useMobileNav() {
  const context = useContext(MobileNavContext);
  if (!context) throw new Error('Wrong place to use mobile nav');
  return context;
}

export { MobileNavProvider, useMobileNav };
