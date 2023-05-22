const todoList = [{
  name:'make diner', 
  dueDate:'2022-12-22'
}, {
  name:'wash diches',
  dueDate:'2022-12-22'
}];

renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    todoList.forEach((todoObject, index) => {
      const {name, dueDate} = todoObject
      const html = `
      <div>${name}</div>
       <div>${dueDate}</div>
         <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
      todoListHTML += html
    })      

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        console.log(index)
        todoList.splice(index, 1);
           renderTodoList()
      })
    })
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo()
})

document.querySelector('.js-name-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo()
  }
})


function addTodo() {
  const inputElement = document.querySelector('.js-name-input')

  const name = inputElement.value

  const dateInputELement = document.querySelector('.js-due-date-input')

  const dueDate = dateInputELement.value

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  })

  inputElement.value = ''

  renderTodoList()
}