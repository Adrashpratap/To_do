//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click',addTodo);



//function
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoitem');
    todoDiv.appendChild(newTodo);
    //check Mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class = "fas fa-check></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Todo Input value
    todoInput.value = "";
}
