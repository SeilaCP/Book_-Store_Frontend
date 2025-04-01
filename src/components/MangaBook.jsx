import React from 'react';
import { bookData } from "../data/booksData";


export default function MangaBook() {
  const mangaBooks = bookData.manga

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {mangaBooks.map((book, index) => (
        <div
        key={index} 
        className="bg-white p-2.5 rounded-2xl w-52 shadow-md flex flex-col text-center"
        >
          <img
            src={book.imgLink}
            alt={book.title}
            className="rounded-md w-full h-56 object-cover"
            />
          <div className="book-details">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <button className="bookmark mt-2 bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600">
              Bookmark
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}