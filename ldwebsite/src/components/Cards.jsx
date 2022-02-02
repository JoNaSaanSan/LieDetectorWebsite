import React, { useState, useEffect } from 'react';
import './styles/cards.scss';

const Cards = () => {
    const [currentText, setCurrentText] = useState("Karte ziehen");
    const [currentColor, setCurrentColor] = useState("blue");
    const [allCards, setAllCards] = useState([]);

    const resetCards = () => {
        setCurrentColor("blue")
        setCurrentText("Karte ziehen")
        const normalCards = Array.from({ length: 80 }, () => { return { cardText: "", cardColor: ((getRandomInt(2) % 2) === 0) ? "black" : "red" } });
        const specialCardsColor = "orange"
        const specialCardsText = ["Mache 5 Liegestützen", "Poste ein Selfie von dir", "Trinke einen Shot!", "Imitiere eine Person aus der Gruppe. Die anderen müssen erraten, wen du meinst", "Tanze eine Minute lang zu einem Lied deiner Wahl", "Zeig allen deine Google-Historie", "Exe dein Getränk, ohne deine Hände zu benutzen", "Zeige allen deine letzte WhatsApp-Nachricht",
            , "Du bist für diese Runde der Butler. Bediene die anderen mit Getränken"
            , "Mache der Person links von dir ein ernstgemeintes Kompliment"
            , "Zeig allen ein peinliches Foto von dir beim Feiern"
            , "Iss ein Stück Knoblauch"
            , "Imitiere ein Tier deiner Wahl"
            , "Mache einen Purzelbaum"
            , "Dein linker Nachbar darf dir eine persönliche Frage stellen. Beantworte sie ehrlich!"
            , "Erzähl eine peinliche Geschichte von dir"
            , "Gib deinem linken Nachbarn dein Handy. Er/Sie darf etwas in deiner Instagram-Story posten"
            , "Frag deinen Exfreund/ deine Exfreundin per WhatsApp, wie es ihm/ihr so geht"
            , "Zeig allen, was du in deinem Geldbeutel hast"]
        const specialCards = specialCardsText.map((text) => {
            return { cardText: text, cardColor: specialCardsColor }
        })

        setAllCards(specialCards.concat(normalCards))
    }
    useEffect(() => {
    }, [])

    const pickCard = () => {
        console.log(allCards)
        const pickedCardIndex = getRandomInt(allCards.length - 1)

        console.log(pickedCardIndex)
        const pickedCard = allCards[pickedCardIndex]
        removeCard(pickedCardIndex)



        setCurrentColor(pickedCard.cardColor)
        setCurrentText(pickedCard.cardText.toString())

    }

    const removeCard = (index) => {
        var array = [...allCards]; // make a separate copy of the array
        if (index !== -1) {
            array.splice(index, 1);
            setAllCards(array);
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <>
            <button className="button-59" onClick={() => resetCards()}> {(allCards.length > 0) ? "Neustarten" : "Start Game"}</button>

            <main className="card-container">
                <div className="card-content">
                    <p>Ziehe eine Karte</p>
                    {allCards.length > 0 && <div className="card" onClick={() => pickCard()} style={{ color: "white", backgroundColor: currentColor, height: "240px", width: "150px" }}>
                        {currentText}
                    </div>}
                </div>
            </main ></>
    );
}

export default Cards