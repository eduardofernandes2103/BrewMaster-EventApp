// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const ConfraternizationProvider = ({ children }) => {
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
