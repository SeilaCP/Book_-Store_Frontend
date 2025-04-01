import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home"
import Bestsellers from "./pages/Bestseller";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import BookLayout from "./layouts/BookLayout";
import AllBook from "./components/AllBooks"
import MangaBook from "./components/MangaBook"
import BookDetail from "./components/BookDetail";
import RegisterPage from "./components/SignPage";
import LoginPage from "./components/LoginPage";


import Footer from "./components/Footer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route index element={<Home/>} />
      <Route path="book" element={<BookLayout/>}>
        <Route index element={<AllBook/>}/>
        <Route path="manga" element={<MangaBook/>}/>
      </Route>
      <Route path="bestsellers" element={<Bestsellers/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Route>
  )
);

function App() {
  const currentPath = window.location.pathname;

  if (currentPath.startsWith("/book/")) {
    const bookId = currentPath.split("/book/")[1]; // Extract the book ID from the URL
    return (
      <>
        <BookDetail id={bookId} />
        <Footer />
      </>
    );
  }else {
    return (<RouterProvider router={router}/>);
  }
}

export default App;
