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
        layer: "longWild",
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
        cut: "upPunk",
        straighten: "shortBob",
        extend: "longWild",
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
        layer: "shortLayers",
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
    },
    upPunk:{
        name: "upPunk",
        shave: "sideHawk",
        extend: "shortLayers",
        straighten: "shortBob",
        map: [
            [0,0,0],
            [0,1,0],
            [1,0,1],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    },
    sideHawk:{
        name: "sideHawk",
        shave: "mohawk",
        extend: "upPunk",
        map: [
            [0,0,0],
            [0,1,0],
            [1,0,1],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    },
    mohawk:{
        name: "mohawk",
        extend: "upPunk",
        shave: "bald",
        map: [
            [0,0,0],
            [0,1,0],
            [1,0,1],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    },
    bald:{
        name: "bald",
        extend: "upPunk",
        map: [
            [0,0,0],
            [0,1,0],
            [1,0,1],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
    }
}