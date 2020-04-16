const allTensions = [
  {
    pitch: 1,
    note: "C6",
    VL: 6.125,
    Gauge: 0.012,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 2,
    note: "C6",
    VL: 8.25,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 3,
    note: "C6",
    VL: 8.75,
    Gauge: 0.012,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 4,
    note: "B5",
    VL: 6.75,
    Gauge: 0.012,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 5,
    note: "B5",
    VL: 8.875,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 6,
    note: "B5",
    VL: 9.75,
    Gauge: 0.012,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 7,
    note: "A5",
    VL: 7.375,
    Gauge: 0.014,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 8,
    note: "A5",
    VL: 9.875,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 9,
    note: "A5",
    VL: 10.375,
    Gauge: 0.01,
    Instrument: "Autoharp",
  },
  {
    pitch: 10,
    note: "A5",
    VL: 10.75,
    Gauge: 0.012,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 11,
    note: "G5",
    VL: 8,
    Gauge: 0.014,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 12,
    note: "G5",
    VL: 10.625,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 13,
    note: "G5",
    VL: 11.5,
    Gauge: 0.01,
    Instrument: "Autoharp",
  },
  {
    pitch: 14,
    note: "G5",
    VL: 11.5,
    Gauge: 0.012,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 15,
    note: "G5",
    VL: 10,
    Gauge: 0.012,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 16,
    note: "F5",
    VL: 8.63,
    Gauge: 0.016,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 17,
    note: "F5",
    VL: 11.75,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 18,
    note: "F5",
    VL: 12.5,
    Gauge: 0.012,
    Instrument: "Autoharp",
  },
  {
    pitch: 19,
    note: "F5",
    VL: 12.75,
    Gauge: 0.014,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 20,
    note: "E5",
    VL: 9.25,
    Gauge: 0.016,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 21,
    note: "E5",
    VL: 10,
    Gauge: 0.012,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 22,
    note: "E5",
    VL: 12.5,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 23,
    note: "E5",
    VL: 12.875,
    Gauge: 0.012,
    Instrument: "Autoharp",
  },
  {
    pitch: 24,
    note: "E5",
    VL: 13.75,
    Gauge: 0.014,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 25,
    note: "E5",
    VL: 14,
    Gauge: 0.01,
    Instrument: "Mandolin",
  },
  {
    pitch: 26,
    note: "D5",
    VL: 10,
    Gauge: 0.018,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 27,
    note: "D5",
    VL: 11,
    Gauge: 0.014,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 28,
    note: "D5",
    VL: 13.375,
    Gauge: 0.012,
    Instrument: "Autoharp",
  },
  {
    pitch: 29,
    note: "D5",
    VL: 13.5,
    Gauge: 0.01,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 30,
    note: "D5",
    VL: 14.25,
    Gauge: 0.014,
    Instrument: "Kantele",
  },
  {
    pitch: 31,
    note: "D5",
    VL: 14.75,
    Gauge: 0.014,
    Instrument: "Hognose",
  },
  {
    pitch: 32,
    note: "C5",
    VL: 10.75,
    Gauge: 0.018,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 33,
    note: "C5",
    VL: 12,
    Gauge: 0.016,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 34,
    note: "C5",
    VL: 14.25,
    Gauge: 0.012,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 35,
    note: "C5",
    VL: 14.875,
    Gauge: 0.014,
    Instrument: "Autoharp",
  },
  {
    pitch: 36,
    note: "C5",
    VL: 16,
    Gauge: 0.014,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 37,
    note: "B4",
    VL: 11.5,
    Gauge: 0.02,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 38,
    note: "B4",
    VL: 15.125,
    Gauge: 0.014,
    Instrument: "Kantele",
  },
  {
    pitch: 39,
    note: "B4",
    VL: 15.25,
    Gauge: 0.012,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 40,
    note: "B4",
    VL: 15.5,
    Gauge: 0.014,
    Instrument: "Autoharp",
  },
  {
    pitch: 41,
    note: "B4",
    VL: 17,
    Gauge: 0.016,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 42,
    note: "A4",
    VL: 12.25,
    Gauge: 0.02,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 43,
    note: "A4",
    VL: 12.75,
    Gauge: 0.018,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 44,
    note: "A4",
    VL: 14,
    Gauge: 0.014,
    Instrument: "Mandolin",
  },
  {
    pitch: 45,
    note: "A4",
    VL: 16,
    Gauge: 0.016,
    Instrument: "Kantele",
  },
  {
    pitch: 46,
    note: "A4",
    VL: 16.25,
    Gauge: 0.012,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 47,
    note: "A4",
    VL: 16.375,
    Gauge: 0.016,
    Instrument: "Autoharp",
  },
  {
    pitch: 48,
    note: "A4",
    VL: 17.25,
    Gauge: 0.014,
    Instrument: "Mandola",
  },
  {
    pitch: 49,
    note: "A4",
    VL: 18,
    Gauge: 0.016,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 50,
    note: "G4",
    VL: 13.125,
    Gauge: 0.022,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 51,
    note: "G4",
    VL: 13.5,
    Gauge: 0.02,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 52,
    note: "G4",
    VL: 17,
    Gauge: 0.016,
    Instrument: "Kantele",
  },
  {
    pitch: 53,
    note: "G4",
    VL: 17.25,
    Gauge: 0.012,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 54,
    note: "G4",
    VL: 17.375,
    Gauge: 0.016,
    Instrument: "Autoharp",
  },
  {
    pitch: 55,
    note: "G4",
    VL: 19,
    Gauge: 0.016,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 56,
    note: "F4",
    VL: 14,
    Gauge: 0.022,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 57,
    note: "F4",
    VL: 18.25,
    Gauge: 0.016,
    Instrument: "Kantele",
  },
  {
    pitch: 58,
    note: "F4",
    VL: 18.25,
    Gauge: 0.016,
    Instrument: "Autoharp",
  },
  {
    pitch: 59,
    note: "F4",
    VL: 18.375,
    Gauge: 0.014,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 60,
    note: "F4",
    VL: 20,
    Gauge: 0.016,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 61,
    note: "E4",
    VL: 14.25,
    Gauge: 0.025,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 62,
    note: "E4",
    VL: 15,
    Gauge: 0.022,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 63,
    note: "E4",
    VL: 18.875,
    Gauge: 0.018,
    Instrument: "Autoharp",
  },
  {
    pitch: 64,
    note: "E4",
    VL: 19,
    Gauge: 0.018,
    Instrument: "Kantele",
  },
  {
    pitch: 65,
    note: "E4",
    VL: 19.5,
    Gauge: 0.014,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 66,
    note: "E4",
    VL: 21,
    Gauge: 0.018,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 67,
    note: "E4",
    VL: 25.5,
    Gauge: 0.01,
    Instrument: "Bouzouki",
  },
  {
    pitch: 68,
    note: "E4",
    VL: 25.5,
    Gauge: 0.012,
    Instrument: "Guitar",
  },
  {
    pitch: 69,
    note: "D4",
    VL: 14,
    Gauge: 0.024,
    Instrument: "Mandolin",
  },
  {
    pitch: 70,
    note: "D4",
    VL: 15,
    Gauge: 0.025,
    Instrument: "Reverie",
  },
  {
    pitch: 71,
    note: "D4",
    VL: 16,
    Gauge: 0.022,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 72,
    note: "D4",
    VL: 17.25,
    Gauge: 0.024,
    Instrument: "Mandola",
  },
  {
    pitch: 73,
    note: "D4",
    VL: 19.875,
    Gauge: 0.02,
    Instrument: "Autoharp",
  },
  {
    pitch: 74,
    note: "D4",
    VL: 21,
    Gauge: 0.018,
    Instrument: "Kantele",
  },
  {
    pitch: 75,
    note: "D4",
    VL: 21,
    Gauge: 0.014,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 76,
    note: "D4",
    VL: 22,
    Gauge: 0.018,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 77,
    note: "D4",
    VL: 25.5,
    Gauge: 0.014,
    Instrument: "Bouzouki",
  },
  {
    pitch: 78,
    note: "D4",
    VL: 27.25,
    Gauge: 0.012,
    Instrument: "Mt. Dulcimer",
  },
  {
    pitch: 79,
    note: "C4",
    VL: 15.5,
    Gauge: 0.032,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 80,
    note: "C4",
    VL: 17.25,
    Gauge: 0.025,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 81,
    note: "C4",
    VL: 20.125,
    Gauge: 0.02,
    Instrument: "Autoharp",
  },
  {
    pitch: 82,
    note: "C4",
    VL: 22.375,
    Gauge: 0.014,
    Instrument: "Bowed Psaltery",
  },
  {
    pitch: 83,
    note: "C4",
    VL: 22.5,
    Gauge: 0.02,
    Instrument: "Kantele",
  },
  {
    pitch: 84,
    note: "C4",
    VL: 23,
    Gauge: 0.018,
    Instrument: "Hognose Psaltery",
  },
  {
    pitch: 85,
    note: "B3",
    VL: 18.5,
    Gauge: 0.025,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 86,
    note: "B3",
    VL: 20.375,
    Gauge: 0.022,
    Instrument: "Autoharp",
  },
  {
    pitch: 87,
    note: "B3",
    VL: 24.25,
    Gauge: 0.02,
    Instrument: "Kantele",
  },
  {
    pitch: 88,
    note: "B3",
    VL: 25.5,
    Gauge: 0.016,
    Instrument: "Guitar",
  },
  {
    pitch: 89,
    note: "A3",
    VL: 15.75,
    Gauge: 0.032,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 90,
    note: "A3",
    VL: 19.75,
    Gauge: 0.025,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 91,
    note: "A3",
    VL: 20.5,
    Gauge: 0.025,
    Instrument: "Autoharp",
  },
  {
    pitch: 92,
    note: "A3",
    VL: 25,
    Gauge: 0.022,
    Instrument: "Mandocello",
  },
  {
    pitch: 93,
    note: "A3",
    VL: 25.5,
    Gauge: 0.014,
    Instrument: "Bouzouki",
  },
  {
    pitch: 94,
    note: "A3",
    VL: 26,
    Gauge: 0.02,
    Instrument: "Kantele",
  },
  {
    pitch: 95,
    note: "A3",
    VL: 27.25,
    Gauge: 0.012,
    Instrument: "Mt. Dulcimer",
  },
  {
    pitch: 96,
    note: "G3",
    VL: 14,
    Gauge: 0.036,
    Instrument: "Mandolin",
  },
  {
    pitch: 97,
    note: "G3",
    VL: 16,
    Gauge: 0.042,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 98,
    note: "G3",
    VL: 17.25,
    Gauge: 0.032,
    Instrument: "Mandola",
  },
  {
    pitch: 99,
    note: "G3",
    VL: 20.75,
    Gauge: 0.032,
    Instrument: "Autoharp",
  },
  {
    pitch: 100,
    note: "G3",
    VL: 21,
    Gauge: 0.025,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 101,
    note: "G3",
    VL: 25.5,
    Gauge: 0.018,
    Instrument: "Bouzouki",
  },
  {
    pitch: 102,
    note: "G3",
    VL: 25.5,
    Gauge: 0.025,
    Instrument: "Guitar",
  },
  {
    pitch: 103,
    note: "F3",
    VL: 21,
    Gauge: 0.032,
    Instrument: "Autoharp",
  },
  {
    pitch: 104,
    note: "F3",
    VL: 22.25,
    Gauge: 0.032,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 105,
    note: "E3",
    VL: 16,
    Gauge: 0.042,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 106,
    note: "E3",
    VL: 21,
    Gauge: 0.032,
    Instrument: "Autoharp",
  },
  {
    pitch: 107,
    note: "E3",
    VL: 23.5,
    Gauge: 0.032,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 108,
    note: "D3",
    VL: 21.25,
    Gauge: 0.042,
    Instrument: "Autoharp",
  },
  {
    pitch: 109,
    note: "D3",
    VL: 24.75,
    Gauge: 0.032,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 110,
    note: "D3",
    VL: 25,
    Gauge: 0.034,
    Instrument: "Mandocello",
  },
  {
    pitch: 111,
    note: "D3",
    VL: 25.5,
    Gauge: 0.024,
    Instrument: "Bouzouki",
  },
  {
    pitch: 112,
    note: "D3",
    VL: 25.5,
    Gauge: 0.032,
    Instrument: "Guitar",
  },
  {
    pitch: 113,
    note: "D3",
    VL: 27.25,
    Gauge: 0.025,
    Instrument: "Mt. Dulcimer",
  },
  {
    pitch: 114,
    note: "C3",
    VL: 16,
    Gauge: 0.056,
    Instrument: "Reverie Harp",
  },
  {
    pitch: 115,
    note: "C3",
    VL: 17.25,
    Gauge: 0.048,
    Instrument: "Mandola",
  },
  {
    pitch: 116,
    note: "C3",
    VL: 21.5,
    Gauge: 0.048,
    Instrument: "Autoharp",
  },
  {
    pitch: 117,
    note: "C3",
    VL: 26,
    Gauge: 0.032,
    Instrument: "Limerick Lap Harp",
  },
  {
    pitch: 118,
    note: "A2",
    VL: 25.5,
    Gauge: 0.042,
    Instrument: "Guitar",
  },
  {
    pitch: 119,
    note: "G2",
    VL: 21.75,
    Gauge: 0.056,
    Instrument: "Autoharp",
  },
  {
    pitch: 120,
    note: "G2",
    VL: 25,
    Gauge: 0.048,
    Instrument: "Mandocello",
  },
  {
    pitch: 121,
    note: "G2",
    VL: 25.5,
    Gauge: 0.042,
    Instrument: "Bouzouki",
  },
  {
    pitch: 122,
    note: "E2",
    VL: 25.5,
    Gauge: 0.056,
    Instrument: "Guitar",
  },
  {
    pitch: 123,
    note: "C2",
    VL: 25,
    Gauge: 0.074,
    Instrument: "Mandocello",
  },
];

