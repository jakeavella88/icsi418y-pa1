

const form = document.querySelector("#task-form");
const tasks = [];
const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");


form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    if(taskName.trim() === "") {
        alert("Please enter a task name.");
        return;
    }

    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };
    tasks.push(task);

    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function(task, index) {
        const taskElement = document.createElement("div");


        const name = document.createElement("p");
        name.textContent = task.name;

        const priority = document.createElement("p");
        priority.textContent = "Priority: " + task.priority;
        priority.classList.add(task.priority + "-priority");

        const status = document.createElement("p");
        status.textContent = task.completed ? "Completed" : "Not Completed";
        status.classList.add(task.completed ? "status-complete" : "status-incomplete");

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {
            task.completed = true;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskElement.appendChild(name);
        taskElement.appendChild(priority);
        taskElement.appendChild(status);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    })
}