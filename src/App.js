import React, { useState } from "react";
import "./styles.css";
import data from "./data.js";

let trekDataKey = Object.keys(data);

export default function App() {
  let [trek, setTrek] = useState(data.Winter);

  function onClickHandler(season) {
    setTrek(data[season]);

    console.log(trek);
  }

  function getTrekItem(trek) {
    let trekName = trek.name;
    let trekRating = trek.rating;
    let trekDesc = trek.desc;

    let listing = (
      <li className="trek-item">
        <h2>{trekName}</h2>
        <h3 className="rating">
          rating - <strong>{trekRating}</strong>
        </h3>
        <p>{trekDesc}</p>
      </li>
    );
    return listing;
  }
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="head-font" style={{ fontSize: "3rem" }}>
            Trekking World{" "}
            <span role="img" aria-label="trek">
              🏔️👨‍🦯
            </span>
          </h1>
          <small>
            "Mountains have a way of dealing with overconfidence" - Hermann Buhl
          </small>

          <h3 className="head-font" style={{ paddingTop: "1rem" }}>
            Some popular treks of all seasons.
          </h3>
        </header>

        <div className="btnGroup">
          {trekDataKey.map((trekClick) => {
            return (
              <button className="btn" onClick={() => onClickHandler(trekClick)}>
                {trekClick}
              </button>
            );
          })}
        </div>

        <ul className="trek">
          {trek.map((trekClick) => {
            return getTrekItem(trekClick);
          })}
        </ul>
      </div>
    </div>
  );
}
