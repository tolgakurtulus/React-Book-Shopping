import { data } from "../data";

const INITIAL_STATE = {
    bookList: data,
    cart: []
};

export const reducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case "ADD_BASKET":
        return { ...state, cart : state.cart.concat(action.payload) };
        // return { ...state, cart : [...state.cart, action.payload] }; 
        //(...state(Stati aç Demek), cart :(cart içine gir)...state.cart(cartı aç, action.payload(gelen payloadu koy)) )
    case "REMOVE_BASKET":
        return { ...state, cart : state.cart.filter((book, key) => key !== action.payload) };
    case 'UPDATE_BASKET':
        return { ...state, cart : state.cart.map(cart => {
            if(cart.id === action.payload.keyid) {
                return {
                    ...cart,
                    totalprice: cart.price * action.payload.selectval 
                }
            }
            return cart;      
        })};       
    default:
        return state
    };
};