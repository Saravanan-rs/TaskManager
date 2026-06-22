const express = require("express");
const dayjs = require("dayjs");
const taskManager = require("./taskManagerExpress");
const app = express();

const PORT = 4001;

app.get("/", (req, res) => {
    res.send(`Current Date : ${dayjs().format("DD-MM-YYYY HH:mm:ss")}`);
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await taskManager.getTasksPromise();
        res.json(tasks);
    } catch (err) {
        res.status(500).send("Error reading tasks");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



// const taskManager = require("./taskManagerPromise");

// taskManager.getTasksPromise().then(tasks => {
//     console.log(tasks);
// }).catch(err => {
//     console.log(err);
// });




// const taskManager = require("./taskManager");

// console.log("Tasks from Custom Module:");
// console.log(taskManager.getTasks());