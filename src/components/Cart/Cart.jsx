import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const { cart } = props.cart;//option-2
    // const cart = props.cart; //option-1
    let totalPrice = 0;
    let totalShipping = 0;
    
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    console.log(cart);
    return (
        <div className="cart">
            <h4>Order summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total Price:${ totalPrice}</p>
            <p>Shipping:${ totalShipping}</p>
            <p>Tax:${ tax.toFixed(2)}</p>
            <p>Grand Total:${ grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;