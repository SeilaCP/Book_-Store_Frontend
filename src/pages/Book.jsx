import { useNavigate } from "react-router-dom";
import Carousal from "../components/Carousal";
import Search from "../components/Search";
import BookGrid from "../components/Book-grid";
import { bookData } from "../data/booksData";

function Book() {
  // const navigate = useNavigate();

  return (
    <>
      <div>
      <Search />
      <div className=" mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Book Categories</h1>
        <p className="text-gray-600 mb-8">Explore our collection of books across various categories.</p>
        
      {/* Render the BookGrid for each category */}
        <BookGrid category="new" title="New Releases" allBooks={bookData} />
        <BookGrid category="manga" title="Manga" allBooks={bookData} />
        <BookGrid category="fiction" title="Fiction" allBooks={bookData} />
        <BookGrid category="programming" title="Programming" allBooks={bookData} />
        <BookGrid category="fantasy" title="Fantasy" allBooks={bookData} />
      </div>
    </div>

    </>
  );
}

export default Book;
