const { readJSON } = require('./task-utils.js')

const listTasks = (filter) => {
    let status
    if (filter) {
        status = filter.toLowerCase();
    }
    const validStatuses = ["done", "in-progress", "todo"];
    const tasks = readJSON();
    let filteredTasks = tasks;

    if (status && !validStatuses.includes(status)) {
        console.log("Please provide a correct status");
        console.log("status : done/todo/in-progress");
        return;
    }

    if (status) {
        filteredTasks = tasks.filter(task => task.status === status);
    }

    if (filteredTasks.length === 0) {
        console.log("No task found");
        return;
    }

    filteredTasks.forEach(task => {
        console.log(`ID: ${task.id} | Description: ${task.description} | Status: ${task.status}`);
    });
}


module.exports = listTasks