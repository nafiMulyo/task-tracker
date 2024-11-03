const { readJSON, writeJSON, getNextID } = require('./task-utils.js')

const addTask = (description) => {
    const tasks = readJSON()
    const newTask = {
        id: getNextID(),
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    tasks.push(newTask)
    writeJSON(tasks)
}

module.exports = addTask