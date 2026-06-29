import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">ZACK Foundation</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to youth empowerment, mental health support, and community development in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-300 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  No 23 Dozie Way, Off Ikot Ekpene Road,<br />
                  Umuahia, Abia State, Nigeria
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">
                  <a href="tel:+2348135614881" className="hover:text-white transition-colors">
                    +234 813 561 4881
                  </a>
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-300">
                  <a href="mailto:zackson2025foundation@gmail.com" className="hover:text-white transition-colors">
                    zackson2025foundation@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2025 ZACK Humanitarian Foundation for Youth Empowerment. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
