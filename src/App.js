import { useEffect, useState } from "react";
import "./App.css";
import clear from "./clear.png";
import LetterGrid from "./LetterGrid";
import WinBoard from "./WinBoard";
import wordList from "./wordList.json";
const green = { backgroundColor: "#538D4E", animationName: "flip" };
const yellow = { backgroundColor: "#B59F3B", animationName: "flip" };
const grey = { backgroundColor: "#3A3A3C", animationName: "flip" };
function App() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [myWord, setMyWord] = useState([[], [], [], [], [], []]);
  const [myColor, setMyColor] = useState([[], [], [], [], [], []]);
  const [myKeyboard, setMyKeyoard] = useState([]);
  const [letters, setLetters] = useState([]);
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const [selectedWord, setSelectedWord] = useState(
    wordList[randomIndex].toString().toUpperCase()
  );
  const [isWon, setIsWon] = useState(false);
  useEffect(() => {
    console.log(selectedWord);
    for (var index = 0; index < 26; index++) {
      letters[index] = 0;
    }
    for (index = 0; index < 5; index++) {
      var temp = selectedWord.charCodeAt(index) - 65;
      letters[temp]++;
    }
    setLetters([...letters]);
  }, []);
  const handleKeyPressed = (key) => {
    if (i < 6 && j < 5) {
      myWord[i][j] = key;
      setJ(j + 1);
      setMyWord([...myWord]);
    }
    // console.log(key);
    // console.log(myWord);
  };
  const handleClear = () => {
    if (j >= 0) {
      setJ(j - 1);
      myWord[i].splice(-1, 1);
      setMyWord([...myWord]);
    }
  };
  const handleEnter = () => {
    if (j === 5) {
      var count = 0;
      for (var index = 0; index < 5; index++) {
        var temp = myWord[i][index].charCodeAt(0) - 65;
        if (myWord[i][index] === selectedWord.charAt(index)) {
          console.log("index: " + myWord[i][index] + " is correct");
          letters[temp] = letters[temp] - 1;
          myColor[i][index] = green;
          myKeyboard[temp] = green;
          count++;
        }
      }
      if (count === 5) {
        // alert("you won");
        setIsWon(true);
        console.log("YOU WON");
      }
      for (index = 0; index < 5; index++) {
        temp = myWord[i][index].charCodeAt(0) - 65;
        if (
          selectedWord.indexOf(myWord[i][index].charAt(0)) !== -1 &&
          letters[temp] !== 0
        ) {
          myColor[i][index] = yellow;
          myKeyboard[temp] = yellow;
          letters[temp] = letters[temp] - 1;
          console.log("index: " + myWord[i][index] + " is at wrong place");
        }
      }
      for (index = 0; index < 5; index++) {
        temp = myWord[i][index].charCodeAt(0) - 65;
        if (
          selectedWord.indexOf(myWord[i][index]) === -1 ||
          (selectedWord.indexOf(myWord[i][index]) !== -1 &&
            letters[temp] === 0 &&
            myColor[i][index] === undefined)
        ) {
          myColor[i][index] = grey;
          myKeyboard[temp] = grey;
          console.log("index: " + myWord[i][index] + " is incorrect");
        }
      }

      setMyColor([...myColor]);
      setMyKeyoard([...myKeyboard]);
      setJ(0);
      if (i <= 5) {
        setI(i + 1);
      }
      for (index = 0; index < 26; index++) {
        letters[index] = 0;
      }
      for (index = 0; index < 5; index++) {
        temp = selectedWord.charCodeAt(index) - 65;
        letters[temp]++;
      }
      setLetters([...letters]);
    }
  };
  return (
    <div className="App">
      <div className="wordle">Wordle</div>
      <div className="grid">
        <LetterGrid value="word0" wordLog={myWord[0]} colorLog={myColor[0]} />
        <LetterGrid value="word1" wordLog={myWord[1]} colorLog={myColor[1]} />
        <LetterGrid value="word2" wordLog={myWord[2]} colorLog={myColor[2]} />
        <LetterGrid value="word3" wordLog={myWord[3]} colorLog={myColor[3]} />
        <LetterGrid value="word4" wordLog={myWord[4]} colorLog={myColor[4]} />
        <LetterGrid value="word5" wordLog={myWord[5]} colorLog={myColor[5]} />
      </div>
      <div className="keyboard">
        <ul className="row row-1">
          <li
            className="pinky"
            id="Q"
            style={myKeyboard["Q".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("Q")}
          >
            Q
          </li>
          <li
            className="ring"
            id="W"
            style={myKeyboard["W".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("W")}
          >
            W
          </li>
          <li
            className="middle"
            id="E"
            style={myKeyboard["E".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("E")}
          >
            E
          </li>
          <li
            className="pointer1st"
            id="R"
            style={myKeyboard["R".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("R")}
          >
            R
          </li>
          <li
            className="pointer2nd"
            id="T"
            style={myKeyboard["T".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("T")}
          >
            T
          </li>
          <li
            className="pointer2nd"
            id="Y"
            style={myKeyboard["Y".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("Y")}
          >
            Y
          </li>
          <li
            className="pointer1st"
            id="U"
            style={myKeyboard["U".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("U")}
          >
            U
          </li>
          <li
            className="middle"
            id="I"
            style={myKeyboard["I".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("I")}
          >
            I
          </li>
          <li
            className="ring"
            id="O"
            style={myKeyboard["O".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("O")}
          >
            O
          </li>
          <li
            className="pinky"
            id="P"
            style={myKeyboard["P".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("P")}
          >
            P
          </li>
        </ul>
        <ul className="row row-2">
          <li
            className="pinky"
            id="A"
            style={myKeyboard["A".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("A")}
          >
            A
          </li>
          <li
            className="ring"
            id="S"
            style={myKeyboard["S".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("S")}
          >
            S
          </li>
          <li
            className="middle"
            id="D"
            style={myKeyboard["D".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("D")}
          >
            D
          </li>
          <li
            className="pointer1st"
            id="F"
            style={myKeyboard["F".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("F")}
          >
            F
          </li>
          <li
            className="pointer2nd"
            id="G"
            style={myKeyboard["G".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("G")}
          >
            G
          </li>
          <li
            className="pointer2nd"
            id="H"
            style={myKeyboard["H".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("H")}
          >
            H
          </li>
          <li
            className="pointer1st"
            id="J"
            style={myKeyboard["J".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("J")}
          >
            J
          </li>
          <li
            className="middle"
            id="K"
            style={myKeyboard["K".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("K")}
          >
            K
          </li>
          <li
            className="ring"
            id="L"
            style={myKeyboard["L".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("L")}
          >
            L
          </li>
        </ul>
        <ul className="row row-3">
          <li className="pinky" id="enter" onClick={handleEnter}>
            ENTER
          </li>
          <li
            className="pinky"
            id="Z"
            style={myKeyboard["Z".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("Z")}
          >
            Z
          </li>
          <li
            className="ring"
            id="X"
            style={myKeyboard["X".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("X")}
          >
            X
          </li>
          <li
            className="middle"
            id="C"
            style={myKeyboard["C".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("C")}
          >
            C
          </li>
          <li
            className="pointer1st"
            id="V"
            style={myKeyboard["V".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("V")}
          >
            V
          </li>
          <li
            className="pointer2nd"
            id="B"
            style={myKeyboard["B".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("B")}
          >
            B
          </li>
          <li
            className="pointer2nd"
            id="N"
            style={myKeyboard["N".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("N")}
          >
            N
          </li>
          <li
            className="pointer1st"
            id="M"
            style={myKeyboard["M".charCodeAt(0) - 65]}
            onClick={() => handleKeyPressed("M")}
          >
            M
          </li>
          <li className="pinky" id="back" onClick={handleClear}>
            <img src={clear} alt="clear" />
          </li>
        </ul>
      </div>
      {isWon? <WinBoard wordSelected={selectedWord} won={()=>isWon} />:<></>}
      
    </div>
  );
}

export default App;
