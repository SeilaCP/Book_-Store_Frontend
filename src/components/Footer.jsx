

export default function Footer() {
  return (
    <footer className="border-t bg-background py-6 mt-8">
      <div className="container px-4 sm:px-6">
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
    </footer>
  )
}

