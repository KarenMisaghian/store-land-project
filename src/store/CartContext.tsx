import { useContext, createContext, useState } from "react"
import React from "react"
import Product from "../models/Product";

type ShoppingCartProviderProps = {
    children: React.ReactNode
}

type ShoppingCartContext = {
    getItemQuantity: (passedProduct: Product) => number;
    increaseItemQuantity: (passedProduct: Product) => void;
    decreaseItemQuantity: (passedProduct: Product) => void;
    removeFromCart: (passedProduct: Product) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

type CartItem = {
    product: Product;

    quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(passedProduct: Product) {
        return cartItems.find(item => item.product.id === passedProduct.id)?.quantity || 0
    }
    function increaseItemQuantity(passedProduct: Product) {
        setCartItems(currItems => {
            if (currItems.find(item => item.product.id === passedProduct.id) == null) {
                return [...currItems, { product: passedProduct, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.product.id === passedProduct.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    function decreaseItemQuantity(passedProduct: Product) {
        setCartItems(currItems => {
            if (currItems.find(item => item.product.id === passedProduct.id)?.quantity === 1) {
                return currItems.filter(item => item.product.id != passedProduct.id);
            } else {
                return currItems.map(item => {
                    if (item.product.id === passedProduct.id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                })
            }
        })
    }
    function removeFromCart(passedProduct: Product) {
        setCartItems(currItems => {
            return currItems.filter(item => item.product.id != passedProduct.id);
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartItems, cartQuantity }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}