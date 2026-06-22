const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

function getTasksPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

module.exports = {
    getTasksPromise
};

