import React, { useState, useEffect } from "react";
import cardsData from "api/cards.json";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-11 rounded-lg shadow-md flex flex-col items-center text-center">
            <img src={card.image} alt={card.title} className="w-[150px] h-[150px] mb-6"/>
            <h6 className="text-lg font-semibold text-primary-brand-color ">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
