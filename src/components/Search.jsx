import React, { useState } from "react";
import { bookData } from "../data/booksData"; // Import booksData

export default function Search() {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filteredBooks, setFilteredBooks] = useState([]); // State to store filtered books

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase(); // Get the search term and convert to lowercase
    setSearchTerm(term);

    if (term === "") {
      // If the search term is empty, reset the filteredBooks
      setFilteredBooks([]);
      return;
    }

    // Filter books based on the search term
    const results = [];
    for (const category in bookData) {
      const books = bookData[category].filter((book) =>
        book.title.toLowerCase().includes(term)
      );
      results.push(...books);
    }
    setFilteredBooks(results); // Update the filtered books
  };

  return (
    <div className="flex flex-col items-center py-10 px-5">
      {/* Search Input */}
      <div className="flex items-center bg-[#fff5e5] rounded-full p-3 w-3/4 shadow-md">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch} // Handle input change
          className="border-none bg-transparent w-full text-lg p-1 outline-none"
        />
        <button className="p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
            alt="Search"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Search Results */}
      <div className="mt-5 w-3/4 absolute z-10 mt-20">
        {filteredBooks.length > 0 ? (
          <ul className="space-y-4">
            {filteredBooks.map((book) => (
              <li
                key={book.id}
                onClick={() => {
                  // Navigate to the book's detail page
                  window.location.href = `/book/${book.id}`;
                  // Optional: Log the book's information
                  console.log(`Navigating to book: ${book.title}`);
                }}
                className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:bg-gray-100 transition duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                <span className="text-sm font-medium">${book.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          searchTerm && (
            <p className="text-center text-muted-foreground">
              No books found for "{searchTerm}"
            </p>
          )
        )}
        </div>
    </div>
  );
}