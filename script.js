// An Array for storing books (Book Objects) and other objects/elements
const myLibrary = [];
let libraryContainer = document.querySelector(".books-container");
const displayBookForm = document.querySelector(".add-book-button");
const formContainer = document.querySelector(".form-container");
const addBook = document.querySelector(".add-book");
const bookForm = document.querySelector("form");

/**
 * Constructor for creating Books
 * @param {String} author name of the author    
 * @param {String} title name of the Book
 * @param {number} numberOfPages number of pages the Book contains
 * @param {boolean} isRead True if read
 */
function Book(author, title, numberOfPages, isRead) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

/**
 * Add a Book to the Library (Array of Books)
 * @param {Book} bookToAdd a book to add
 */
function addBookToLibrary(bookToAdd) {
    myLibrary.push(bookToAdd);
}

/**
 * Display form when button is clicked
 */
displayBookForm.addEventListener("click", () => {
    toggleFormVisibility();

    if (formContainer.classList.contains("show-form")) {
        displayBookForm.classList.add("showed");
        displayBookForm.textContent = "Close Form";
    } else {
        displayBookForm.classList.remove("showed");
        displayBookForm.textContent = "+";
    }
});

/**
 * Toggle the form atribute
 */
function toggleFormVisibility() {
    formContainer.classList.toggle("show-form");
}

/**
 * Close the form
 */
function closeForm() {
    formContainer.classList.remove("show-form");
}

/**
 * Clear the form fields
 */
function clearForm() {
    bookForm.reset();
}

/**
 * Prevent the form from sending its data to another url
 * close and reset the form
 */
bookForm.addEventListener("submit", function(event) {
    //prevent form submission
    event.preventDefault();

    //Check validity
    if (bookForm.checkValidity()) {
        //Add book to library

        clearForm();
        closeForm();
    }
});


/**
 * Display Books that are in the array
 */
function displayBooks() {
    //clear existing content to prevent duplicit cards
    libraryContainer.innerHTML = "";

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