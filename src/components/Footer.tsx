import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">
              Miranda's Travel Adventures
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#books" className="hover:text-primary transition-colors">Books</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a
              href="https://www.facebook.com/profile.php?id=61553619797126&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors">

              Facebook
            </a>
            <a
              href="https://www.amazon.com/s?k=Miranda%27s+Travel+Adventures+Janeth+Bell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors">

              Amazon
            </a>
          </nav>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70 flex items-center justify-center gap-1">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Janeth Bell</span>
          </p>
          <p className="text-xs text-background/50 mt-2">
            <span>© {new Date().getFullYear()} Miranda&apos;s Travel Adventures. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>);
};

export default Footer;