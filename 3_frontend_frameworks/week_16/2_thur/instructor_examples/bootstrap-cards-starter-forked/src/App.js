import React from "react";
import "./styles.css";
import cardsArr from './data'
import Card from "./components/Card";
// import Card2 from "./components/Card2";

export default function App() {
  const cards = cardsArr.map((card, i) => {
    return (
      <Card
        {...card}
        key={card.title+i}
      />
    )
  })
  console.log(cards)

  // console.log(cardsArr)
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* {cardsToDisplay.map((card) => {
          return <Card1 name={card.name} key={card.name} />
        })} */}
        {/* <Card1 name='Santorini' /> */}
        {/* <Card2 /> */}
      </section>
    </div>
  );
}
