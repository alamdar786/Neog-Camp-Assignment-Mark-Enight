import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🇮🇳": "India",
  "🇨🇦": "Canada",
  "🇦🇺": "Australia",
  "🇧🇷": "Brazil",
  "🇫🇷": "France",
  "🇺🇸": "America"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Guess the Flag </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> Flags We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
