import { verbSets } from "./sceneSets";
import kaleidoscope from "../assets/images/clockpax-kaleidscope.jpg";
import imageLeaf from "../assets/images/clockpax-tree-leaf-door.jpg";
import imageSwing from "../assets/images/clockpax-swing-park.jpg";
import imageMirror from "../assets/images/cloclspax-mirror-1.jpg";
import imageSnowmanCarrot from "../assets/images/cloclspax-carrot-snowman.jpg";
import imageStar from "../assets/images/clockspax-mid-night-skies.jpg";
import imageBrush from "../assets/images/clockpax-brush-painting.jpg";
import imageFossil from "../assets/images/clockpax-fossil-museum-2.jpg";
import imageWheel from "../assets/images/clockpax-ferriswheel-circus.jpg";
import imageFeatherPen from "../assets/images/clockpax-feather-pen-letter.jpg";

export const verbs = ["explore","use"]

export const scenes = {
    scene1: {
        key: "s1",
        name: "Mirror - Scene 1 Name",
        exits: { a1: "scene2" },
        image: imageLeaf,
        puzzle: "Puzzle 1",
        details: "Details 1 placeholder",
        interactables:[
            {
                name: " scene1Object1",
                image: imageLeaf,
                x: 394,
                y: 304,
                width: 45,
                height: 43,
                //: verbSets.scene1Object1,
            },{
                name: "Tiles - scene1Object2",
                image: imageLeaf,
                x: 200,
                y: 200,
                width: 50,
                height: 50,
                //verbs: verbSets.scene1Object2,
            }
        ],
        // starts here
        verbs: {
            a1: {
                explore: {
                    details: "You explore the scene 1 object 1.",
                },
                use: {
                    aheadScene: "scene13",
                    details: "You use the scene 1 object 1.",
                }
            }
        }
        // end here
    },
    scene2: {
        key: "s2",
        name: "Scene 2 Name",
        exits: { a2: "scene1", b2: "scene3" },
        image: imageSwing,
        puzzle: "Puzzle 2",
        details: "Details 2 placeholder",
        interactables:[
            {
                name: "scene2Object1",
                image: imageSwing,
                x: 176,
                y: 346,
                width: 122,
                height: 26,
                verbs: verbSets.scene2Object1,
            },{
                name: "scene2Object2",
                image: imageSwing,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                verbs: verbSets.scene2Object2,
            }
        ],
        // starts here
        verbs: {
            a2: {
                explore: {
                    aheadScene: "scene2",
                    details: "You explore the scene 1 object 1.",
                },
                use: {
                    aheadScene: "scene2",
                    details: "You use the scene 1 object 1.",
                }
            }
        }
        // end here
    },
    scene3: {
        key: "s3",
        name: "Scene 3 Name",
        exits: { a1:"scene9",b1: "scene4", b2: "scene2" , c2: "scene1", c3: "scene2" },
        image: imageMirror,
        isMore: true,
        puzzle: "Puzzle 3",
        details: "Details 3 placeholder",
        interactables:[
            {
                name: "scene3Object1",
                image: imageMirror,
                x: 120,
                y: 385,
                width: 158,
                height: 48,
                verbs: verbSets.scene3Object1,
            },{
                name: "scene3Object2",
                image: imageMirror,
                x: 230,
                y: 60,
                width: 100,
                height: 300,
                verbs: verbSets.scene3Object2,
            }
        ]
    },
    // starts here
    /* verbs: {
        b1: {
            explore: {
                aheadScene: "scene2",
                details: "You explore the scene 1 object 1.",
            },
            use: {
                aheadScene: "scene2",
                details: "You use the scene 1 object 1.",
            }
        }
    },*/
    // end here
    
/*
    explore: [],
    use: [],
    verbs: {},
*/

    scene4: {
        key: "s4",
        name: "Scene 4 Name",
        exits: { a1: "scene5", b1: "scene6" },
        image: imageSnowmanCarrot,
        puzzle: "Puzzle 4",
        details: "",
        interactables:[
            {
                name: "scene4Object1",
                image: imageSnowmanCarrot,
                x: 390,
                y: 397,
                width: 42,
                height: 33,
                verbs: verbSets.scene4Object1,
            },{
                name: "scene4Object2",
                image: imageSnowmanCarrot,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                verbs: verbSets.scene4Object2,
            }
        ]
    },
    scene5: {
        key: "s5",
        name: "Scene 5 Name",
        exits: { c1: "scene9", d1: "scene7" },
        image: imageStar,
        puzzle: "Puzzle 5",
        details: "",
        interactables:[
            {
                name: "scene5Object1",
                image: imageStar,
                x: 226,
                y: 172,
                width: 42,
                height: 33,
                verbs: verbSets.scene5Object1,
            },{
                name: "scene5Object2",
                image: imageStar,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                verbs: verbSets.scene5Object2,
            }
        ]
    },
    scene6: {
        key: "s6",
        name: "Scene 6 Name",
        exits: { a3: "scene5", b3: "scene8" },
        image: imageBrush,
        puzzle: "Puzzle 6",
        details: "",
        interactables:[
            {
                name: "scene6Object1",
                image: imageBrush,
                x: 400,
                y: 227,
                width: 65,
                height: 60,
                verbs: verbSets.scene6Object1,
            },{
                name: "scene6Object2",
                image: imageBrush,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                verbs: verbSets.scene6Object2,
            }
        ]
    },
    scene7: {
        key: "s7",
        name: "Scene 7 Name",
        exits: { a2: "scene6", c2: "scene9" },
        image: imageFossil,
        puzzle: "Puzzle 7",
        details: "",
        interactables:[
            {
                name: "scene7Object1",
                image: imageFossil,
                x: 27,
                y: 246,
                width: 61,
                height: 106,
                verbs: verbSets.scene7Object1,
            },{
                name: "scene7Object2",
                image: imageFossil,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                verbs: verbSets.scene7Object2,
            }
        ]
    },
    scene8: {
        key: "s8",
        name: "Scene 8 Name",
        exits: { b2: "scene7", c3: "scene9" },
        image: imageWheel,
        puzzle: "Puzzle 8",
        details: "",
        interactables:[
            {
                name: "scene8Object1",
                image: imageWheel,
                x: 162,
                y: 20,
                width: 246,
                height: 235,
                verbs: verbSets.scene8Object1,
            },{
                name: "scene8Object2",
                image: imageWheel,
                x: 10,
                y: 10,
                width: 10,
                height: 10,
                verbs: verbSets.scene8Object2,
            }
        ]
    },
    scene9: {
        key: "s9",
        name: "Scene 9 Name",
        exits: { a1: "scene8", c1: "scene1" },
        image: imageFeatherPen,
        puzzle: "Puzzle 9",
        details: "",
        interactables:[
            {
                name: "scene9Object1",
                image: imageFeatherPen,
                x: 358,
                y: 266,
                width: 31,
                height: 57,
                verbs: verbSets.scene9Object1,
            },{
                name: "scene9Object2",
                image: imageFeatherPen,
                x: 10,
                y: 10,
                width: 10,
                height: 10,
                verbs: verbSets.scene9Object2,
            }
        ]
    },
    // puzzle solution
    scene11: {
        key: "s11",
        name: "Kaleidscope dej vu moment - Scene 11 Name",
        exits: { a1: "scene8" },
        image: kaleidoscope,
        puzzle: "Puzzle 11",
        details: "Kaleidscope dej vu moment 11 - Scene 11 details",
    },
    scene12: {
        key: "s12",
        name: "Kaleidscope dej vu moment 12 name",
        exits: { a1: "scene8" },
        image: kaleidoscope,
        puzzle: "Puzzle 12",
        details: "Kaleidscope dej vu moment 12 - Scene 12 details",
    },
    scene13: {
        key: "s13",
        name: "Kaleidscope dej vu moment 13 Name",
        exits: { a1: "scene8" },
        image: kaleidoscope,
        puzzle: "Puzzle 13",
        details: "Kaleidscope dej vu moment 13 - Scene 13 details",
    },
    scenes14: {
        key: "s14",
        name: "Kaleidscope dej vu moment 14 Name",
        exits: { a1: "scene9" },
        image: kaleidoscope,
        puzzle: "Puzzle 14",
        details: "Kaleidscope"
    },
    scene15: {
        key: "s15",
        name: "Kaleidscope dej vu moment 15 Name",
        exits: { a1: "scene1" },
        image: kaleidoscope,
        puzzle: "Puzzle 15",
        details: "Kaleidscope dej vu moment 15 - Scene 15 details",
    },
    scene16: {
        key: "s16",
        name: "Kaleidscope dej vu moment 16 Name",
        exits: { a1: "scene5" },
        image: kaleidoscope,
        puzzle: "Puzzle 16",
        details: "Kaleidscope dej vu moment 16 - Scene 16 details", 
    },
    scene17: {
        key: "s17",
        name: "Kaleidscope dej vu moment 17 Name",
        exits: { a1: "scene9" },
        image: kaleidoscope,
        puzzle: "Puzzle 17",
        details: "Kaleidscope dej vu moment 16 - Scene 16 details", 
    },
    scene18: {
        key: "s18",
        name: "Kaleidscope dej vu moment 18 Name",
        exits: { a1: "scene8" },
        image: kaleidoscope,
        puzzle: "Puzzle 18",
        details: "Kaleidscope dej vu moment 18 - Scene 18 details", 
    },
    scene20: {
        key: "s19",
        name: "Kaleidscope dej vu moment 19 Name",
        exits: { a1: "scene6" },
        image: kaleidoscope,
        puzzle: "Puzzle 19",
        details: "Kaleidscope dej vu moment 19 - Scene 19 details", 
    }
};

export const puzzleWords = [
    {
        key: "s11",
        name: "Beneath the `leaf`, a story begins, A door opens, where life has been.",
    },
    {
        key: "s12",
        name: "On the `swing`, laughter once flew, A fleeting joy, a memory true.",
    },
    {
        key: "s13",
        name: "In the `mirror`, faces split and blend, Seeking truth, the pieces mend.",
    },
    {
        key: "s14",
        name: "The `snowman`s carrot` melts away,Loneliness grows where ice doth stay.",
    },
    {
        key: "s15",
        name: "A single `star` in the midnight sea, A beacon shines for the lost to see.",
    },
    {
        key: "s16",
        name: "The painter's `brush` strokes dreams in hue, Creation speaks what words can't do.",
    },
    {
        key: "s17",
        name: "The `fossil`, a relic of time untold, Stories of life in stone unfold.",
    },
    {
        key: "s18",
        name: "A spinning `wheel` where echoes play, Life repeats in its shadowed ballet.",
    },
    {
        key: "s19",
        name: "The `feathered pen` writes the final line, A past embraced, the future aligns.",
    }

]

