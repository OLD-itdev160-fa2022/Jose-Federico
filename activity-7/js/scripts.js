let tasks = [];

let taskStatus = {
    active: 'active',
    complete: 'completed'
};

function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement (task) {
    let listEl = document.getElementById('active-list');
    let taskEl = document.createElement('li');
    let textEl = document.createTextNode(task.name)

taskEl.setAttribute('id', task.id);

taskEl.appendChild(textEl);

listEl.appendChild(taskEl);
}

function addTask (event) {
    let inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){

        let id = 'item-' + tasks.length;

        let task = new Task (id, inputEl.value, taskStatus.active);
        tasks.push(task);

        addTaskElement(task);

        inputEl.value = '';

    }
}

function completeTask (event) {
    
    let taskEl = event.target;
    let id = taskEl.id;

    for(let i = 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            tasks[i].status = taskStatus.complete;
            break;
        }
    }

    taskEl.remove();

    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

function init(){

    document.getElementById('add-task').onclick = addTask;

    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}

init();


