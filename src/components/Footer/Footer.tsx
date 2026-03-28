import Link from "next/link";
import { Inter } from "next/font/google";
import { MessageCircle, Phone, Instagram } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hisse Fiyatları", href: "/hisse-fiyatlari" },
  { label: "Randevu Al", href: "/randevu-al" },
  { label: "Özel İşlem", href: "/ozel-islem" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1a12] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Social (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <Link href="/" className="inline-block">
              <img
                src="/logo_white.png"
                alt="Çınar Kurban"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className={`${inter.className} text-gray-400 text-[15px] leading-relaxed max-w-sm`}>
              16 yıllık tecrübe ile İstanbul'da İslami usullere uygun kurbanlık
              satış, kesim ve teslimat hizmeti sunuyoruz. Her zaman güven, daima hijyen.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://wa.me/902129099495"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+902129099495"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
                aria-label="Telefon"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (2+ Cols) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Hızlı Linkler</h4>
            <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company (2 Cols) */}
          <div className="lg:col-span-2 lg:col-start-9">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kurumsal</h4>
            <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (2 Cols) */}
          <div className="lg:col-span-2 lg:col-start-11">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">İletişim</h4>
            <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
              <li>
                <a href="tel:+902129099495" className="hover:text-orange-400 transition-colors">0 212 909 94 95</a>
              </li>
              <li>
                <a href="mailto:info@cinarkurban.com" className="hover:text-orange-400 transition-colors">
                  info@cinarkurban.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/902129099495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  İstanbul, Türkiye
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center">
          <p className={`${inter.className} text-gray-500 text-sm`}>
            © {currentYear} Çınar Kurban — Çınar İstanbul. Tüm hakları saklıdır.
          </p>
          <p className={`${inter.className} text-gray-600 text-xs mt-2 font-medium`}>
            <a href="https://morekod.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors underline decoration-gray-700 underline-offset-2">
              MoreKod
            </a> tarafından geliştirildi.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
