import { useState } from "react"
import "./App.css"

import Chord from "@tombatossals/react-chords/lib/Chord"
import { Typeahead } from "react-bootstrap-typeahead"
import GuitarChords from "@tombatossals/chords-db/lib/guitar.json"
import UkuleleChords from "@tombatossals/chords-db/lib/ukulele.json"

const GUITAR = {
  strings: 6,
  fretsOnChord: 4,
  name: "Guitar",
  keys: [],
  tunings: {
    standard: ["E", "A", "D", "G", "B", "E"],
  },
}

const UKULELE = {
  strings: 4,
  fretsOnChord: 4,
  name: "Ukulele",
  keys: [],
  tunings: {
    standard: ["G", "C", "E", "A"],
  },
}

const mappedGuitarChords = Object.values(GuitarChords.chords).flatMap(
  (chord) => chord
)

const mappedUkuleleChords = Object.values(UkuleleChords.chords).flatMap(
  (chord) => chord
)

function App() {
  const [instrument, setInstrument] = useState(GUITAR)
  const [chords, setChords] = useState([])

  return (
    <div>
      <header class="pt-5 pb-4 border-bottom">
        <div class="container">
          <div class="d-flex">
            <h1>Chords Viewer</h1>
          </div>
          <div class="row">
            <div class="col-xl">
              <Typeahead
                multiple
                options={mappedGuitarChords}
                highlightOnlyResult={true}
                labelKey={(option) => `${option.key}${option.suffix}`}
                onChange={(selected) => {
                  setChords(selected)
                }}
              />
            </div>
            <div class="col-md d-flex align-items-end flex-row-reverse">
              <button class="btn btn-primary active">Guitar</button>
              <button class="btn btn-primary mr-2">Ukulele</button>
            </div>
          </div>
        </div>
      </header>
      <div class="row p-5 container-fluid text-center justify-content-center">
        {chords.map((chord) => (
          <div class="col-sm chord">
            <h2>
              {chord.key}
              <sub>{chord.suffix}</sub>
            </h2>
            <Chord chord={chord.positions[0]} instrument={instrument} />
          </div>
        ))}
      </div>
      <footer class="text-center p-3">
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
