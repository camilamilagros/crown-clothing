import { cartActionTypes } from './cart.types';

export const setCurrentcart = cart => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
    payload: cart
})