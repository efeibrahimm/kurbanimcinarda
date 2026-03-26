"use client";

import styles from "./AnnouncementBar.module.css";

const announcements = [
  { icon: "🎉", text: "2026 Erken Kayıt Fırsatı", highlight: "1.000 ₺ İndirim" },
  { icon: "📞", text: "Hemen Ara:", highlight: "+90 538 969 42 68" },
  { icon: "🚚", text: "1. Gün Frigolu Araçla Teslimat" },
  { icon: "✅", text: "15 Yıllık Tecrübe" },
  { icon: "🥩", text: "Özel Kasaplık İşlemi", highlight: "Kuşbaşı & Kıyma" },
];

export default function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.marqueeTrack}>
        {[0, 1].map((setIndex) => (
          <div className={styles.marqueeContent} key={setIndex}>
            {announcements.map((item, i) => (
              <span key={i}>
                <span className={styles.marqueeItem}>
                  {item.icon}{" "}
                  {item.text}
                  {item.highlight && <span>{item.highlight}</span>}
                </span>
              </span>
            ))}
            <span className={styles.divider} />
          </div>
        ))}
      </div>
    </div>
  );
}
