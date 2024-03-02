const form = document.querySelector('form');
const allTasks = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value.trim();
    if(task === '') return;

    const parent = document.createElement('div');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;
    taskSpan.style.marginRight = '10px';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.width = '80px';

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.style.width = '80px';
    doneBtn.style.marginRight = '10px';

    parent.appendChild(taskSpan);
    parent.appendChild(doneBtn);
    parent.appendChild(deleteBtn);
    allTasks.appendChild(parent);

    input.value = '';

    deleteBtn.addEventListener('click', () => {
        allTasks.removeChild(parent);
    });

    doneBtn.addEventListener('click', () => {
        taskSpan.style.textDecoration = 'line-through';
        taskSpan.style.color = 'gray';
    });
});