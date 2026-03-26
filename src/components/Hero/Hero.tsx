import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background decoration */}
      <div className={styles.heroBg}>
        <div className={`${styles.heroCircle} ${styles.heroCircle1}`} />
        <div className={`${styles.heroCircle} ${styles.heroCircle2}`} />
      </div>

      <div className={styles.heroInner}>
        {/* Left: Content */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            ✨ 15 Yıllık Tecrübe <span>• Ön Kayıtlar Başladı</span>
          </div>

          <h1 className={styles.heroTitle}>
            İstanbul Kurbanlık
            <span className={styles.heroTitleAccent}>Satış ve Kesim</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Rabbimizin emri olan kurban ibadetinizi, İslami usullere tam
            uygunluk ve hassas terazi ile tartım güvencesiyle gerçekleştiriyoruz.
          </p>

          <div className={styles.heroActions}>
            <Link href="/randevu-al" className="btn btn--accent btn--lg">
              Hemen Kayıt Ol
            </Link>
            <Link href="/hisse-fiyatlari" className="btn btn--outline btn--lg">
              Fiyatları İncele
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>15+</span>
              <span className={styles.heroStatLabel}>Yıllık Tecrübe</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>10.000+</span>
              <span className={styles.heroStatLabel}>Mutlu Müşteri</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>1. Gün</span>
              <span className={styles.heroStatLabel}>Teslimat Garantisi</span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
              alt="Kurbanlık hayvanlar"
              className={styles.heroImage}
            />
          </div>

          {/* Floating card: trust */}
          <div className={styles.heroFloatingCard}>
            <div className={styles.floatingIcon}>🕌</div>
            <div>
              <div className={styles.floatingLabel}>İbadet Hassasiyeti</div>
              <div className={styles.floatingValue}>%100 Uygun</div>
            </div>
          </div>

          {/* Floating badge */}
          <div className={styles.heroFloatingCard2}>
            <div className={styles.floatingBadgeText}>🚚 Frigolu Teslimat</div>
            <div className={styles.floatingBadgeSmall}>1. Gün Kapınızda</div>
          </div>
        </div>
      </div>
    </section>
  );
}
