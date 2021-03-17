function Book(title, author, numberOfPages, readOrNot) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readOrNot = readOrNot
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + this.readOrNot
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let myLibrary = []

const book1 = new Book("The Martian", "Andy Weir", 369, "not read yet")
const book2 = new Book("12 rules for life", "Jordan Peterson", 448, "read")

addBookToLibrary(book1)
addBookToLibrary(book2)

let content = ""

const main = document.getElementById('container')
const newBookBtn = document.getElementById('newBook')

for (let i = 0; i<myLibrary.length; i++) {
    content = ""
    /*for (let prop in myLibrary[i]) {
        if (myLibrary[i].hasOwnProperty(prop)) {
            content += myLibrary[i][prop] + " "   
        }
    }*/
    content = myLibrary[i].info()
    let newDiv = document.createElement('div')
    newDiv.className = "card"
    newDiv.textContent = content
    main.appendChild(newDiv)
     
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}