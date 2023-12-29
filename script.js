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
    displayBookForm.classList.remove("showed");
    displayBookForm.textContent = "+";
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
 * 
 * Create a new Book
 */
bookForm.addEventListener("submit", function(event) {
    //prevent form submission
    event.preventDefault();

    //Check validity
    if (bookForm.checkValidity()) {
        const author = document.querySelector("#author").value;
        const title = document.querySelector("#title").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("input[name='readBookName']:checked").id;

        const book = new Book (author, title, pages, read === "read");
        addBookToLibrary(book);

        clearForm();
        closeForm();

        displayBooks();
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
        const read = document.createElement("button");
        const removeButton = document.createElement("button");

        read.classList.add("readBook");
        title.classList.add("title");
        removeButton.classList.add("remove");

        let isTheBookRead = book.isRead ? "is Read" : "not Read";

        author.textContent = book.author;
        title.textContent = book.title;
        numberOfPages.textContent = book.numberOfPages;
        read.textContent = isTheBookRead;
        removeButton.textContent = "Remove";

        read.classList.add(book.isRead ? "isRead" : "notRead");

        bookCard.appendChild(author);
        bookCard.appendChild(title);
        bookCard.appendChild(numberOfPages);
        bookCard.appendChild(read);
        bookCard.appendChild(removeButton);

        libraryContainer.appendChild(bookCard);

        read.addEventListener("click", function() {
            // Toggle the read status and update the display
            book.isRead = !book.isRead;
            displayBooks();
        });
    }
}

// firing functions
displayBooks();