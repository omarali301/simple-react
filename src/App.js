import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Player from './component/player/Player';
import Cart from './component/player-cart/Cart';

function App() {

  const [players, setPlayers] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://api.mocki.io/v1/40761893")
    .then(res => res.json())
    .then(data =>setPlayers(data))
    
    .catch(error => console.log(error))


  },[]);

  const handleAddPlayer = (player)=> {
   const newCart = [...cart, player];
   setCart(newCart);
  
  }
  return (
    <div className="App">
       <h1>Bangladesh National cricket team</h1>
     
      <Cart cart={cart}></Cart>
    <ul> {
    
    players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>
    
    )} </ul>
     
    
        </div>
  );
}

export default App;
