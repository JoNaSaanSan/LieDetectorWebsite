import '../styles/game.scss';
import Camera from '../components/Camera';
import React, { useState } from 'react';

export default function Game() {
  const [tol, setTol] = useState(false);


  return (
    <main>
      <h2>Are You Lying?</h2>
      <Camera setTol={setTol}></Camera>
    </main>
  );
}