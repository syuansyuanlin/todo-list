let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    //避免這個form被交出去
    e.preventDefault();

    // get the input values
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;
    console.log(todoText, todoMonth, todoDate);

    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    todo.classList.add("todo-text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time");
    time.innerText = todoMonth + "/" + todoDate; 
    todo.appendChild(text);
    todo.appendChild(time);

    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.addEventListener("click", e => {
        let todoItem = e.target.parentElement;
        todoItem.classList.add("done");
    })

    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleUp 0.3s forwards";

    section.appendChild(todo);
})