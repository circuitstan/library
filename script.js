function Book(title, author, numberOfPages, readOrNot) {
    this.title = title
    this.author = "By " + author
    this.numberOfPages = "- " + numberOfPages + " pages"
    this.readOrNot = "- " + readOrNot
}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + this.readOrNot
}

Book.prototype.changeReadStatus = function() {
    if (this.readOrNot == "read") {
        this.readOrNot = "not read yet"
    } else {
        this.readOrNot = "read"
    }
    return this.readOrNot
}


const book1 = new Book("The Martian", "Andy Weir", 369, "not read yet")
const book2 = new Book("12 rules for life", "Jordan Peterson", 448, "read")

let myLibrary = [book1, book2]

let content = ""

const main = document.getElementById('container')
const main2 = document.createElement('div')
const newBookBtn = document.getElementById('newBook')

main.appendChild(main2)

function addBookToLibrary(book) {
    myLibrary.push(book)
    resetLibrary()
}

function createLibrary() {
    for (let i = 0; i<myLibrary.length; i++) {
        content = ""
        /*for (let prop in myLibrary[i]) {
            if (myLibrary[i].hasOwnProperty(prop)) {
                content += myLibrary[i][prop] + " "   
            }
        }*/
        content = myLibrary[i].title
        let newDiv = document.createElement('div')
        let cardTitle = document.createElement('p')
        let cardAuthor = document.createElement('p')
        let cardPages = document.createElement('p')
        let cardReadStatus = document.createElement('p')
        let removeBtn = document.createElement('button')
        let toggleText = document.createElement('p')
        cardTitle.className = "cardTitle"
        cardAuthor.className = "cardAuthor"
        cardPages.className = "cardPages"
        cardReadStatus.className = "cardReadStatus"
        removeBtn.className = "removeBtn"
        toggleText.className = "toggleText"
        removeBtn.textContent = "×"
        newDiv.className = "card"
        newDiv.id = myLibrary[i].title
        cardTitle.textContent = myLibrary[i].title
        cardAuthor.textContent = myLibrary[i].author
        cardPages.textContent = myLibrary[i].numberOfPages
        cardReadStatus.textContent = myLibrary[i].readOrNot
        toggleText.textContent = "Update status:"
        main2.appendChild(newDiv)
        newDiv.appendChild(removeBtn)
        newDiv.appendChild(cardTitle)
        newDiv.appendChild(cardAuthor)
        newDiv.appendChild(cardPages)
        newDiv.appendChild(cardReadStatus)
        newDiv.appendChild(toggleText)
        createToggle(newDiv)
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
        removeFromLibrary(e)
        resetLibrary()
    }
    if (e.target.matches("span.slidersmall.roundsmall")) {
        toggle()
    }
})

function resetLibrary() {
    main2.innerHTML = ""
    createLibrary()
}

function removeFromLibrary(e) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == e.path[1].id) {
            myLibrary.splice(i, 1)
        }
    }
    return myLibrary
}

function createToggle(newDiv) {
    let toggleDiv = document.createElement('div')
    let toggleLabel = document.createElement('label')
    let toggleBtn = document.createElement('input')
    let slider = document.createElement('span')
    toggleDiv.className = "toggleDiv"
    toggleLabel.className = "switchsmall"
    toggleBtn.id = "switchsmall"
    toggleBtn.name = "switchsmall"
    toggleBtn.type = "checkbox"
    toggleBtn.value = "off"
    slider.className = "slidersmall roundsmall"
    newDiv.appendChild(toggleDiv)
    toggleDiv.appendChild(toggleLabel)
    toggleLabel.appendChild(toggleBtn)
    toggleLabel.appendChild(slider)
}
