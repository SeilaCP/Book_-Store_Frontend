import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Info } from "lucide-react";

export default function BookGrid({ category, title, allBooks }) {
  const [hoveredBook, setHoveredBook] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const books = allBooks[category.toLowerCase()] || allBooks["new"];
  const visibleBooks = books.slice(startIndex, startIndex + 6);
  const hasMoreBooks = books.length > startIndex + 6;
  const hasPreviousBooks = startIndex > 0;

  const showNextBooks = () => hasMoreBooks && setStartIndex((prev) => prev + 6);
  const showPreviousBooks = () => hasPreviousBooks && setStartIndex((prev) => Math.max(0, prev - 6));

  const getRelatedBooks = (book) => {
    const byAuthor = books.filter((b) => b.id !== book.id && b.author === book.author).slice(0, 2);
    let related = [...byAuthor];
    if (related.length < 2 && book.genre) {
      const byGenre = books.filter((b) => b.id !== book.id && b.author !== book.author && b.genre?.some((g) => book.genre?.includes(g))).slice(0, 2 - related.length);
      related = [...related, ...byGenre];
    }
    if (related.length < 2) {
      const random = books.filter((b) => b.id !== book.id && !related.some((r) => r.id === b.id)).slice(0, 2 - related.length);
      related = [...related, ...random];
    }
    return related;
  };

  return (
    <div className="px-4 relative mt-10">
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}

      {hasPreviousBooks && (
        <button onClick={showPreviousBooks} className="absolute  z-10 left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur-sm hover:bg-background" aria-label="Previous books">
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {hasMoreBooks && (
        <button onClick={showNextBooks} className="absolute z-10 right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md backdrop-blur-sm hover:bg-background" aria-label="Next books">
          <ChevronRight className="h-8 w-8" />
        </button>
      )}

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {visibleBooks.map((book) => (
          <div key={book.id} className="group relative">
            <div
              onClick={() => (window.location.href = `/book/${book.id}`)}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              className="cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={book.cover || "../data/download (13).jpg"}
                  alt={book.title}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-background/80 p-1.5 backdrop-blur-sm">
                    <Info className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-medium line-clamp-1 group-hover:text-primary">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <div className="mt-1 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs">{book.rating}</span>
                  <span className="ml-auto text-sm font-medium">${book.price}</span>
                </div>
              </div>
            </div>
            <div className="absolute z-100 left-0 right-0 mt-2 p-4 bg-white bg-card text-card-foreground rounded-lg shadow-lg border hidden group-hover:block">
              <h4 className="font-semibold">{book.title}</h4>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              {book.description && <p className="mt-2 text-sm line-clamp-2">{book.description}</p>}
              {book.genre && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {book.genre.map((g) => (
                    <span key={g} className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{g}</span>
                  ))}
                </div>
              )}
              <div className="border-t p-4 ">
                <h5 className="mb-2 text-sm font-medium">You might also like:</h5>
                <div className="grid grid-cols-2 gap-3">
                  {getRelatedBooks(book).map((related) => (
                    <a key={related.id}  onClick={() => (window.location.href = `/book/${related.id}`)}
                    onMouseEnter={() => setHoveredBook(book.id)}
                    onMouseLeave={() => setHoveredBook(null)}
                    className="group flex gap-2">
                      <div className="relative h-16 w-10 overflow-hidden rounded">
                        <img src={related.cover || "https://via.placeholder.com/300x450"} alt={related.title} layout="fill" objectFit="cover" />
                      </div>
                      <div className="flex-1">
                        <h6 className="text-xs font-medium line-clamp-1 group-hover:text-primary">{related.title}</h6>
                        <p className="text-xs text-muted-foreground">{related.author}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

