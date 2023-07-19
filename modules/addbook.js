

export const addNewBook = (bookList) => {
  const put = document.querySelector('form');
  put.addEventListener('submit', (e) => {
    e.preventDefault();

  const title = bookList.titleInput.value;
  const author = bookList.authorInput.value;

  if (!title || !author) {
    return;
  }
  const duplicate = bookList.books.some((book) => book.title === title && book.author === author);
  if (duplicate) {
    const put = document.querySelector('form');
  let messageElement = document.querySelector('.message');
  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.classList.add('message');
    put.appendChild(messageElement);
  }
  messageElement.textContent = 'The book exists already!';
  setTimeout(() => {
    messageElement.remove();
  }, 1000);
  return 0;
  }
  const book = { title, author };
  bookList.books.push(book);
  localStorage.setItem('books', JSON.stringify(bookList.books));
  bookList.displayBooks();

  bookList.titleInput.value = '';
  bookList.authorInput.value = '';
});
};
