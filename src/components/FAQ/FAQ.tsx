"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Standart Hisse ile Özel Seçim Tosun Grubu farkı nedir?",
    answer: "Standart hisselerimiz İslami usullere uygun olarak seçilmiş kaliteli dana/düvelerden oluşurken, Özel Seçim Tosun Grubumuz daha yüksek et verimine sahip, özenle seçilmiş ve özel besiye çekilmiş tosunlardan oluşmaktadır.",
  },
  {
    id: 2,
    question: "Vekalet işlemleri nasıl yürütülüyor?",
    answer: "Vekaletiniz, kurban kesiminden önce dini kurallara uygun olarak görevli personelimiz veya hocamız tarafından alınmakta ve videoya çekilerek size ulaştırılmaktadır. Kasaplarımız tekbirlerle isminizi okuyarak kesimi gerçekleştirir.",
  },
  {
    id: 3,
    question: "Özel kasaplık hizmeti neleri kapsar?",
    answer: "Özel kasaplık hizmetimiz; etin, kıymanın, kuşbaşının profesyonel ekibimiz tarafından sizin istediğiniz ölçülerde kesilip, paketlenmesini ve hijyenik koşullarda teslim edilmesini kapsar.",
  },
  {
    id: 4,
    question: "Kesim işlemleri ne zaman gerçekleşiyor?",
    answer: "Kesim işlemlerimiz Kurban Bayramı'nın birinci günü sabah namazının ardından bayram namazı sonrasında sırayla başlar ve İslami kurallara uygun olarak zamanında tamamlanır.",
  },
  {
    id: 5,
    question: "Et işleme (Profesyonel Kasaplık) hizmeti nedir?",
    answer: "Kurbanınız kesildikten sonra, etlerinizin dinlendirilmesi, istenilen şekilde parçalara ayrılması (kuşbaşı, biftek, kıyma vb.) ve pay sahiplerine eşit şekilde bölünerek hijyenik paketlerde teslim edilmesi hizmetidir.",
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>YARDIM MERKEZİ</span>
          <h2 className={styles.title}>Kurban Hissesi Hakkında Sıkça Sorulan Sorular</h2>
          <p className={styles.description}>
            Hizmet anlayışımız ve tesis kurallarımız hakkında sıkça sorulan sorular.
          </p>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.accordionItem} ${isOpen ? styles.accordionItemActive : ""}`}
              >
                <button
                  className={styles.accordionButton}
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className={styles.icon}>
                    <ChevronDown />
                  </div>
                </button>
                {isOpen && (
                  <div className={styles.accordionContent}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.actionContainer}>
          <Link href="/sikca-sorulan-sorular" className="btn btn--outline btn--lg">
            Tüm Soruları İncele &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
