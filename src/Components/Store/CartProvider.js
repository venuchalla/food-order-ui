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
            console.log("existing item :", existingItem)
            let updatedAmount = existingItem.amount + action.item.amount
            let updatedItem = { ...existingItem, amount: updatedAmount }
            updatedItems =  state.items
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
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