// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here




// Function to render the TODO list
function renderTodoList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = ''; // Clear the existing list

  todoList.forEach(item => {
      const li = document.createElement('li');
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');

      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      checkbox.addEventListener('change', (evt) => {
          item.completed = evt.target.checked;
          console.log(todoList); // Log updated array
      });

      label.textContent = item.task;
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
          removeTodoItem(item.id);
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      ul.appendChild(li);
  });
}

// Function to remove a TODO item
function removeTodoItem(id) {
  const index = todoList.findIndex(item => item.id === id);
  if (index !== -1) {
      todoList.splice(index, 1);
      console.log(todoList); // Log updated array
      renderTodoList(); // Re-render the list
  }
}

// Function to add a new TODO item
function addTodoItem(task) {
  const newItem = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      task: task,
      completed: false,
  };
  todoList.push(newItem);
  console.log(todoList); // Log updated array
  renderTodoList(); // Re-render the list
}

// Event listener for the Add Item button to open the modal
document.querySelector('.add-btn').addEventListener('click', () => {
  document.querySelector('dialog').showModal();
});

// Event listener for the Save button in the modal
document.querySelector('dialog form').addEventListener('submit', function (evt) {
  evt.preventDefault();
  const input = this.querySelector('input[type="text"]');
  if (input.value.trim()) {
      addTodoItem(input.value.trim());
      input.value = ''; // Clear the input field
      document.querySelector('dialog').close(); // Close the modal
  }
});

// Initial render of the TODO list
renderTodoList();
