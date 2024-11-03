const {readJSON, writeJSON} = require('./task-utils.js')

deleteTasks = (id) => {
    const tasks = readJSON()
    const taskExists = tasks.some(task => task.id === id)
    if (!taskExists) {
        console.log("WARNING: Task not found")
        return;
    }
    const updatedTasks = tasks.filter(task => task.id !== id)

    console.log(`The task with ID ${id} has been successfully deleted!`)
    writeJSON(updatedTasks);
}

module.exports = deleteTasks