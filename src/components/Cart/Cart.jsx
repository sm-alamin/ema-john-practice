import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping =shipping + product.shipping;
    }
    const tax = total * 7 /100;
    const grandTotal = total+ shipping + tax;
    return (
        <div className='shopping-cart'>
            <h3 className='text-center'>Order Summery</h3>
            <p className='mt-20'>Selected Items:{cart.length}</p>
            <p className='mt-10'>Total Price:${total}</p>
            <p className='mt-10'>Shipping Charge:${shipping}</p>
            <p className='mt-10'>Tax:${tax.toFixed(2)}</p>
            <h3 className='mt-10'>Grand Total:${grandTotal.toFixed(2)}</h3>

            <div className='mt-20  text-center'>
                <button className='btn-danger'>Clear Cart</button>
                <button className='btn-orange mt-10'>Remove Item</button>
            </div>
            </div>
    );
};

export default Cart;