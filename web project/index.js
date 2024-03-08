document.addEventListener("DOMContentLoaded", function () {
    const currentDate = (new Date()).toLocaleDateString();
    const currDate = document.getElementById("date");
    currDate.innerHTML = "<label>Date: " + currentDate +"</label>";

    const form = document.querySelector('form');
    const input = document.querySelector('#taskInput');
    const tasklist = document.querySelector('#taskList');

    function addTask(task) {
        const listTask = document.createElement('li');
        listTask.innerHTML = `<input type="checkbox"/> <span>${task}</span> <button>—</button>`;
        tasklist.appendChild(listTask);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = input.value.trim();

        if (task) {
            if (task.length <= 44) {
                addTask(task);
            } else {
                alert("Error: Task must be 44 characters or less!");
            }
        } else {
            alert("Error: User must type something!");
        }

        input.value = '';
    });

    tasklist.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const listitem = event.target.parentElement;
            listitem.remove();
        }
    });
});
