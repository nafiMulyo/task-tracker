const { readJSON, writeJSON } = require('./task-utils.js')

const updateTasks = (ID, description) => {
    const tasks = readJSON()
    const task = tasks.find(tasks => tasks.id === ID)

    if (!task) {
        console.log("WARNING : Task not found")
        return
    }

    task.description = description,
        task.updatedAt = new Date().toISOString()

    writeJSON(tasks)
}

module.exports = updateTasks 