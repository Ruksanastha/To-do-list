function renderTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoList = document.getElementById("items");
  todoList.innerHtml = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.innerHTML = `${todo}
        <button class="delete"><i class="las la-trash"></i></button>
        `;
    todoList.appendChild(todoItem);
  });
  const deleteButton
}
function addTodo() {
  let todoInput = document.querySelector(" inputText");
  let todoText = todoInput.ariaValueMax.trim();
  if (todoText !== "") {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
  }
}
function deleteTodo() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  renderTodos();

}
renderTodos();
