import '../styles/game.scss';
import Camera from '../components/LieDetector';
import Cards from '../components/Cards';
import React, { useState } from 'react';

export default function Game() {
  const [tol, setTol] = useState(false);


  return (
    <main>
      <h2>Diese Karte hat die Farbe...</h2>  
      <Cards></Cards>
      <Camera setTol={setTol}></Camera>

    </main>
  );
}