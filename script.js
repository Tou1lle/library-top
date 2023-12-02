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

// Dummy Books
const snowMan = new Book("Jo Nesbo", "The Snowman", 400, true);
const tokyoGhoul = new Book("Sui Ishida", "Tokoy Ghoul", 100, false);
const wimpyKid = new Book("Jeff Kinney", "Diary of a Wimpy Kid", 300, true);