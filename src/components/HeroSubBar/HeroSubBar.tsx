"use client";

import styles from "./HeroSubBar.module.css";

export default function HeroSubBar() {
  return (
    <div className={styles.heroSubBar}>
      <span className={styles.dot}></span>
      <span>
        Erken kayıt avantajlarıyla <span className={styles.textHighlight}>14.000 ₺'ye kadar indirim</span> kazanmak için <span className={styles.textHighlight}>acele edin!</span> Son tarih 5 Nisan!
      </span>
      <span className={styles.dot}></span>
    </div>
  );
}
