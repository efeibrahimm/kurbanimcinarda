"use client";

import React from "react";
import { motion } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { 
  Leaf, 
  ShieldCheck, 
  MapPin, 
  History, 
  Medal, 
  CheckCircle2,
  Phone
} from "lucide-react";

import ServicesBlocks from "@/components/ServicesBlocks/ServicesBlocks";

const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      
      {/* ── 1. REAL PHOTOGRAPHY HERO (Doğal Çiftlik/Gündoğumu) ── */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Real life farm/cattle photo from AI Generator guarantees Islamic safety */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105"
          style={{ backgroundImage: "url('/banner_image/ofis.jpeg')" }} 
        >
          {/* Deep dark fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mt-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-flex justify-center items-center gap-2 px-5 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 font-extrabold text-[12px] uppercase tracking-widest mb-6 backdrop-blur-md"
           >
             <History size={16} />
             Kurumsal Vizyon
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className={`${outfit.className} text-[3rem] sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-xl`}
           >
             Güven, Hijyen ve <br className="hidden md:block"/> 
             <span className="text-orange-500">16 Yıllık</span> Tecrübe
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.2rem] leading-relaxed max-w-2xl mx-auto font-medium`}>
             Anadolu'nun bereketli meralarından özenle seçilen yerli besi kurbanlıklar, 16 yılı aşkın profesyonel tesis deneyimiyle hisse sahiplerine sunuluyor.
           </motion.p>
        </div>
      </section>

      {/* ── 2. HİKAYEMİZ & MİSYON (Modern Editorial Split with Overlap) ── */}
      <section className="relative z-20 -mt-16 sm:-mt-24 w-full">
        <div className="bg-white rounded-[2rem] sm:rounded-t-[3rem] shadow-2xl shadow-gray-200/50 pt-20 pb-16 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-t-white relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Sol: Metin/Hikaye */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div>
                <h2 className={`${outfit.className} text-[2.5rem] sm:text-[3rem] font-extrabold text-gray-900 leading-tight mb-6`}>
                  Kurban Sadece Bir Ticaret Değil; <br/>
                  <span className="text-orange-500">Dini Bir Emanettir.</span>
                </h2>
                <div className={`${inter.className} text-gray-600 text-[16px] sm:text-[1.1rem] leading-[1.8] flex flex-col gap-5`}>
                  <p>
                    Anadolu'nun bereketli meralarından özenle seçilen yerli besi danalarımızı, İslami usullere tam riayet ederek, 16 yılı aşkın profesyonel tesis deneyimiyle hissedarlarımıza sunuyoruz. Bizim için kurban süreci, hassas ve vebal taşıyan ulvi bir ibadettir.
                  </p>
                  <p>
                    Bağcılar'da bulunan modern tesisimizde, tüm kurbanlıklarımız veteriner hekim gözetiminden geçirilir, sağlık ve hijyen standartlarına %100 uyarak İslami hassasiyetle kesilir.
                  </p>
                </div>
              </div>

               <div className="p-6 sm:p-8 bg-gray-50 border border-gray-100 rounded-3xl mt-4">
                 <h4 className={`${outfit.className} text-xl font-bold text-gray-900 mb-3 flex items-center gap-2`}>
                   <Medal className="text-orange-500" size={24} /> Bizim Misyonumuz
                 </h4>
                 <p className={`${inter.className} text-sm sm:text-[15px] text-gray-500 leading-relaxed font-medium`}>
                   Hissedarlarımızın ibadetini en başından sonuna kadar şeffaf, huzurlu ve usullere uygun şartlarda gerçekleştirmesini sağlamak. <strong>"Güven, Hijyen ve İslami Hassasiyet"</strong> ilkelerinden taviz vermeden hizmet ağımızı tüm İstanbul'a ulaştırmaktır.
                 </p>
               </div>
            </motion.div>

            {/* Sağ: İmaj / Değerler Bento Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              {/* Real professional close up photo of safe islamic cattle (Ram) */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: "url('/banner_image/islamic_ram.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a12]/90 via-black/20 to-transparent z-10" />
              
              <div className="absolute inset-0 z-20 p-8 sm:p-12 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className={`${outfit.className} text-xl font-bold text-white`}>Tam Akreditasyon</h4>
                      <p className="text-white/70 text-sm font-medium">Veteriner Sağlık Sertifikalı</p>
                    </div>
                  </div>
                  <p className={`${inter.className} text-white/80 text-sm leading-relaxed`}>
                     Sürüye katılan her hayvanın menşei, aşı takvimi ve sağlık dökümleri Tarım Bakanlığı regülasyonlarına göre şeffafça dosyalara islenir.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. STATISTICS / TRUST INDICATORS ── */}
      <section className="py-20 bg-[#0c1a12]">
         <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10 text-center">
              
              {[
                { count: "16+", label: "Yıllık Tecrübe" },
                { count: "10K+", label: "Mutlu Hissedar" },
                { count: "%100", label: "İslami Kesim" },
                { count: "7/24", label: "Güvenlik & Açık Tesis" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                   <h3 className={`${outfit.className} text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2`}>{stat.count}</h3>
                   <span className={`${inter.className} text-gray-400 font-medium uppercase tracking-widest text-[11px] sm:text-xs`}>{stat.label}</span>
                </div>
              ))}

            </div>
         </div>
      </section>

      {/* ── 4. ESKİ SERVICES BİLEŞENİ (Optional) ── */}
      {/* Sitenin varolan bileşenini buraya monte ettik ki eksik bir veri hissi yaşanmasın */}
      <section className="py-10 bg-gray-50">
        <ServicesBlocks />
      </section>

      {/* ── 5. İLETİŞİM / CTA BANNER WITH IMAGE ── */}
      <section className="py-24 bg-white px-4 w-full">
        <div className="container max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#0c1a12] rounded-[3rem] p-10 sm:p-20 text-center shadow-2xl relative overflow-hidden h-[500px] flex flex-col justify-center items-center"
          >
             <div className="absolute inset-0 bg-cover bg-center z-0 opacity-40 hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('/banner_image/islamic_bull.png')" }} />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0c1a12]/90 via-black/70 to-[#0c1a12]/90 z-0 pointer-events-none" />
             
             <h2 className={`${outfit.className} text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-white leading-tight mb-6 relative z-10 max-w-3xl mx-auto`}>
               Vekaletinizi Gönül Rahatlığıyla Bize Emanet Edebilirsiniz.
             </h2>
             <p className={`${inter.className} text-gray-300 text-[16px] sm:text-[1.15rem] leading-relaxed max-w-2xl mx-auto mb-10 relative z-10 drop-shadow-md`}>
               İster Bağcılar'daki tesisimizi ziyaret edip kahvemizi için, isterseniz de Whatsapp üzerinden uzman ekibimizle saniyeler içinde hissenizi ayırtın.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
               <Link href="https://wa.me/902129099495" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-transform active:scale-95 shadow-xl shadow-orange-500/30 flex justify-center items-center gap-2 backdrop-blur-md">
                 <CheckCircle2 size={20} /> Whatsapp'tan Ulaşın
               </Link>
               <Link href="/iletisim" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold transition-all flex justify-center items-center gap-2 backdrop-blur-md">
                 <MapPin size={20} className="text-orange-500" /> Tesisimizi Ziyaret Edin
               </Link>
             </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
