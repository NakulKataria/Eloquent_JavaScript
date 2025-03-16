// Function to identify the script of a character
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code < to)) {
            return script;
        }
    }
    return null;
}

// Function to count occurrences of each category
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name === name);
        if (known) {
            known.count++;
        } else {
            counts.push({ name, count: 1 });
        }
    }
    return counts;
}

// Function to determine the dominant writing direction
function dominantDirection(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name !== "none"); // Ignore characters without direction

    if (counted.length === 0) return "No dominant direction found";

    return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl