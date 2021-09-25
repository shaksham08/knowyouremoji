import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "💥": "Collision",
  "🦍": "Gorilla",
  "😔": "sad",
  "🙂": "Slightly Smiling Face",
  "😛": "Face with Tongue",
  "😑": "annoyance",
  "🤔": "Thinking Face",
  "😶": "Face Without Mouth",
  "🥵": "Hot Face",
  "😵": "Dizzy Face",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [term, setTerm] = useState("Please search First");

  const handleChange = (e) => {
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setTerm(emojiDictionary[inputEmoji]);
    } else {
      setTerm("OOPS not in our Database!! Try Something From Below");
    }
  };

  const handleClick = (emoji) => {
    setEmoji(emoji);
    setTerm(emojiDictionary[emoji]);
  };
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Enter Emoji to search for"
        value={emoji}
        onChange={handleChange}
        style={{
          width: "400px",
          padding: "1.5rem",
        }}
      />
      <h1>{emoji}</h1>
      <h1>{term}</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {emojis.map((emoji) => {
          return <h1 onClick={() => handleClick(emoji)}>{emoji}&nbsp; </h1>;
        })}
      </div>

      <footer>
        <p>Shaksham</p>
        <a href="https://github.com/shaksham08">
          Github&nbsp; <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shaksham-sinha-788a19190/">
          linkedin&nbsp; <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://shakshamportfolio.netlify.app/">
          Portfolio&nbsp; <i class="fa-solid fa-house"></i>
        </a>
      </footer>
    </div>
  );
}
