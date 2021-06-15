import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import api from '../../services/api'

const CartContext = createContext();


//  fazer todas as funções aqui e passar no value

 export const CartProvider = ({ children }) => {
    const [menu, setMenu] = useState([]);
    const [confraternization, setConfraternization] = useState([])
    const [prom, setProm] = useState([])
    const [wedding, setWedding] = useState([])
   
    const loadCatalog = (data) => {
        api
            .get('https://api.punkapi.com/v2/beers')
            .then(response => setMenu(response.data))
    }

    const addToConfraternization = (product) => {
        console.log(product)
        setConfraternization([...confraternization, product])
        console.log("teste")
    }

    const addToProm = (product) => {
        setProm([...prom, product])
    }

    const addToWedding = (product) => {
        setWedding([...wedding, product])
    }

    useEffect (() => {
        loadCatalog()
        console.log(menu)
    }, []);

   return (
   

        <CartContext.Provider value={{  menu, 
                                        setMenu, 
                                        confraternization, 
                                        setConfraternization, 
                                        prom, 
                                        setProm, 
                                        wedding,
                                        setWedding,
                                        addToConfraternization,
                                        addToProm,
                                        addToWedding,
                                        loadCatalog                                         
                                        }}
        > 
          {children}
        </CartContext.Provider>
    );
 };

export const useCart = () => useContext(CartContext);
