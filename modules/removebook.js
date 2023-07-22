export const removeBook = (bookList, index) => {
  if (index >= 0 && index < bookList.books.length) {
    bookList.books = bookList.books.filter((book, i) => i !== index);
    localStorage.setItem('books', JSON.stringify(bookList.books));
    bookList.displayBooks();
  }
};

export default removeBook;