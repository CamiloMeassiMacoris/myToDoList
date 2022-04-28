const formAddTodo = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')
const fromSeach = document.querySelector('.search')

const addTodo = event => {
  event.preventDefault()

  const inputAddTodo = event.target.addTodo.value.trim()

  todoList.innerHTML += `<li id="todo" data-todo="${inputAddTodo}">
    <span>${inputAddTodo}</span>
    <i class="far fa-trash-alt" data-trash="${inputAddTodo}"></i>
  </li>`
}

const removeTodo =  event => {
  const trash = event.target.dataset.trash
  const removeTodo = document.querySelector(`[data-todo="${trash}"]`)
  if (removeTodo) {
    removeTodo.remove()
  }
}

const filtering = (liTodoList, inputTodoSeach) => {
  liTodoList.filter(todo => {
    const matchedTodo = todo.textContent.toLowerCase().includes(inputTodoSeach)

    if (matchedTodo) {
      return todo.classList.remove('hidden')
    }
    return todo.classList.add('hidden')    
  })
}

const searchTodo = event => {
  event.preventDefault()

  const liTodoList = Array.from(document.querySelectorAll('#todo'))
  const inputTodoSeach = event.target.value.trim()

  filtering(liTodoList,inputTodoSeach)
}

formAddTodo.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeTodo)
fromSeach.addEventListener('input', searchTodo)
