// Get references to the form, list, and template elements
const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");
const template = document.querySelector("#todo-template");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the value of the input field
  const todo = document.querySelector("#todo-input").value;

  // Create a new list item element using the template
  const li = document.importNode(template.content, true);
  li.querySelector(".todo-text").textContent = todo;

  // Add the new list item to the list
  list.appendChild(li);

  // Clear the input field
  document.querySelector("#todo-input").value = "";
});

// Add a click event listener to the list
list.addEventListener("click", (event) => {
  // Get the clicked element
  const element = event.target;

  // Check if the clicked element is a delete button
  if (element.classList.contains("delete-button")) {
    // Remove the parent list item element
    element.parentElement.remove();
  }

  // Check if the clicked element is an edit button
  if (element.classList.contains("edit-button")) {
    // Get the text of the list item
    const todoText = element.previousElementSibling.textContent;

    // Set the value of the input field to the text of the list item
    document.querySelector("#todo-input").value = todoText;

    // Remove the parent list item element
    element.parentElement.remove();
  }
});
