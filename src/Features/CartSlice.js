import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    cartItems:localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")):[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}
const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuentity+=1
            }
            else{
                const tempProduct = {...action.payload,cartQuentity: 1}
            state.cartItems.push(tempProduct)
            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
            
        },

        removeFromCart(state,action){
          const nextCartItems =  state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems
                localStorage.setItem("cartItem",JSON.stringify(state.cartItems))
        },
        getTotals(state,action) {
            console.log(state.cartItems,action)
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) =>{
                    const {price , cartQuantity} = cartItem
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                    
                },{
                    total: 0,
                    quantity:0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
   
})
export const {addToCart, removeFromCart,getTotals} = cartSlice.actions

export default cartSlice.reducer