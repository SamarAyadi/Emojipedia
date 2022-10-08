import React from "react";
import Card from "./Card";
import Emoji from "../emojipedia";

function createCard(emoji) {
  return (
    <div>
      <Card
        key={emoji.id}
        name={emoji.name}
        emoji={emoji.emoji}
        meaning={emoji.meaning}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>EmojiPedia</span>
      </h1>
      {Emoji.map(createCard)}
    </div>
  );
}

export default App;
