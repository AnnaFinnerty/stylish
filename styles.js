const styleMaps = {
    longWild:{
        name: "longWild",
        cut: "shortLayers",
        straighten: "longBob",
        map: [
            [0,0,0],
            [0,0,0],
            [1,2,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
        ]
    },
    longBob:{
        name: "longBob",
        cut: "shortBob",
        curl: "longWild",
        map: [
            [0,0,0],
            [0,0,0],
            [1,2,1],
            [1,0,1],
            [1,0,1],
            [1,0,1],
        ]
    },
    shortLayers:{
        name: "shortLayers",
        trim: "shortBob",
        cut: "upPunk",
        straighten: "shortBob",
        grow: "longWild",
        map: [
            [0,0,0],
            [0,0,0],
            [1,2,1],
            [1,0,1],
            [1,0,1],
            [0,0,0],
        ]
    },
    shortBob:{
        name: "shortBob",
        trim: "shortLayers",
        cut: "upPunk",
        extend: "longBob",
        straighten: "shortLayers",
        map: [
            [0,0,0],
            [0,0,0],
            [1,2,1],
            [1,0,1],
            [1,0,1],
            [0,0,0],
        ]
    }
}