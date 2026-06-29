"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              Z
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">
              ZACK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/mission"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link
              href="/contact#donate"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors font-medium"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/mission"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-foreground hover:bg-muted rounded transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact#donate"
              className="block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
