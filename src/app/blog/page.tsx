import styles from "./page.module.css";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";
import { MoveRight, User, ArrowUpRight } from "lucide-react";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <main className={styles.pageContainer}>
      <div className="container">
        
        <header className={styles.header}>
          <h1 className={styles.title}>Blog & Rehber</h1>
          <p className={styles.description}>
            Modern kurban hizmetleri, et işleme sanatı ve İstanbul'un 
            en köklü kesim organizasyonu hakkında derinlemesine içerikler.
          </p>
        </header>

        {/* Featured Post Hero */}
        <section className={styles.featuredSection}>
          <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <img src={featuredPost.image} alt={featuredPost.title} className={styles.featuredImage} />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.featuredTag}>Editörün Seçimi</span>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.readMore} style={{ fontSize: 'var(--text-base)', color: 'var(--color-primary)' }}>
                Yazıyı İncele <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </section>

        <section className={styles.blogGrid}>
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} />
                <span className={styles.categoryTag}>{post.category}</span>
              </div>
              
              <div className={styles.cardBody}>
                <span className={styles.blogDate}>{post.date}</span>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.author}>
                    {post.author}
                  </div>
                  <div className={styles.readMore}>
                    Devamını Oku <MoveRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
