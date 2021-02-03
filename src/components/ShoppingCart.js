import React from 'react';
import List from './List'

const ShoppingCart = (data) => {
    return (
        <div className='shopping-cart'>
            <h2>Shopping List</h2>
            <button onClick={data.data.emptyCart}>Empty cart</button>
            <List {...data}/>
        </div>
    )
}

export default ShoppingCart;