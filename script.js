
const dictionary = {
    adjectives: ["hungry", "sleepy", "ugly", "wonderful", "polite", "handsome", "talented", "awesome", "terrible", "dumb", "silly", "happy", "confused", "sour", "sweet", "salty", "determined", "fearless", "scary", "spooky", "hilarious", "rad", "cool", "beautiful", "haunted", "cursed"],
    person: ["mother", "father", "sister", "brother", "grandma", "husband", "wife", "aunt", "uncle", "grandpa", "son", "daughter", "teacher", "student", "college student", "doctor", "police officer", "software engineer", "trick-or-treater", "violin teacher", "ghost", "witch", "wizard", "zombie", "vampie", "werewolf"],
    place: ["school", "workplace", "grocery store", "Safeway", "college", "hospital", "house", "farm", "tech startup", "nuclear power plant", "graveyard", "mausoleum", "spirit world", "jail", "sewer", "forest", "cave", "fortune teller", "corn maze", "secret passage", "underworld"],
    thing: ["carrot", "apple", "orange", "computer", "house", "rotisserie-chicken", "cake", "homework", "portfolio-project", "pumpkin", "potion", "poison apple", "spellbook", "jack-o-lantern", "broom", "cauldron", "tombstone", "eye of newt", "pentagram", "candy corn", "corpse"],
    things: ["fruits", "vegetables", "legumes", "eyeballs", "cobwebs", "toenails", "voodoo dolls", "noodles", "flowers", "video games", "clothes", "groceries", "halloween decorations", "autumn leaves", "spiders", "snacks"],
    verb: ["eat", "sleep", "run", "walk", "cry", "laugh", "haunt", "cast a spell", "cackle", "do a ritual"],
    verbed: ["ate", "slept", "ran", "walked", "cried", "laughed", "haunted", "casted a spell", "cackled", "did a ritual"],
    verbing: ["eating", "sleeping", "running", "walking", "crying", "laughing", "haunting", "casting a spell", "cackling", "doing a ritual"],
    adverb: ["always", "never", "quickly", "slowly", "sometimes", "usually", "rarely"]
};

const generatePronoun = (word) => {
    let pronoun = "they";
    if (word === "mother" || word === "grandma" || word === "sister" || word === "wife" || word === "aunt" || word === "daughter" || word === "witch") {
        pronoun = "she";
    } else if (word === "father" || word === "brother" || word === "husband" || word === "uncle" || word === "grandpa" || word === "son" || word === "wizard") {
        pronoun = "he";
    } else {
        //Other words get a fifty-fifty chance
        let fiftyFifty = (Math.floor(Math.random() * 2) == 1 );
        if (fiftyFifty) {
            pronoun = "he";
        } else {
            pronoun = "she";
        }
    }
    //I created a 1 in 10 chance that the person uses a gender-neutral pronoun, regardless of the word
    let neutralChance = (Math.floor(Math.random() * 10) + 1);
    if (neutralChance == 1) {
        pronoun = "they";
    }
    return pronoun;
}

function randomlySelectFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}

const randomAdjective = () => {
    return randomlySelectFromArray(dictionary.adjectives);
}

const randomPerson = () => {
    return randomlySelectFromArray(dictionary.person);
}

const randomPlace = () => {
    return randomlySelectFromArray(dictionary.place);
}

const randomThing = () => {
    return randomlySelectFromArray(dictionary.thing);
}

const randomThings = () => {
    return randomlySelectFromArray(dictionary.things);
}

const randomVerb = () => {
    return randomlySelectFromArray(dictionary.verb);
}

const randomVerbed = () => {
    return randomlySelectFromArray(dictionary.verbed);
}

const randomVerbing = () => {
    return randomlySelectFromArray(dictionary.verbing);
}

const randomAdverb = () => {
    return randomlySelectFromArray(dictionary.adverb);
}

const getMessage = (person, pronoun) => {
    let templates = [
        "I sent my " + person + " to the " + randomPlace() + " to get some " + randomThings() + ". But " + pronoun + " came back with a " + randomThing() + "!",
        pronoun + " told me I wasn't allowed to " + randomVerb() + " in the " + randomPlace() + ", so I felt " + randomAdjective() + "..."
];
    return randomlySelectFromArray(templates);
}

const generateMessage = () => {
    let person = randomPerson();
    let pronoun = generatePronoun(person);
    return getMessage(person, pronoun);
}



//Repeater for testing
// for (let i = 0; i < 20; i++) {
//     console.log(generatePronoun("teacher"));
// }

console.log(generateMessage());

console.log("The script has been run! :)");