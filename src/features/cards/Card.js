import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice";

export default function Card({ id }) {
  const card = useSelector(selectCardById);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card[id].back : card[id].front}
      </button>
    </li>
  );
}
