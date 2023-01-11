import React from "react";
const defaultValue = {
    items :[],
    addItem : ()=>{},
    removeItem : ()=>{},
    clearItems :()=>{}
}
const CartContext= React.createContext(defaultValue);

export default CartContext;