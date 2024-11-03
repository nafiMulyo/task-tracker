# Task Tracker CLI

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) 
challenge from [roadmap.sh](https://roadmap.sh/).

This is a simple command-line interface (CLI) application for managing tasks in JSON format.

## Features

- Add new tasks with a unique ID and store them in `JSON` format.
- List tasks by their status: `todo`, `in-progress`, or `done`.
- Update the description of an existing task.
- Delete tasks by their ID.
- Mark tasks as `in-progress` or `done`.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Installation

**Clone the Repository**

   ```bash
   git clone --depth=1 https://github.com/Aj-Seven/backend-projects

   # Navigate to the project Directory
   cd backend-projects/task-cli
   ```
## Usage

- **Add a Task**
```bash
node index.js add "sleep"
```

- **Delete a Task**
```bash
# Delete the task by containing its ID 1
node index.js delete 1
```

- **Update a Task**
```bash
node index.js update 1 "Drink a Coffee and Do Coding"
```

- **Mark Task Status**
```bash
# Mark as `in-progress` with containing task ID as 1
node index.js mark-in-progress 1

# Mark as `done` with containing task ID as 1
node index.js mark-done 1
```

- **List Tasks**
```bash
# To list the tasks entirely
node index.js list

# To list the tasks that are marked as to-do
node index.js list to-do

# To list the tasks that are marked as in-progess
node index.js list in-progress

# To list the tasks that are marked as done
node index.js list done
```

### Sample JSON structure
```JSON
[
  {
    "id": 1,
    "description": "eat pizza",
    "status": "todo",
    "createdAt": "2024-11-03T03:43:01.629Z",
    "updatedAt": "2024-11-03T03:43:01.630Z",
    "updateAt": "2024-11-03T04:04:03.736Z"
  }
]
```
> Note: Place the JSON file in the same directory as the task code.
