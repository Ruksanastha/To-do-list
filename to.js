function renderTodos() {
  const todos = JSON.parse(localStorage.getItem("todos") || []);

  const todoList = document.getElementById("items");
  todoList.innerHtml = "";
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.innerHtml = `${todo} <button>Delete</button>`;
    todoList.appendChild(todoItem);
  });
}
function addTodo() {
  let todoInput = document.querySelector(" inputText");
  let todoText = todoInput.value.trim();
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
