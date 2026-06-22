const fs = require("fs");
const path = require("path");

// Global Object
console.log("Current Directory:");
console.log(__dirname);

// Build complete file path
const filePath = path.join(__dirname, "data.json");

// Read data using fs
const data = fs.readFileSync(filePath, "utf8");
console.log("Data from JSON:");
console.log(data);

// Custom Module
function getTasks() {
    return JSON.parse(data);
}

module.exports = {
    getTasks
};