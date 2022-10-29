import React from "react";
const defaultValue = {
    items :[],
    addItem : ()=>{},
    removeItem : ()=>{}
}
const CartContext= React.createContext(defaultValue);

export default CartContext;