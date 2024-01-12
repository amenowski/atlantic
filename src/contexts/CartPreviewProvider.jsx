import { createContext, useContext, useState } from 'react';

const CartPreviewContext = createContext();

function CartPreviewProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartPreviewContext.Provider
      value={{
        onSetIsOpenCart: setIsOpen,
        isCartOpen: isOpen,
      }}
    >
      {children}
    </CartPreviewContext.Provider>
  );
}

function useCartPreview() {
  const context = useContext(CartPreviewContext);
  if (!context) throw new Error('Wrong place to use cart provider');
  return context;
}

export { CartPreviewProvider, useCartPreview };
