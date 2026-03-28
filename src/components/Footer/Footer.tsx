import Link from "next/link";
import { Inter } from "next/font/google";

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
              satış, kesim ve teslimat hizmeti sunuyoruz. Her zaman güven, always hijyen.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://wa.me/902129099495"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
85:                 </svg>
86:               </a>
87:               <a
88:                 href="tel:+902129099495"
89:                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
90:                 aria-label="Telefon"
91:               >
92:                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
93:                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
94:                 </svg>
95:               </a>
96:               <a
97:                 href="https://instagram.com"
98:                 target="_blank"
99:                 rel="noopener noreferrer"
100:                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors"
101:                 aria-label="Instagram"
102:               >
103:                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
104:                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
105:                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
106:                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
107:                 </svg>
108:               </a>
109:             </div>
110:           </div>
111: 
112:           {/* Quick Links (2+ Cols) */}
113:           <div className="lg:col-span-2 lg:col-start-7">
114:             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Hızlı Linkler</h4>
115:             <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
116:               {quickLinks.map((link) => (
117:                 <li key={link.href}>
118:                   <Link href={link.href} className="hover:text-orange-400 transition-colors">{link.label}</Link>
119:                 </li>
120:               ))}
121:             </ul>
122:           </div>
123: 
124:           {/* Company (2 Cols) */}
125:           <div className="lg:col-span-2 lg:col-start-9">
126:             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Kurumsal</h4>
127:             <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
128:               {companyLinks.map((link) => (
129:                 <li key={link.href}>
130:                   <Link href={link.href} className="hover:text-orange-400 transition-colors">{link.label}</Link>
131:                 </li>
132:               ))}
133:             </ul>
134:           </div>
135: 
136:           {/* Contact (2 Cols) */}
137:           <div className="lg:col-span-2 lg:col-start-11">
138:             <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">İletişim</h4>
139:             <ul className={`${inter.className} text-gray-400 text-sm space-y-3`}>
140:               <li>
141:                 <a href="tel:+902129099495" className="hover:text-orange-400 transition-colors">0 212 909 94 95</a>
142:               </li>
143:               <li>
144:                 <a href="mailto:info@cinarkurban.com" className="hover:text-orange-400 transition-colors">
145:                   info@cinarkurban.com
146:                 </a>
147:               </li>
148:               <li>
149:                 <a
150:                   href="https://wa.me/902129099495"
151:                   target="_blank"
152:                   rel="noopener noreferrer"
153:                   className="hover:text-orange-400 transition-colors"
154:                 >
155:                   İstanbul, Türkiye
156:                 </a>
157:               </li>
158:             </ul>
159:           </div>
160: 
161:         </div>
162: 
163:         {/* Bottom Bar */}
164:         <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center">
165:           <p className={`${inter.className} text-gray-500 text-sm`}>
166:             © {currentYear} Çınar Kurban — Çınar İstanbul. Tüm hakları saklıdır.
167:           </p>
168:           <p className={`${inter.className} text-gray-600 text-xs mt-2 font-medium`}>
169:             <a href="https://morekod.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors underline decoration-gray-700 underline-offset-2">
170:               MoreKod
171:             </a> tarafından geliştirildi.
172:           </p>
173:         </div>
174:         
175:       </div>
176:     </footer>
177:   );
178: }
179: 
