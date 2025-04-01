import Carousal from "../components/Carousal";
import Search from "../components/Search";
import BookGrid from "../components/Book-grid";
import { imageDataHeader } from "../data/imageData";
import { bookData } from "../data/booksData";

function Home() {

  return (
    <div className="home-container mx-auto">
      <Search />
      <Carousal images={imageDataHeader} />
      <BookGrid 
        category="new" 
        title="New Arrivals" 
        allBooks={bookData} 
      />
      <BookGrid 
        category="manga" 
        title="Manga" 
        allBooks={bookData} 
      />
    </div>
  );
}

export default Home;
