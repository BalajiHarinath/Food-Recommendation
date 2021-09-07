import React from "react";
import { useState } from "react";
import "./styles.css";

const foodList = {
  SouthIndian: [
    { name: "Masala Dosa", rating: "5/5" },
    { name: "Idli", rating: "4/5" },
    { name: "Lemon Rice", rating: "3/5" }
  ],
  NorthIndian: [
    { name: "Naan", rating: "5/5" },
    { name: "Pav Bahji", rating: "4/5" },
    { name: "Roti", rating: "3/5" }
  ],
  Chinese: [
    { name: "Noodles", rating: "5/5" },
    { name: "Manchurian", rating: "4/5" },
    { name: "Spring roll", rating: "3/5" }
  ]
};

var foodItems = Object.keys(foodList);

export default function App() {
  const [items, setitems] = useState("SouthIndian");

  function onClickHandler(item) {
    setitems(item);
  }

  return (
    <div className="App">
      <h1>Food Recommendation</h1>
      <h2>Checkout my favourite food items!</h2>
      <div>
        {foodItems.map((item) => (
          <button
            onClick={() => onClickHandler(item)}
            style={{
              padding: "0.5rem 1rem",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: "0.5rem",
              backgroundColor: "#9CA3AF",
              margin: "0.5rem 1rem",
              fontWeight: "bold"
            }}
          >
            {item}
          </button>
        ))}
        <hr />
      </div>

      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodList[items].map((food) => (
            <li
              style={{
                border: "0.5px solid #D1D5DB",
                listStyle: "none",
                width: "40%",
                height: "10vh",
                margin: "1rem"
              }}
            >
              <div style={{ fontSize: "large", paddingTop: "0.5rem" }}>
                {" "}
                {food.name}
              </div>
              <div
                style={{
                  fontSize: "small",
                  paddingBottom: "0.5rem"
                }}
              >
                {" "}
                {food.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
