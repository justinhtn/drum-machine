import React from "react";
import "../src/styles.css";

const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const sounds = {
  Q: "samples/crash.mp3",
  W: "samples/kick2.mp3",
  E: "samples/hi-hat.mp3",
  A: "samples/snare.mp3",
  S: "samples/ride.mp3",
  D: "samples/ride.mp3",
  Z: "samples/ride.mp3",
  X: "samples/perc2.mp3",
  C: "samples/low-tom.mp3"
};

class App extends React.Component {
  pushPlay(key) {
    let audio = new Audio(sounds[key]);
    audio.play();

    console.log(audio);
  }
  handleKeyDown(e) {
    let key = e.key.toUpperCase();
    let audio = new Audio(sounds[key]);
    audio.play();

    try {
      document.getElementsByClassName(key)[0].focus();
    } catch {
      console.log("Key not associated with kit");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div>
            <h1> Drum machine </h1>
          </div>
          <div id="drum-machine">
            {letters.map(letter => {
              return (
                <div
                  key={letter}
                  id="drum-pad"
                  className={letter}
                  onClick={() => this.pushPlay(letter)}
                  onKeyDown={e => this.handleKeyDown(e)}
                  tabIndex={0}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
