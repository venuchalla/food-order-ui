import { useReducer } from "react"
import CartContext from "./cart-context"


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        // console.log("actionItem :", action.item, "existindex:", existingItemIndex)
        let updatedItems;
        if (existingItemIndex >= 0) {
            const existingItem = state.items[existingItemIndex]
            //console.log("existing item :", existingItem)
            let updatedAmount = existingItem.amount + action.item.amount
            console.log("count:",updatedAmount)
            let updatedItem = { ...existingItem, amount: updatedAmount }
            updatedItems = state.items
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        console.log("updated items: ",updatedItems)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount }

    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState)
    const addItemHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item })
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (<CartContext.Provider value={cartContext}> {props.children}</CartContext.Provider>)
}
export default CartProvider;