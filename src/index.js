// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { createTodo, loadTodos } from "./todos";
import { setFilters } from "./filters";
import { renderTodos } from "./views";
// Render initial todos
renderTodos();
// Set up search text handler

document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

// Set up checkbox handler
document.getElementById("checked").addEventListener("change", (e) => {
  setFilters({
    Toggle: e.target.checked,
  });
  renderTodos();
});

// Set up form submission handler
document.getElementById("form").addEventListener("submit", (e) => {
  const text = e.target.elements.creatTodo.value.trim();
  e.preventDefault();
  if (text.length > 0) {
    createTodo(text);
  }

  renderTodos();
});

// Bonus: Add a watcher for local storage
window.addEventListener("storage", (e) => {
  if (e.key === "TODOS") {
    loadTodos();
    renderTodos();
  }
});
