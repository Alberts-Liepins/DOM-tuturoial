var books = document.querySelectorAll('#book-list li .name')

Array.from(books).forEach(function(book){
    book.textContent += ' (book title)'
})

const BookList = document.querySelector('#book-list')
//BookList.innerHTML = '<h2>Books and more books...</h2>'
BookList.innerHTML += '<p>This is how you add HTML</p>'