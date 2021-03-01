import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Player.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from './player-cart/Cart';


const Player = (props) => {

    console.log(props)
  
  
    const {name, salary,team, image, jersey} = props.player;
    

    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div>
        <div className="player-container"> 
         <img className="playerImg" src={image} alt=""/>
       <h4>player Name : {name}</h4>
       <p>player salary : {salary}</p>
       <p>player team : {team}</p>
     

      
      
       {/* <Cart cart={cart}></Cart> */}
       <button className="btn btn-primary" onClick={()=>handleAddPlayer(props.player)}><FontAwesomeIcon icon={faShoppingCart} /> Add Player to Cart</button>
       </div>
       <div>
           {/* <ul>{  <Cart cart= {Cart}></Cart>}</ul> */}
         
       
       
       </div>
       </div>
       
    );
};

export default Player;