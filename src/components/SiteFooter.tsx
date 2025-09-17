import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const services = [
  { key: "home.services.0", href: "/network-security" },
  { key: "home.services.1", href: "/cloud-backup" },
  { key: "home.services.2", href: "/it-infrastructure" },
  { key: "home.services.3", href: "/endpoint-protection" },
  { key: "home.services.4", href: "/security-awareness" },
  { key: "home.services.5", href: "/vulnerability-assessment" },
];

const quickLinks = [
  { key: "home.navbar.Home", href: "/home1" },
  { key: "home.navbar.About_Us", href: "/about-us" },
  { key: "home.navbar.Blog", href: "/blog" },
  { key: "home.navbar.Contact_Us", href: "/contact-us" },
];

const SiteFooter = () => {
  const { t } = useTranslation();
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
          <p className="text-sm leading-relaxed mb-4">{t("footer.about")}</p>
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
          <h3 className="font-bold text-base mb-3">
            {t("footer.quick_links")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-base mb-3">{t("footer.services")}</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.key}>
                <Link
                  href={service.href}
                  className="hover:text-blue-600 transition"
                >
                  {t(service.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-base mb-3">{t("footer.contact_us")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> {t("footer.email")}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> {t("footer.phone")}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> {t("footer.address")}
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Stackly. {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default SiteFooter;
