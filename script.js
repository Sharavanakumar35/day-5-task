const resume = require("./resume.json");

console.log("Using regular for loop:");
const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${resume[keys[i]]}`);
}

console.log("\nUsing for...in loop:");
for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
}

console.log("\nUsing for...of loop:");
for (let key of Object.keys(resume)) {
    console.log(`${key}: ${resume[key]}`);
}

console.log("\nUsing forEach loop:");
Object.keys(resume).forEach(key => {
    console.log(`${key}: ${resume[key]}`);
});