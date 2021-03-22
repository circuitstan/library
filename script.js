function Book(title, author, numberOfPages, readOrNot) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.readOrNot = readOrNot
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + this.readOrNot
}


const book1 = new Book("The Martian", "Andy Weir", 369, "not read yet")
const book2 = new Book("12 rules for life", "Jordan Peterson", 448, "read")

let myLibrary = [book1, book2]

let content = ""

const main = document.getElementById('container')
const newBookBtn = document.getElementById('newBook')
//let buttons = document.getElementsByClassName('removeBtn')  


function addBookToLibrary(book) {
    myLibrary.push(book)
    content = myLibrary[myLibrary.length-1].info()
    let newDiv = document.createElement('div')
    let removeBtn = document.createElement('button')
    removeBtn.className = "removeBtn"
    removeBtn.textContent = "×"
    newDiv.className = "card"
    newDiv.textContent = content
    main.appendChild(newDiv)
    newDiv.appendChild(removeBtn)
    //buttons = document.getElementsByClassName('removeBtn')    
}

function createLibrary() {
    for (let i = 0; i<myLibrary.length; i++) {
        content = ""
        /*for (let prop in myLibrary[i]) {
            if (myLibrary[i].hasOwnProperty(prop)) {
                content += myLibrary[i][prop] + " "   
            }
        }*/
        content = myLibrary[i].info()
        let newDiv = document.createElement('div')
        let removeBtn = document.createElement('button')
        removeBtn.className = "removeBtn"
        removeBtn.textContent = "×"
        newDiv.className = "card"
        newDiv.textContent = content
        main.appendChild(newDiv)
        newDiv.appendChild(removeBtn)
    }
}
createLibrary()    

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function newBook() {
    let newTitle = document.getElementById('title').value
    let newAuthor = document.getElementById('author').value
    let newPages = document.getElementById('pages').value
    let newSwitch = document.getElementById('switch').value
    if (newSwitch == "off") {
        readOrNot = "not read yet"
    } else {
        readOrNot = "read"
    }
    let newBook = new Book(newTitle, newAuthor, newPages, readOrNot)
    addBookToLibrary(newBook)
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    if (newSwitch == "on") {
        document.getElementById('switch').click()
        console.log("wtf")
    }
    closeForm()
}


function toggle() {
    let onOff = document.getElementById('switch').value
    if (onOff == "off") {
        document.getElementById('switch').value = "on"
    } else {
        document.getElementById('switch').value = "off"
    }
}


document.getElementById('container').addEventListener('click', function(e) {
    if (e.target.matches("button.removeBtn")) {
        console.log(e)
        main.removeChild(e.path[1])
    }
})