const outputHtml = (tensions) => {
    // console.log(tensions)
    let newOutput = tensions.map(tension => {
        return `<li>
            pitch: ${tension.pitch} | note: ${tension.note} | vl: ${tension.VL} | gauge: ${tension.Gauge} | instrument: ${tension.Instrument}
        </li>`
    })

    // console.log(newOutput)
    
    let output = document.getElementById('output')
    output.innerHTML = newOutput.join('')
}


const searchByPitch = () => {
    let input = document.getElementById('search-by-pitch').value
    // console.log(input)

    // filteredByPitch
    let filteredByPitch = []
    
    allTensions.forEach(tension=>{
        // console.log(tension.pitch)
        if (tension.pitch == input) {
            // console.log(true)
            filteredByPitch.push(tension)
        }
        // console.log(filteredByPitch)
    })

    if (filteredByPitch.length < 1) {
        filteredByPitch = allTensions
    }
    // console.log(filteredByPitch)
    outputHtml(filteredByPitch)
    // console.log(filteredByPitch)

    // map and display pitches
}
const searchByNote = () => {
    let input = document.getElementById('search-by-note').value

    // filteredByPitch
    let filteredByNote = []
    
    allTensions.forEach(tension=>{
        if (tension.note.includes(input.toUpperCase())) {
            filteredByNote.push(tension)
        }
    })

    if (filteredByNote.length < 1) {
        filteredByNote = allTensions
    }
    outputHtml(filteredByNote)
    // console.log(filteredByPitch)

    // map and display pitches
}

const searchByInstrument = () => {
    let input = document.getElementById('search-by-instrument').value

    let filteredByInstrument = []
    
    allTensions.forEach(tension=>{
        if (tension.Instrument.toLowerCase().includes(input.toLowerCase())) {
            filteredByInstrument.push(tension)
        }
    })

    if (filteredByInstrument.length < 1) {
        filteredByInstrument = allTensions
    }
    outputHtml(filteredByInstrument)
    // console.log(filteredByPitch)

    // map and display pitches
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // console.log(allTensions)
    outputHtml(allTensions)
});
