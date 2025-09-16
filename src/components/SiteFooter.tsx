import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Network Security' },
  { name: 'Cloud Backup and Recovery' },
  { name: 'IT Infrastructure' },
  { name: 'Endpoint Protection' },
  { name: 'Security Awareness Training' },
  { name: 'Vulnerability Assessment' },
];

const quickLinks = [
  { name: 'Home', href: '/home1' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact-us' },
];

const SiteFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white border-t border-blue-100 dark:border-gray-800 pt-10 pb-4 px-4">
      <div className=" max-w-screen   mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logo-stackly.png"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Empowering businesses with secure, scalable IT and cloud solutions.
            Your trusted partner in cybersecurity and digital transformation.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-base mb-3">Services</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={`/${service.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-base mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@enkonixit.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 234 567 890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 Cyber St, Cloud City
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Stackly. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
