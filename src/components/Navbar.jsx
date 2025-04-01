import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Adjust the duration to match your animation

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <nav
      className={`w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
        isAnimating ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <div className="mx-auto flex justify-between items-center px-5 py-4">
        <div
          onClick={() => navigate("/", { replace: true })}
          className="text-2xl text-[#ff7b42] font-bold uppercase tracking-wider cursor-pointer"
        >
          Coppbook
        </div>

        <ul className="flex justify-center items-center gap-5 space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium no-underline transition duration-300 ease-in-out hover:text-orange-500 hover:scale-110 ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                `text-lg font-medium no-underline transition duration-300 ease-in-out hover:text-orange-500 hover:scale-110 ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-lg font-medium no-underline transition duration-300 ease-in-out hover:text-orange-500 hover:scale-110 ${
                  isActive ? "text-orange-500" : "text-gray-700"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `text-sm font-medium no-underline transition duration-300 ease-in-out hover:text-orange-500 hover:scale-110 ${
              isActive ? "text-orange-500" : "text-gray-700"
            }`
          }
        >
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
