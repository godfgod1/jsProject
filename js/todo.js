const todoForm = document.querySelector('.todo-form') 
const todoInput = todoForm.querySelector('input') 
const todoList = document.querySelector('.todo-list') 
const allDelete = document.querySelector('.delete-all') 

let toDos = []

function saveToDos(){
    localStorage.setItem('todos',JSON.stringify(toDos))
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id))
    saveToDos();
}

function toggleImportance(e){
    const li = e.target.parentElement;
    const span =li.childNodes[0]
    span.classList.toggle('importance')
}
function toggleCompletion(e){
    const li = e.target.parentElement;
    li.classList.toggle('complete')
}

function paintTodo(newTodo){
    const li = document.createElement('li')
    li.id = newTodo.id
    const span = document.createElement('span')
    span.innerText = newTodo.text
    const importance = document.createElement('button')
    importance.innerText = '중요'
    const completion = document.createElement('button')
    completion.innerText = '완료'
    const button = document.createElement('button')
    button.innerText = '삭제'
    importance.onclick = toggleImportance
    completion.onclick = toggleCompletion
    button.onclick = deleteTodo
    li.appendChild(span)
    li.appendChild(importance)
    li.appendChild(completion)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleTodo(e){
    e.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ''
    const newTodoOjb = {
        text: newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoOjb)
    paintTodo(newTodoOjb)
    saveToDos()
}

todoForm.onsubmit = handleTodo

const savedToDos = localStorage.getItem("todos")

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo)

}

function deleteAll() {
    
    localStorage.removeItem('todos')
    while(todoList.childElementCount !== 0 ){
        todoList.removeChild(todoList.firstChild)
    }
}

allDelete.onclick= deleteAll