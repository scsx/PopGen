const main = document.getElementById("main");
const peopleSelect = document.getElementById("numberOfPersons");

let settings = {
    peopleNr: peopleSelect.value || 20,
    defaultLocal: local_World
}

// Calculate probabilities
function getClass(probs, cssClasses) {
    const arr = [];
    let i,
        sum = 0;

    for (i = 0; i < probs.length - 1; i++) {
        sum += probs[i] / 100.0;
        arr[i] = sum;
    }
    let randomNr = Math.random(); // returns [0,1]
    for (i = 0; i < arr.length && randomNr >= arr[i]; i++);
    return cssClasses[i];
}

// Test getClass
var probabilities = [33, 33, 34]; // 20%, 70% and 10%
var cssClasses = ["redhead", "blonde", "dark"]; // the functions array
for (let i = 0; i < 20; i++) {
    // getClass(probabilities, cssClasses);
}

function drawFaces(region) {
    
    const raceList = Object.keys(region.races);
    const raceProbs = Object.values(region.races);

    // Create divs
    for (let i = 0; i < settings.peopleNr; i++) {
        const personRace = getClass(raceProbs, raceList);
        const traits = types.find(x => x.name === personRace).traits;
        const skin = getClass(Object.values(traits.skins), Object.keys(traits.skins)); 
        log(skin);

        const person = document.createElement("div");
        person.classList.add("person");
        person.classList.add("person--" + personRace);
        person.innerHTML = `
            <div class="person__hair"></div>
            <div class="person__ear"></div>
            <div class="person__ear right"></div>
            <div class="person__fringe"></div>
            <div class="person__face"></div>
            <div class="person__eye"></div>
            <div class="person__nose"></div>
            <div class="person__mouth">
                <div class="person__tongue"></div>
            </div>
            <p class="info hide">${raceReadableNames[personRace]}<p/>
        `;

        main.appendChild(person);
    }
}

drawFaces(settings.defaultLocal);

// Dev
function log(arg) {
    console.log(arg);
}