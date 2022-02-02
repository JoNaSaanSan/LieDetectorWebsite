import '../styles/game.scss';
import Camera from '../components/LieDetector';
import Cards from '../components/Cards';
import React, { useState } from 'react';

export default function Spiel() {
  const [tol, setTol] = useState(false);


  return (
    <main>
      <Cards></Cards>
      <p>Nun schaue in die Kamera, klicke auf "Aufzeichnen" und sage dem Computer was für eine Karte du gezogen hast.
      </p>
      <h2>Die Karte, die ich gezogen habe, ist...</h2>
      <Camera setTol={setTol}></Camera>
      <h2>Hat dich der Computer richtig erwischt musst du die Aufgabe (falls vorhanden) ausführen.</h2>

    </main>
  );
}