import React from 'react';
import './Cart.css';
const Cart = (props) => {
    
 
    const cart= props.cart;
    console.log(cart)
    const totalSalary = cart.reduce((sum,player) => sum + player.salary, 0)
    return (
       
        <div className="Container"> 
        <h4>you are add player : {cart.length}</h4>
            {cart.map(player =>
            <ul>
            <li>Player Name : {player.name}</li>
            <li>Player Salary : {player.salary}</li>
       
            </ul>
            
            )}
        

            <p>Total salary : {totalSalary}</p>
        </div>
    );
};

export default Cart;