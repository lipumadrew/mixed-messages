
const dictionary = {
    adjectives: ["hungry", "sleepy", "ugly", "wonderful", "polite", "handsome", "ashamed", "talented", "awesome", "terrible", "dumb", "silly", "happy", "confused", "sour", "sweet", "salty", "determined", "fearless", "scary", "spooky", "hilarious", "rad", "cool", "beautiful", "haunted", "cursed"],
    person: ["mother", "father", "sister", "brother", "grandma", "husband", "wife", "aunt", "uncle", "grandpa", "son", "daughter", "teacher", "student", "college student", "doctor", "police officer", "software engineer", "trick-or-treater", "violin teacher", "ghost", "witch", "wizard", "zombie", "vampire", "werewolf"],
    place: ["school", "workplace", "Target", "grocery store", "Safeway", "college", "hospital", "house", "farm", "coding bootcamp", "nuclear power plant", "graveyard", "mausoleum", "spirit world", "jail", "sewer", "forest", "cave", "sceance room", "corn maze", "secret passage", "underworld", "morgue"],
    thing: ["carrot", "apple", "orange", "computer", "rotisserie-chicken", "cake", "homework assignment", "portfolio-project", "pumpkin", "potion", "poison apple", "spellbook", "jack-o-lantern", "broom", "cauldron", "tombstone", "eye of newt", "pentagram", "candy corn", "corpse"],
    things: ["fruits", "vegetables", "legumes", "eyeballs", "cobwebs", "toenails", "voodoo dolls", "noodles", "flowers", "video games", "clothes", "groceries", "halloween decorations", "autumn leaves", "spiders", "snacks", "severed heads"],
    verb: ["eat", "sleep", "run", "walk", "cry", "laugh", "haunt", "cast a spell", "cackle", "do a ritual"],
    verbed: ["ate", "slept", "ran", "walked", "cried", "laughed", "haunted", "casted a spell", "cackled", "did a ritual"],
    verbing: ["eating", "sleeping", "running", "walking", "crying", "laughing", "haunting", "casting a spell", "cackling", "doing a ritual"],
    adverb: ["always", "never", "quickly", "slowly", "sometimes", "usually", "rarely"]
};

const generatePronoun = (word) => {
    let pronouns = ["they", "them", "their", "theirs"];
    if (word === "mother" || word === "grandma" || word === "sister" || word === "wife" || word === "aunt" || word === "daughter" || word === "witch") {
        pronouns = ["she", "her", "her", "hers"];
    } else if (word === "father" || word === "brother" || word === "husband" || word === "uncle" || word === "grandpa" || word === "son" || word === "wizard") {
        pronouns = ["he", "him", "his", "his"];
    } else {
        //Other words get a fifty-fifty chance
        let fiftyFifty = (Math.floor(Math.random() * 2) == 1 );
        if (fiftyFifty) {
            pronouns = ["he", "him", "his", "his"];
        } else {
            pronouns = ["she", "her", "her", "hers"];
        }
    }
    //I created a 1 in 10 chance that the person uses a gender-neutral pronoun, regardless of the word
    let neutralChance = (Math.floor(Math.random() * 10) + 1);
    if (neutralChance == 1) {
        pronouns = ["they", "them", "their", "theirs"];
    }
    return pronouns;
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

const getMessage = (person, pronounThird, pronounId, pronounPos, pronounPosId) => {
    let templates = [
        "I sent my " + person + " to the " + randomPlace() + " to get some " + randomThings() + ". But " + pronounThird + " came back with a " + randomThing() + "!",
        pronounThird + " told me I wasn't allowed to " + randomVerb() + " in the " + randomPlace() + ". I've never felt so " + randomAdjective() +".",
        "The " + person + " couldn't stop " + randomVerbing() + ".  So " + pronounThird + " asked for a " + randomAdjective() + " " + randomThing() + " from the " + randomPlace() + ".",
        "If someone's " + randomAdjective() + " " + person + " loses " + pronounPos + " " + randomThing() + " while " + randomVerbing() + ", you should " + randomAdverb() + " give it back to " + pronounId + "!",
        "A " + person + " found a " + randomThing() + " after " + randomVerbing() + " at the " + randomPlace() + ". How " + randomAdjective() + " of " + pronounId + "!",
        "Are those " + pronounPosId + "? They're so " + randomAdjective() + "! I wish " + pronounThird + " would share some of those " + randomThings() + " with me...",
        "There was a " + randomAdjective() + " " + person + " " + randomVerbing() + " in the " + randomPlace() + "."


];
    return randomlySelectFromArray(templates);
}

const generateMessage = () => {
    let person = randomPerson();
    let pronouns = generatePronoun(person);
    let pronounThird = pronouns[0];
    let pronounId = pronouns[1];
    let pronounPos = pronouns[2];
    let pronounPosId = pronouns[3];
    let message = getMessage(person, pronounThird, pronounId, pronounPos, pronounPosId);
    const capitalized = message.charAt(0).toUpperCase() + message.slice(1);
    return capitalized
}



console.log(generateMessage());

