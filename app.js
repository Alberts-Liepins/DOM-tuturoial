const list = document.querySelector('#book-list ul')

// delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement
        list.removeChild(li)
    }
})

const addForm = document.forms['add-book']

addForm.addEventListener('submit', function(e){
    e.preventDefault()
    const value = addForm.querySelector('input[type="text"]').value
    
    // create elements
    const li = document.createElement("li")
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    // append to document (Jeb pievienot pie)
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)

    // add content
    deleteBtn.textContent = 'delete'
    bookName.textContent = value
})