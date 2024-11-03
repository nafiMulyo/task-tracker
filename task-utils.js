const fs = require('fs')
const tasksFilePath = './tasks.json'

const readJSON = () => {
    if (!fs.existsSync(tasksFilePath)) {
        fs.writeFileSync(tasksFilePath, JSON.stringify([]))
    }
    const data = fs.readFileSync(tasksFilePath, "utf8")
    
    if (data.trim() === "") {
        return []
    }
    
    return JSON.parse(data)
}

const writeJSON = (task) => {
    const taskJSON = JSON.stringify(task, null, 2)
    fs.writeFileSync(tasksFilePath, taskJSON)
}

const getNextID = () => {
    const tasks = readJSON()
    if (tasks.length === 0) {
        return 1
    }
    const newID = Math.max(...tasks.map(task => task.id));
    return newID + 1
}

module.exports = {
    readJSON,
    writeJSON,
    getNextID
}
