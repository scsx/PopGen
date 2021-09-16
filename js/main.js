const main = document.getElementById("main");
const peopleSelect = document.getElementById("numberOfPersons");

let settings = {
    peopleNr: peopleSelect.value === "0" ? 100 : peopleSelect.value,
    defaultLocal: local_US
}
log(peopleSelect.value);
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

// Get obj keys and values
function getKeys(obj) {
    return Object.keys(obj)
}

function getVals(obj) {
    return Object.values(obj)
}

// Main draw function
function drawFaces(region) {
    
    const raceList = getKeys(region.races);
    const raceProbs = getVals(region.races);

    // Create divs
    for (let i = 0; i < settings.peopleNr; i++) {
        const personRace = getClass(raceProbs, raceList);
        const traits = types.find(x => x.name === personRace).traits;
        const skin = getClass(getVals(traits.skins), getKeys(traits.skins));
        const hair = getClass(getVals(traits.hair), getKeys(traits.hair));
        const eyes = getClass(getVals(traits.eyes), getKeys(traits.eyes));
        const facialhair = getClass(getVals(traits.facialhair), getKeys(traits.facialhair));
        
        const person = document.createElement("div");
        person.classList.add("person", "person--" + personRace);
        person.innerHTML = `
            <div class="person__hair ${hair}"></div>
            <div class="person__ear ${skin}"></div>
            <div class="person__ear person__ear--right ${skin}"></div>
            <div class="person__fringe ${hair}"></div>
            <div class="person__face ${skin}"></div>
            <div class="person__eye ${eyes}"></div>
            <div class="person__nose shade_${skin}"></div>
                <div
                class="person__facialhair person__facialhair--${facialhair} ${hair}"></div>
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