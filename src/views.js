import { getFilters } from "./filters";
import {
  getTodos,
  createTodo,
  removeTodo,
  toggleTodo,
  saveTodos,
} from "./todos";
// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const todoEl = document.querySelector("#placeTodo");
  const { searchText, Toggle } = getFilters();
  const todos = getTodos();
  const filterTodos = todos.filter((todo) => {
    const filtersearch = todo.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const filterComplet = !todo.completed || !Toggle;
    // debugger
    return filtersearch && filterComplet;
  });
  // debugger
  const notCompleted = filterTodos.filter((todo) => !todo.completed);
  // debugger
  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDOM(notCompleted));

  if (filterTodos.length > 0) {
    filterTodos.forEach((todo) => {
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "There are no to-dos to show";
    todoEl.appendChild(messageEl);
  }
};
// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
  //deculration variable Items of todo (container, text, checkbox, delete)
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const textTodo = document.createElement("span");
  const checkbox = document.createElement("input");
  const removeTodoBtn = document.createElement("button");

  //setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  containerEl.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    renderTodos();
  });

  //setup the todo text
  textTodo.textContent = todo.title;
  containerEl.appendChild(textTodo);

  //setup the containerEl
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  //setup the remove button
  removeTodoBtn.textContent = "remove";
  removeTodoBtn.classList.add("button", "button--text");
  todoEl.appendChild(removeTodoBtn);
  removeTodoBtn.addEventListener("click", () => {
    removeTodo(todo.id);
    renderTodos();
  });

  //return the div that container all Item Todo
  return todoEl;
};
// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (notCompleted) => {
  const summary = document.createElement("h2");
  summary.classList.add("list-title");
  const plural = notCompleted.length === 1 ? "" : "s";
  summary.textContent = `You have ${notCompleted.length} todo${plural} left`;
  return summary;
};
// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM };
