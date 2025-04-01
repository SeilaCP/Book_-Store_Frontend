// Function to get cart items from localStorage
export function getCartItems() {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  }
  
  // Function to add a book to the cart
  export function addToCart(book) {
    const cartItems = getCartItems();
  
    // Check if the book is already in the cart
    const existingBook = cartItems.find((item) => item.id === book.id);
    if (existingBook) {
      existingBook.quantity += 1; // Increment quantity if already in the cart
    } else {
      cartItems.push({ ...book, quantity: 1 }); // Add new book with quantity 1
    }
  
    // Save updated cart data back to localStorage
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }
  
  // Function to remove a book from the cart
  export function removeFromCart(bookId) {
    const cartItems = getCartItems();
    const updatedCart = cartItems.filter((item) => item.id !== bookId);
  
    // Save updated cart data back to localStorage
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  }