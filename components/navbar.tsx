"use client"

import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { user, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl">
              LOGO
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium">
              SHOP
            </Link>
            <Link href="/skills" className="text-sm font-medium">
              SKILLS
            </Link>
            <Link href="/stories" className="text-sm font-medium">
              STORIES
            </Link>
            <Link href="/about" className="text-sm font-medium">
              ABOUT
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              CONTACT US
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button>
              <Search className="h-5 w-5" />
            </button>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <User className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders" className="w-full">
                      Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <User className="h-5 w-5" />
              </Link>
            )}

            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-xs font-medium">ENG</button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
              SHOP
            </Link>
            <Link
              href="/skills"
              className="block px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              SKILLS
            </Link>
            <Link
              href="/stories"
              className="block px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              STORIES
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
