// An Array for storing books (Book Objects)
const myLibrary = [];

// Object constructor for Books
function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

// A function for adding Books to the library - myLibrary array
function addBookToLibrary() {
    const author = prompt("The name of the author");
    const title = prompt("The name of the Book");
    const numberOfPages = parseInt(prompt("The number of pages"));
    const read = Boolean(prompt("Did you read the book? (leave empty if not)"));

    const newBook = new Book(author, title, numberOfPages, read);

    myLibrary.push(newBook);
}

// A function that displays all books on the web
function displayBooks() {
    let libraryContainer = document.querySelector(".books-container");

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

myLibrary.push(snowMan);
myLibrary.push(tokyoGhoul);
myLibrary.push(wimpyKid);
myLibrary.push(test);
myLibrary.push(test2);

// firing functions
displayBooks();