import { removeBook } from './removebook.js';

export const displayBooks = (bookList) => {
  bookList.booksList.innerHTML = '';
  bookList.books.forEach((book, index) => {
    const booksC = document.createElement('div');
    const list = document.createElement('li');
    list.textContent = `"${book.title}" by ${book.author}`;
    booksC.appendChild(list);
    bookList.booksList.appendChild(booksC);

    const removeBtn = document.createElement('button');
    list.classList.add('book-item');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    list.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => removeBook(bookList, index));

    if ((index + 1) % 2 !== 0) {
      booksC.classList.add('odd');
    }
  });

  if (bookList.books.length !== 0) {
    bookList.store.classList.add('show');
  } else {
    bookList.store.classList.remove('show');
  }
};

export default displayBooks;