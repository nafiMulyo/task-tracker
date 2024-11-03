const addTasks = require('./add-task.js')
const deleteTasks = require('./del-task.js')
const updateTasks = require('./upd-task.js')
const markTasks = require('./mark-task.js')
const listTasks = require('./list-task.js')

const arg = process.argv.slice(2)

if (arg[0] === "add") {
    const description = arg.slice(1).join(" ")
    if (!description) {
        console.log("Please provide a task description.")
        console.log(`Eg : node index.js "Eat Rendang"`)
    }
    else {
        addTasks(description)
        console.log(`The ${description} task has been succesfully added!`)
    }
}
else if (arg[0] === "delete") {
    if (arg.length === 1) {
        console.log("Please provide the ID")
        console.log("Eg : node index.js delete 2")
    }
    else {
        const taskId = parseInt(arg[1], 10);
        deleteTasks(taskId)
        }
}
else if (arg[0] === "update") {
    const id = arg.length >= 2 ? parseInt(arg[1], 10) : null
    const description = arg.length >= 3 ? arg[2] : null

    if (!id || !description) {
        console.log("Please provide the ID and the description")
        console.log(`Eg : node index.js update 1 "Eat Spaghetti"`)
    }
    else {
        updateTasks(id, description)
        console.log(`The ${description} task with ID ${id} has been succesfully updated!`)
    }
}
else if (arg[0] === "mark-in-progress" || arg[0] === "mark-done") {
    const mark = arg[0]
    const id = arg.length > 1 ? parseInt(arg[1], 10) : null

    if (!id) {
        console.log("Please provide the ID")
        console.log("node index.js mark-in-progress 1")
    }
    else {
        markTasks(id, mark)
        console.log(`The task with ID ${id} has been succesfully marked!`)
    }
} 
else if (arg[0] === "list") {
    const filter = arg[1]
    listTasks(filter)
}
else {
    console.log("Please follow the operations below here :")
    console.log(`Adding a new task : node index.js add "Run 10 km"`)
    console.log(`Update a task     : node index.js update 1 "Run 5 km"`)
    console.log(`Delete a task     : node index.js delete 1`)
    console.log(`Mark a task       : node index.js mark-in-progress 1`)
    console.log(`                  : node index.js mark-todo 1`)
    console.log(`Listing all tasks : node index.js list`)
    console.log(`                    node index.js list done`)
    console.log(`                    node index.js list todo`)
    console.log(`                    node index.js list in-progress`)
}

