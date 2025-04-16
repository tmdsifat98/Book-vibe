import React, { use } from "react";
import Book from "./Book";
const Books = ({ bookResponse }) => {
  const bookData = use(bookResponse);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-4">Books</h1>
      <div className="grid grid-cols-4 gap-20">
        {bookData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
      
    </div>
  );
};

export default Books;
