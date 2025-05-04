import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-xs mb-4">Sign up for updates from metà muse.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" className="bg-transparent border-white text-white" />
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4">CONTACT US</h3>
            <p className="text-xs mb-2">+44 221 133 5360</p>
            <p className="text-xs mb-4">customercare@metamuse.com</p>

            <h3 className="text-sm font-medium mb-2">CURRENCY</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs">$ USD</span>
            </div>

            <p className="text-xs text-gray-400">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">metà muse</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-xs">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-xs">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/artisans" className="text-xs">
                    Artisans
                  </Link>
                </li>
                <li>
                  <Link href="/boutiques" className="text-xs">
                    Boutiques
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-xs">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/eu-compliance" className="text-xs">
                    EU Compliance Docs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/orders" className="text-xs">
                    Orders & Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="text-xs">
                    Join/Login as a Seller
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-xs">
                    Payment & Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-xs">
                    Return & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-xs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-xs">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-xs">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-sm font-medium mb-2">FOLLOW US</h3>
              <div className="flex space-x-4">
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">metà muse ACCEPTS</h3>
              <div className="flex space-x-2">
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
                <div className="w-10 h-6 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-center">Copyright © 2023 metà muse. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
