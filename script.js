
const dictionary = {
    adjectives: ["hungry", "sleepy", "ugly", "wonderful", "polite", "handsome", "talented", "awesome", "terrible", "dumb", "silly", "happy", "confused", "sour", "sweet", "salty", "determined", "fearless", "scary", "spooky", "hilarious", "rad", "cool", "beautiful", "haunted", "cursed"],
    person: ["mother", "father", "sister", "brother", "grandma", "husband", "wife", "aunt", "uncle", "grandpa", "son", "daughter", "teacher", "student", "college student", "doctor", "police officer", "software engineer", "trick-or-treater", "violin teacher", "ghost", "witch", "zombie", "vampie", "werewolf"],
    place: ["school", "workplace", "grocery store", "Safeway", "college", "hospital", "house", "farm", "tech startup", "nuclear power plant", "graveyard", "mausoleum", "spirit world", "jail", "sewer", "forest", "cave", "fortune teller", "corn maze", "secret passage", "underworld"],
    thing: ["carrot", "apple", "orange", "computer", "house", "rotisserie-chicken", "cake", "homework", "portfolio-project", "pumpkin", "potion", "poison apple", "spellbook", "jack-o-lantern", "broom", "cauldron", "tombstone", "eye of newt", "pentagram", "candy corn"],
    things: ["fruits", "vegetables", "legumes", "eyeballs", "cobwebs", "toenails", "voodoo dolls", "noodles", "flowers", "video games", "clothes", "groceries", "halloween decorations", "autumn leaves", "spiders", "snacks"],
    verb: ["eat", "sleep", "run", "walk", "cry", "laugh", "haunt", "cast a spell", "cackle", "do a ritual"],
    verbed: ["ate", "slept", "ran", "walked", "cried", "laughed", "haunted", "casted a spell", "cackled", "did a ritual"],
    verbing: ["eating", "sleeping", "running", "walking", "crying", "laughing", "haunting", "casting a spell", "cackling", "doing a ritual"],
    adverb: ["always", "never", "quickly", "slowly", "sometimes", "usually", "rarely"]
};

const messageTemplates = [
    "I sent my " + randomlySelectFromArray(dictionary.person) + " to the " + randomlySelectFromArray(dictionary.place) + " to get some " + randomlySelectFromArray(dictionary.things) + ".",
];

function randomlySelectFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}



console.log(randomlySelectFromArray(messageTemplates));

console.log("The script has been run! :)");