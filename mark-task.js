const { readJSON, writeJSON } = require('./task-utils.js')

const markTasks = (id, mark) => {
    const tasks = readJSON()
    const task = tasks.find(tasks => tasks.id === id)

    if (!task) {
        console.log("WARNING : Task not found")
        return
    }

    if (mark === "mark-in-progress") {
        task.status = "mark-in-progress"
    }
    else {
        task.status = "mark-done"
    }

    writeJSON(tasks)
}

module.exports = markTasks 