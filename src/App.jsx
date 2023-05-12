import { useState, useEffect } from "react";
import note1 from "./assets/Cev_H2.mp3";
import note2 from "./assets/Dsc_Oh.mp3";
import note3 from "./assets/Heater-1.mp3";
import note4 from "./assets/Heater-2.mp3";
import note5 from "./assets/Heater-3.mp3";
import note6 from "./assets/Heater-4_1.mp3";
import note7 from "./assets/Heater-6.mp3";
import note8 from "./assets/Kick_n_Hat.mp3";
import note9 from "./assets/RP4_KICK_1.mp3";
import "./App.css";

function App() {
  const notes = [note1, note2, note3, note4, note5, note6, note7, note8, note9];
  const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const playPause = (e) => {
    const source = e.target.childNodes[0].src;
    const newNote = new Audio(source);
    newNote.play();
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      const pressedKey = e.key.toUpperCase();
      const index = letters.indexOf(pressedKey);
      if (index !== -1) {
        const newNote = new Audio(notes[index]);
        newNote.play();
      }
    });
  });

  return (
    <>
      <main id="drum-machine" className="drum-machine">
        <div id="display" className="display">
          {letters.map((letter, index) => {
            return (
              <button key = {index} onClick={playPause} className="drum-pad">
                <audio src={notes[index]} className="clip"></audio>
                {letter}
              </button>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
