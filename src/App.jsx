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
      <div className="page-wrapper">
        <header className="pt-5 pb-4 border-bottom">
          <div className="container">
            <div className="d-flex">
              <h1>Chords Viewer</h1>
            </div>
            <div className="row">
              <div className="col-md mt-2">
                {instrument === GUITAR && (
                  <Typeahead
                    multiple
                    placeholder="Select a chord..."
                    options={mappedGuitarChords}
                    highlightOnlyResult={true}
                    labelKey={(option) => `${option.key}${option.suffix}`}
                    onChange={(selected) => {
                      setChords(selected)
                    }}
                  />
                )}
                {instrument === UKULELE && (
                  <Typeahead
                    multiple
                    placeholder="Select a chord..."
                    options={mappedUkuleleChords}
                    highlightOnlyResult={true}
                    labelKey={(option) => `${option.key}${option.suffix}`}
                    onChange={(selected) => {
                      setChords(selected)
                    }}
                  />
                )}
              </div>
              <div className="col-md mt-2 d-flex align-items-end flex-row-reverse">
                <button
                  className={`btn ${
                    instrument === GUITAR ? "btn-primary" : "btn-light"
                  }`}
                  onClick={() => {
                    setChords([])
                    setInstrument(GUITAR)
                  }}
                >
                  Guitar
                </button>
                <button
                  className={`btn mr-2 ${
                    instrument === UKULELE ? "btn-primary" : "btn-light"
                  }`}
                  onClick={() => {
                    setChords([])
                    setInstrument(UKULELE)
                  }}
                >
                  Ukulele
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="row p-5 container-fluid text-center justify-content-center">
          {chords.map((chord) => (
            <div className="col-sm chord">
              <h2>
                {chord.key}
                <sub>{chord.suffix}</sub>
              </h2>
              <Chord chord={chord.positions[0]} instrument={instrument} />
            </div>
          ))}
        </main>
      </div>
      <footer className="text-center text-muted">
        Made by{" "}
        <a href="https://github.com/jonspe" target="_blank">
          Joona Perasto
        </a>{" "}
        with{" "}
        <a href="https://github.com/tombatossals/react-chords" target="_blank">
          react-chords
        </a>
      </footer>
    </div>
  )
}

export default App
