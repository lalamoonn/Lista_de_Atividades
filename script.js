const formTodoAdd = document.querySelector("#tdform")
const inputTodoAdd = document.querySelector("#tdinput")
const tasksList = document.querySelector("#lista")
const filter = document.querySelector("#filtro")

const saveTask = (text) => {
     const task = document.createElement("div")
     task.classList.add("todo")

     const tasktxt = document.createElement("p")
     tasktxt.innerText = text
     task.appendChild(tasktxt);

     const btnconclude = document.createElement("button")
     btnconclude.classList.add("btnconclude")
     btnconclude.innerHTML = '<i class="fa-solid fa-check"></i>'
     task.appendChild(btnconclude)

     const btndelete = document.createElement("button")
     btndelete.classList.add("btndelete")
     btndelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
     task.appendChild(btndelete)
     tasksList.appendChild(task)

     inputTodoAdd.value = ""
     inputTodoAdd.focus() 
}

formTodoAdd.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = inputTodoAdd.value;

    if(inputValue){
        saveTask(inputValue)
    }
})

document.addEventListener("click", (e) => {
    const btnTask = e.target
    const divTask = btnTask.closest("div")

    if(btnTask.classList.contains("btnconclude")){
        divTask.classList.toggle("done")
    }

    if(btnTask.classList.contains("btndelete")){
        divTask.remove();
    }
})

filter.addEventListener("change", (e) => {
    selected = e.target.value;
    finishedTasks = document.querySelectorAll(".done")
    todoTasks = document.querySelectorAll(".todo")
    if(selected === "all"){
        todoTasks.forEach(function(e) {
            e.style.display = 'flex'
        })
    }
    if(selected === "done"){
        todoTasks.forEach(function(e) {
            e.style.display = 'none'
        })
        finishedTasks.forEach(function(e) {
            e.style.display = 'flex'
        })
    }
    if(selected === "todo"){
        todoTasks.forEach(function(e) {
            e.style.display = 'flex'
        })
        finishedTasks.forEach(function(e) {
            e.style.display = 'none'
        })
    }
})