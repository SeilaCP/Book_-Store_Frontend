import React from "react";

const Footer = () => {
  return (
    <>
    {/* <footer className="border-t bg-background py-6 mt-16">*/
        <div className="container px-4 sm:px-6 mt-50">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">BookToon</h3>
              <p className="text-sm text-muted-foreground">
                Your favorite online bookstore with a webtoon-inspired design.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/categories" className="text-muted-foreground hover:text-foreground">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/new-releases" className="text-muted-foreground hover:text-foreground">
                    New Releases
                  </a>
                </li>
                <li>
                  <a href="/bestsellers" className="text-muted-foreground hover:text-foreground">
                    Bestsellers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/login" className="text-muted-foreground hover:text-foreground">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="/register" className="text-muted-foreground hover:text-foreground">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/wishlist" className="text-muted-foreground hover:text-foreground">
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} BookToon. All rights reserved.
            </p>
          </div>
        </div>
      /*</footer> */}
    </>
  );
};

export default Footer;

// const LinkGroup = ({ children, header }) => {
//   return (
//     <>
//       <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
//         <div className="mb-10 w-full">
//           <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
//             {header}
//           </h4>
//           <ul className="space-y-3">{children}</ul>
//         </div>
//       </div>
//     </>
//   );
// };

// const NavLink = ({ link, label }) => {
//   return (
//     <li>
//       <a
//         href={link}
//         className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
//       >
//         {label}
//       </a>
//     </li>
//   );
// };
