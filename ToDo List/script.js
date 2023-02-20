let taskInput = document.querySelector('#new-task');
let allTasks = document.querySelector('.all-tasks');

function btnAdd(){
    let inputValue = taskInput.value;
    if (inputValue == '') {
        alert('Please insert task');
    }else{
        allTasks.innerHTML += `<li class = "task">
        <p class = "task-name">${inputValue}</p>
        <button onclick = "btnDelete(this)">X</button>
        </li>`;
        taskInput.value = ''; 

        let tasks = document.querySelectorAll('.task'); //selektujemo sve taskove
        for(let i = 0; i < tasks.length; i++){/*for petlja da prodje kroz sve taskove i pravimo funkciju kad kliknemo da oboji u zeleno*/
            tasks[i].onclick = function(){
                this.classList.toggle('done'); 
            }
        }
    }
}
function btnDelete(element){
    let taskInput = element.closest('.task');
    taskInput.remove();
}

btnAdd = addEventListener('click', addTask);