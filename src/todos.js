import uuidv4 from "uuid/v4";
console.log("test edit");
// Setup the empty todos array
let todos = [];
// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
  const todoJSON = localStorage.getItem("TODOS");
  try {
    todos = todoJSON ? JSON.parse(todoJSON) : [];
  } catch {
    todos = [];
  }
};
// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  localStorage.setItem("TODOS", JSON.stringify(todos));
};
// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos;
// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (noteText) => {
  todos.push({
    id: uuidv4(),
    title: noteText,
    completed: false,
  });
  saveTodos();
  noteText = "";
};
// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
  const indexTodo = todos.findIndex((todo) => todo.id === id);

  if (indexTodo > -1) {
    todos.splice(indexTodo, 1);
  }
  saveTodos();
};
// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
  const findTodo = todos.find((todo) => todo.id === id);
  if (findTodo) {
    findTodo.completed = !findTodo.completed;
  }
  saveTodos();
};
loadTodos();
// Make sure to call loadTodos and setup the exports
export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo };
