import React, { createContext, useState } from "react";

export const ShopContext = createContext({
    categories: [],
    products: [],
    cartItems: [],
    favoriteItems: [],
    activeProduct:  {},
    totalCost: 0,
    addCartItem: () => {},
    addFavItem: () => {},
    removeCartItem: () => {},
    removeFavItem: () => {},
    setActiveProduct: () => {},
    setTotalCost: () => {}
})


export const ShopProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [favoriteItems, setFavoriteItems] = useState([])
    const [activeProduct, setActiveProduct] = useState({})
    const [totalCost, setTotalCost] = useState(0)

    const addCartItem = (item) => {

    }

    const addFavItem = (item) => {

    }

    const removeCartItem = (item, index) => {

    }

    const removeFavItem = (itemm, index) => {

    }


    return (
        <ShopContext.Provider value = {{
            cartItems,
            favoriteItems,
            activeProduct,
            totalCost,
            addCartItem,
            addFavItem,
            removeCartItem,
            removeFavItem,
            setActiveProduct,
            setTotalCost
        }}>
            {children}
        </ShopContext.Provider>
    )
}