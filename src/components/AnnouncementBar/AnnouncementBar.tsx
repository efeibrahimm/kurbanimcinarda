"use client";

import styles from "./AnnouncementBar.module.css";
import { CreditCard, Zap, ShieldCheck } from "lucide-react";

const announcements = [
  { icon: <CreditCard size={16} />, text: "Kredi Kartına 12 Aya Varan Taksit İmkanı!" },
  { icon: <Zap size={16} />, text: "Erken Kayıt Fırsatları Hızla Doluyor!" },
  { icon: <ShieldCheck size={16} />, text: "10 Yıllık Güven ve %100 Yerli Besi Garantisi" }
];

export default function AnnouncementBar() {
  return (
    <div className={styles.announcementBar}>
      <div className={styles.marqueeTrack}>
        {[0, 1, 2, 3].map((setIndex) => (
          <div className={styles.marqueeContent} key={setIndex}>
            {announcements.map((item, i) => (
              <span key={i} className={styles.marqueeItemWrapper}>
                <span className={styles.marqueeItem}>
                  <span className={styles.iconWrap}>{item.icon}</span>
                  {item.text}
                </span>
                <span className={styles.divider} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
