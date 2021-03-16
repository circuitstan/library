function Book(title, author, numberOfPages, readOrNot) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readOrNot = readOrNot
    this.info = function() {
        return title + " by " + author + ", " + numberOfPages + " pages, " + readOrNot
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

let myLibrary = []

const book1 = new Book("The Martian", "Andy Weir", 369, "not read yet")
const book2 = new Book("12 rules for life", "Jordan Peterson", 448, "read")

addBookToLibrary(book1)
addBookToLibrary(book2)

// for each book in myLibrary, display book