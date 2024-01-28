const todoListUl = document.getElementById('todoList')
const doneListUl = document.getElementById('doneList')
const form = document.getElementById('form')

const todoListItems = []

function displayTodoListItems(){
    const itemsWithStatusTodo = todoListItems.filter(item => item.status === 'todo')
    
    for(let i =0; i<itemsWithStatusTodo.length; i++){
        
        const item = itemsWithStatusTodo[i]

        const li = document.createElement('li')
        const h3 = document.createElement('h3')

        h3.innerHTML = itemsWithStatusTodo[i].title
        li.append(h3)

        const button = document.createElement('button')
        button.innerHTML = 'Mark as done'
        li.append(button)

        todoListUl.append(li)

        button.addEventListener('click', ()=>{
            console.log(i)
            item.status = 'done'
             li.remove()
          displayDoneItems()

        })
    }
}

function displayDoneItems(){
    const doneItems = todoListItems.filter(item => item.status === 'done')
      
    doneListUl.innerHTML=''

    for(let i = 0; i<doneItems.length; i++){
        const item = doneItems[i]

        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        h3.innerHTML = item.title
        li.append(h3)

        doneListUl.append(li)
    }
}


form.addEventListener('submit', (event) => {
    todoListUl.innerHTML = ''
    doneListUl.innerHTML = ''
    event.preventDefault()

    const item = {
        title: form['item'].value,
        status: 'todo'
    }

    todoListItems.push(item)
    displayTodoListItems()
    displayDoneItems()
})


