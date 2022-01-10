import React, { useState, useEffect } from 'react';
import './styles/cards.scss';

const Cards = () => {
    const [color, setColor] = useState('');
    useEffect(() => {
        setColor("red")
    }, [])

    const pickCard = () => {
        if ((getRandomInt(2) % 2) === 0) {
            setColor("red")
        } else {
            setColor("black")
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <main className="card-container">
            <div className="card-content">
                <div className="card" onClick={() => pickCard()} style={{ backgroundColor: color, height: "120px", width: "75px" }}>
                    Pick a Card
                </div>
            </div>
        </main >
    );
}

export default Cards