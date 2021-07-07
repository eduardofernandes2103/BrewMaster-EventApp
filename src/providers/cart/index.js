import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import api from '../../services/api'
import {toast}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


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
        setConfraternization([...confraternization, product])
        toast.success('Add to Confraternization')
    }

    const addToProm = (product) => {
        setProm([...prom, product])
        toast.success('Add to Prom')
    }

    const addToWedding = (product) => {
        setWedding([...wedding, product])
        toast.success('Add to Wedding')
    }

    const removeToConfraternization = (product) => {
        setConfraternization(confraternization.filter((element) => element.id !== product.id))
        toast.error('Remove Beer from Confraternization')
    }

    const removeToProm = (product) => {
        setProm(prom.filter((element) => element.id !== product.id))
        toast.error('Remove Beer from Prom')
    }

    const removeToWedding = (product) => {
        setWedding(wedding.filter((element) => element.id !== product.id))
        toast.error('Remove Beer from Wedding')
    }

    useEffect (() => {
        loadCatalog()
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
                                        removeToConfraternization,
                                        removeToProm,
                                        removeToWedding,
                                        loadCatalog                                         
                                        }}
        > 
          {children}
        </CartContext.Provider>
    );
 };

export const useCart = () => useContext(CartContext);
