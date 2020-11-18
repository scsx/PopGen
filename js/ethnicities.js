const types = [
    {
        name: "EU_North",
        traits: {
            skins: {
                skin_white1: 62,
                skin_white2: 32,
                skin_white2: 6
            },
            eyes: {
                eyes_blue: 50,
                eyes_green: 30,
                eyes_brown: 10,
                eyes_hazel: 10,
            },
            eyes_shape: "round",
            face_shape: "face_eu_north",
            hair: {
                hair_blonde1: 35,
                hair_blonde2: 15,
                hair_black: 12,
                hair_brown: 33,
                hair_redhead: 5
            },
            facialhair: {
                clean: 75,
                beard: 20,
                moustache: 5
            }
        }
    },
    {
        name: "EU_South",
        traits: {
            skins: {
                skin_white1: 30,
                skin_white2: 40,
                skin_white3: 30
            },
            eyes: {
                eyes_blue: 18,
                eyes_green: 2,
                eyes_brown: 60,
                eyes_hazel: 20
            },
            eyes_shape: "round",
            face_shape: "face_eu_south",
            hair: {
                hair_blonde1: 2,
                hair_blonde2: 4.5,
                hair_black: 60,
                hair_brown: 33,
                hair_redhead: .5
            },
            facialhair: {
                clean: 75,
                beard: 5,
                moustache: 20
            }
        }
    },
    {
        name: "Black",
        traits: {
            skins: {
                skin_black1: 20,
                skin_black2: 20,
                skin_black3: 20,
                skin_black4: 20,
                skin_black5: 20
            },
            eyes: {
                eyes_brown: 90,
                eyes_hazel: 10
            },
            eyes_shape: "round",
            face_shape: "face_black",
            hair: {
                hair_black: 100
            },
            facialhair: {
                clean: 85,
                beard: 5,
                moustache: 15
            }
        }
    },
    {
        name: "Indian",
        traits: {
            skins: {
                skin_indian1: 50,
                skin_indian2: 30,
                skin_indian3: 15,
                skin_indian4: 5
            },
            eyes: {
                eyes_brown: 75,
                eyes_hazel: 25,
                eyes_blue: 5
            },
            eyes_shape: "indian",
            face_shape: "face_indian",
            hair: {
                hair_black: 100
            },
            facialhair: {
                clean: 63,
                beard: 2,
                moustache: 35
            }
        }
    },
    {
        name: "Asian",
        traits: {
            skins: {
                skin_asian1: 50,
                skin_asian2: 25,
                skin_asian3: 25
            },
            eyes: {
                eyes_brown: 100
            },
            eyes_shape: "asian",
            face_shape: "face_asian",
            hair: {
                hair_black: 100
            },
            facialhair: {
                clean: 100
            }
        }
    },
    {
        name: "Latin",
        traits: {
            skins: {
                skin_white2: 17,
                skin_white3: 50,
                skin_white4: 33
            },
            eyes: {
                eyes_brown: 95,
                eyes_blue: 95
            },
            eyes_shape: "round",
            face_shape: "face_latin",
            hair: {
                hair_black: 90,
                hair_brown: 8,
                hair_blonde2: 2,
            },
            facialhair: {
                clean: 60,
                beard: 5,
                moustache: 35
            }
        }
    },
    {
        name: "Native",
        traits: {
            skins: {
                skin_native1: 100
            },
            eyes: {
                eyes_brown: 100
            },
            eyes_shape: "native",
            face_shape: "face_native",
            hair: {
                hair_black: 100
            },
            facialhair: {
                clean: 100
            }
        }
    }
    
];

const raceReadableNames = {
    Native: "Amerindian",
    Latin: "Latin",
    Asian: "Asian",
    Indian: "Indian",
    Black: "Black",
    EU_South: "White (South EU)",
    EU_North: "White (North EU)"
}

