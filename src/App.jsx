import { useState } from "react"
import "./App.css"

import Chord from "@tombatossals/react-chords/lib/Chord"
import { Typeahead } from "react-bootstrap-typeahead"
import GuitarChords from "@tombatossals/chords-db/lib/guitar.json"

const GUITAR = {
  strings: 6,
  fretsOnChord: 6,
  name: "Guitar",
  keys: [],
  tunings: {
    standard: ["E", "A", "D", "G", "B", "E"],
  },
}

const mappedGuitarChords = Object.values(GuitarChords.chords).flatMap(
  (chord) => chord
)

function App() {
  const [chords, setChords] = useState([mappedGuitarChords[0]])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chords Viewer</h1>
        <Typeahead
          multiple
          options={mappedGuitarChords}
          highlightOnlyResult={true}
          labelKey={(option) => `${option.key}${option.suffix}`}
          onChange={(selected) => {
            setChords(selected)
          }}
        />
        <div>
          {chords.map((chord) => (
            <div class="chord">
              <h2>
                {chord.key}
                <sub>{chord.suffix}</sub>
              </h2>
              <Chord chord={chord.positions[0]} instrument={GUITAR} />
            </div>
          ))}
        </div>
      </header>
      <footer>
        Made by{" "}
        <a href="https://github.com/jonspe" target="_blank">
          Joona Perasto
        </a>
        , utilizing{" "}
        <a href="https://github.com/tombatossals" target="_blank">
          David Rubert's
        </a>{" "}
        <a href="https://github.com/tombatossals/chords-db" target="_blank">
          chords-db
        </a>{" "}
        and{" "}
        <a href="https://github.com/tombatossals/react-chords" target="_blank">
          react-chords
        </a>
      </footer>
    </div>
  )
}

export default App
