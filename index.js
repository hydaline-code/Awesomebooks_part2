
import { addNewBook } from './modules/addbook.js';
import { displayBooks } from './modules/displaylist.js';
import { Swap } from './modules/swap.js';

  class BookList {
    constructor() {
      this.books = [];
      this.titleInput = document.getElementById('title');
      this.authorInput = document.getElementById('author');
      this.addBtn = document.getElementById('add');
      this.booksList = document.getElementById('books');
      this.store = document.querySelector('.store');
     this.addBtn.addEventListener('click', () => addNewBook(this));
      const storage = localStorage.getItem('books');
      if (storage) {
        this.books = JSON.parse(storage);
        this.addBtn.addEventListener('click', () => addNewBook(this));
        displayBooks(this)
      }
    }


  displayBooks() {
    displayBooks(this);
  }

 
  addNewBook() {
    addNewBook(this);
  }

}

const bookList = new BookList();
Swap();