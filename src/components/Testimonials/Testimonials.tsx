"use client";

import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ['latin'] });

const testimonials: Testimonial[] = [
  {
    text: "Kurban ibadetimizi 3 yıldır burada ifa ediyoruz. Tesis temizliği, personelin güler yüzlü olması ve işlemlerin tamamen İslami hassasiyetlerle yürütülmesi bizi çok memnun etti. Randevu sistemiyle çalıştığımız için hiç beklemeden etlerimizi teslim alıyoruz.",
    name: "M. Yılmaz",
    location: "Kartal / İstanbul",
    initial: "M"
  },
  {
    text: "Geçen yıl kurbanımızı buradan aldık. Eti gayet lezzetli çıkmıştı. Parçalama ve paketleme konusunda inanılmaz profesyoneller. O güveni hissediyorsunuz. Herkese tavsiye ederim.",
    name: "A. Kaan",
    location: "Bağcılar / İstanbul",
    initial: "A"
  },
  {
    text: "7 kefeli terazi sistemi gerçekten devrim niteliğinde. Hissedarlar arasında 'kimin parçası daha büyük' tartışması bitti, herkesin hakkı milimetrik pay ediliyor.",
    name: "E. Sertel",
    location: "Ataşehir / İstanbul",
    initial: "E"
  },
  {
    text: "Tesis o kadar büyük ve ferah ki, bayram sabahı kahvaltımızı yaparken kurbanımızın kesilmesini beklemek çok keyifliydi. Çocuklar için oyun alanları bile düşünülmüş.",
    name: "Z. Aktaş",
    location: "Pendik / İstanbul",
    initial: "Z"
  },
  {
    text: "Kesimi bu kadar hijyenik ortamda yaptıkları için şükran doluyuz. Evde saatlerce et pay etme derdinden kurtulduk, paylarınıza ayrılmış, paketlenmiş halde direkt dolaba koymalık olarak geliyor.",
    name: "S. Aydın",
    location: "Kadıköy / İstanbul",
    initial: "S"
  },
  {
    text: "Sadece profesyonel bir kesimhane değil, aynı zamanda manevi havayı da hissettiğiniz bir yer. Kesim anında ismimizin zikredilmesi ve tekbirlerle sürecin yürütülmesi bizi çok duygulandırdı.",
    name: "B. Ersoy",
    location: "Ümraniye / İstanbul",
    initial: "B"
  },
  {
    text: "1. gün dağıtım hizmeti ile işimiz çok rahattı, kurbanımız sabah erken kesilip parçalanmış halde frigo araçlarla tertemiz geldi. Çok temiz iş çıkarılmış.",
    name: "K. Demir",
    location: "Maltepe / İstanbul",
    initial: "K"
  },
  {
    text: "Hisseye girerken tereddütlerim vardı ama hiç tanımadığım 6 kişiyle tamamen güvenli ve eşit paylaşımlı bir kurban nasip oldu. Teşekkürler Çınar.",
    name: "O. Şahin",
    location: "Beykoz / İstanbul",
    initial: "O"
  },
  {
    text: "Senelerdir mahalle kasabında çektiğimiz çileyi bize unutturdular. Özel 5. gün teslimatı evimize tam kıyma ve kuşbaşı paketleriyle kadar getirdi. Seneye tekrar görüşmek üzere.",
    name: "T. Aslan",
    location: "Silivri / İstanbul",
    initial: "T"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32 relative overflow-hidden" id="referanslarimiz">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[650px] mx-auto text-center"
        >
          <div className="inline-flex justify-center items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-600 font-extrabold text-[11px] uppercase tracking-widest mb-6">
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            Müşteri Deneyimleri
          </div>

          <h2 className={`${outfit.className} text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]`}>
            Sürekli <span className="text-orange-500">Büyüyen</span> Ailemiz
          </h2>
          <p className="mt-6 text-gray-500 text-[16px] sm:text-[1.15rem] leading-[1.6] font-medium max-w-lg mx-auto">
            İstanbul'un on binlerce ailesi kurban ibadeti için bizi tercih etti. Her yıl katlanarak büyüyen güven hikayemizi onlardan dinleyin.
          </p>
        </motion.div>

        {/* Mask gradient hides the sharp cut at top and bottom */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-16 sm:mt-24 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] sm:max-h-[800px] overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>
      </div>
    </section>
  );
}
