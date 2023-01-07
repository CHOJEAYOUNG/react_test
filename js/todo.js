const todoForm = document.getElementById("todo_form");
//const todoInput = todoForm.querySelector("input");
const todoInput = document.querySelector("#todo_form input");
const todoList = document.getElementById("todo_list");


function paintTodo(newToDoInput){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    
    span.innerText = newToDoInput;


    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(todoInput.value);

    const newToDoInput = todoInput.value;
    todoInput.value = "";
    paintTodo(newToDoInput);


}

todoForm.addEventListener("submit", handleToDoSubmit);