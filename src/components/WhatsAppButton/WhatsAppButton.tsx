"use client";

import styles from "./WhatsAppButton.module.css";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "905389694268",
  message = "Merhaba, kurbanlık hakkında bilgi almak istiyorum.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.whatsappFloat}>
      <div className={styles.whatsappTooltip}>
        💬 Size nasıl yardımcı olabiliriz?
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="WhatsApp ile iletişime geç"
      >
        💬
      </a>
    </div>
  );
}
