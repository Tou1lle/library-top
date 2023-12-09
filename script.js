// An Array for storing books (Book Objects) and other objects/elements
const myLibrary = [];
let libraryContainer = document.querySelector(".books-container");
const addBookForm = document.querySelector(".add-book-button");
const formContainer = document.querySelector(".form-container");
const addBook = document.querySelector(".add-book");

// Object constructor for Books
function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

//Display form when addBookButton is clicked
addBookForm.addEventListener("click", () => {
    formContainer.style.display = "flex";
});

//Prevent default form submission
addBook.addEventListener("click", function(event) {
    event.preventDefault();
    formContainer.style.display = "none";
});

// A function for adding Books to the library - myLibrary array
function addBookToLibrary(author, title, numberOfPages, read) {
    const newBook = new Book(author, title, numberOfPages, read);
    myLibrary.push(newBook);
}

// A function that displays all books on the web
function displayBooks() {

    for (let book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card"
        
        const author = document.createElement("p");
        const title = document.createElement("p");
        const numberOfPages = document.createElement("p");
        const read = document.createElement("p");

        author.textContent = book.author;
        title.textContent = book.title;
        numberOfPages.textContent = book.numberOfPages;
        read.textContent = book.isRead;

        bookCard.appendChild(author);
        bookCard.appendChild(title);
        bookCard.appendChild(numberOfPages);
        bookCard.appendChild(read);

        libraryContainer.appendChild(bookCard);
    }
}

// Dummy Books
const snowMan = new Book("Jo Nesbo", "The Snowman", 400, true);
const tokyoGhoul = new Book("Sui Ishida", "Tokoy Ghoul", 100, false);
const wimpyKid = new Book("Jeff Kinney", "Diary of a Wimpy Kid", 300, true);
const test = new Book("Jo Nesbo", "The Snowman", 400, true);
const test2 = new Book("Jo Nesbo", "The Snowman", 400, true);
const test3 = new Book("Jo Nesbo", "The Snowman", 400, true);

myLibrary.push(snowMan);
myLibrary.push(tokyoGhoul);
myLibrary.push(wimpyKid);
myLibrary.push(test);
myLibrary.push(test2);
myLibrary.push(test3);

// firing functions
displayBooks();