import { Star, ChevronRight, Heart, Share, ShoppingCart } from "lucide-react"
import { useState } from "react";
import BookGrid from "./Book-grid";
import { bookData } from "../data/booksData";
import { useCart } from "@/pages/CartPage";

function findBookById(bookId) {
  // Loop through each category in bookData
  for (const category in bookData) {
    // Loop through each book in the category
    for (const book of bookData[category]) {
      // Check if the book's id matches the given id
      if (book.id === bookId) {
        return book; // Return the book if found
      }
    }
  }
  return null; 
}

export default function BookDetail({id}) {
  // This would normally come from an API or database based on the ID
  const book = findBookById(Number.parseInt(id));
  const { addToCart } = useCart();
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(book, 1); // Add the book to the cart
    setShowCartMessage(true); // Show the cart message
  };

  return (

    <div className="container mx-auto px-4 py-6 sm:px-6">
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container px-4 py-3 sm:px-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground">
            Home
          </a>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-foreground">{book.title}</span>
        </div>
      </div>

      {/* Book Details */}
      <main className="container px-4 py-6 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* Book Cover */}
          <div>
            <div className="sticky top-24 overflow-hidden rounded-lg border">
              <div className="relative aspect-[2/3] w-full">
                <img src={book.cover || "https://via.placeholder.com/300x450"} alt={book.title} className="object-cover w-full h-full" />
          
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(book.rating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{book.rating}</span>
              <span className="text-sm text-muted-foreground">({book.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div>
                <span className="text-2xl font-bold">${book.price}</span>
              </div>
              <button onClick={handleAddToCart} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-primary-dark">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              <button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </button>
              <button variant="outline" size="icon">
                <Share className="h-5 w-5" />
              </button>
            </div>
            {/* Conditional Cart Message */}
            {showCartMessage && (
                <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                  <p className="text-sm text-gray-700">
                    Item added to cart!{" "}
                    <a
                      href="/cart"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Go to Cart
                    </a>
                  </p>
                </div>
              )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <div className="text-muted-foreground space-y-4">
                {book.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold mb-3">Details</h2>
                <dl className="grid grid-cols-[120px_1fr] gap-2 text-sm">
                  <dt className="font-medium">Genre:</dt>
                  <dd>{book.genre.join(", ")}</dd>
                  <dt className="font-medium">Pages:</dt>
                  <dd>{book.pages}</dd>
                  <dt className="font-medium">Publisher:</dt>
                  <dd>{book.publisher}</dd>
                  <dt className="font-medium">Published:</dt>
                  <dd>{book.published}</dd>
                  <dt className="font-medium">ISBN:</dt>
                  <dd>{book.isbn}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Books */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <BookGrid  category="new" 
        title="New Arrivals" 
        allBooks={bookData} />
        </section>
        {/* User Reviews */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>
          <div className="space-y-6">
            {/* Review Form */}
            <div className="rounded-lg border p-4 bg-card">
              <h3 className="text-lg font-semibold mb-4">Leave a Review</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center mb-2">
                    <p className="text-sm font-medium mr-3">Your Rating:</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="p-1">
                          <Star className="h-5 w-5 text-muted hover:text-primary hover:fill-primary" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    placeholder="Share your thoughts about this book..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button>Submit Review</button>
                </div>
              </div>
            </div>

            {/* Existing Reviews */}
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-xs text-muted-foreground">Posted on March 15, 2023</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm">
                  This book kept me on the edge of my seat from beginning to end! The plot twists were unexpected and
                  the character development was excellent. I couldn't put it down and finished it in two days. Highly
                  recommend to anyone who enjoys psychological thrillers.
                </p>
              </div>

              {/* Review 2 */}
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Michael Rodriguez</h4>
                    <p className="text-xs text-muted-foreground">Posted on February 28, 2023</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm">
                  A fascinating exploration of the human psyche. The author does an amazing job of building tension
                  throughout the story. The ending was a bit rushed for my taste, but overall it was a great read that I
                  would recommend to friends.
                </p>
              </div>

              {/* Review 3 */}
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">Emily Chen</h4>
                    <p className="text-xs text-muted-foreground">Posted on January 12, 2023</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm">
                  One of the best thrillers I've read in years! The way the author slowly reveals information about the
                  characters and their motivations is masterful. I was completely surprised by the twist at the end.
                  This is definitely a book I'll be thinking about for a long time.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <button variant="outline">Load More Reviews</button>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
    </div>
  )
}

