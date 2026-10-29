import Link from "next/link";
import {
  ArrowUpRight,
  Leaf,
  Truck,
  RotateCcw,
  ShieldCheck,
  Star,
} from "lucide-react";
import { products } from "@/lib/data";
import { CategoryTiles, ProductGrid, SectionHeading } from "@/components/Site";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="wrap hero-content">
          <div className="hero-copy">
            <span className="hero-pill">
              <Leaf size={14} /> THOUGHTFULLY PICKED, JUST FOR YOU
            </span>
            <h1>
              Good things.
              <br />
              <em>Better living.</em>
            </h1>
            <p>
              Discover everyday essentials with a little more heart. Thoughtful
              finds for you, your home, and the life you love.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="btn btn-lime">
                Shop the collection <ArrowUpRight size={17} />
              </Link>
              <Link href="/collections" className="hero-secondary">
                Explore our story <span>↗</span>
              </Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span>J</span>
                <span>M</span>
                <span>A</span>
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <small>Loved by 12,000+ happy customers</small>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-sun" />
            <div
              className="hero-image"
              role="img"
              aria-label="Sunlit natural home and lifestyle still life"
            >
              <span className="hero-product plant">🌿</span>
              <span className="hero-product vase">🏺</span>
              <span className="hero-product tote">👜</span>
              <span className="hero-sticker">
                GOOD
                <br />
                BY NATURE <Leaf size={18} />
              </span>
            </div>
            <div className="floating-note">
              <span>✳</span>
              <div>
                <b>Small choices.</b>
                <br />A brighter everyday.
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>MADE FOR REAL LIFE</span>
          <span>THOUGHTFULLY SOURCED</span>
          <span>GOOD THINGS, ALWAYS</span>
        </div>
      </section>
      <section className="trust-strip wrap">
        <div>
          <span>
            <Leaf />
          </span>
          <div>
            <b>Thoughtfully selected</b>
            <small>Quality you can feel good about</small>
          </div>
        </div>
        <div>
          <span>
            <Truck />
          </span>
          <div>
            <b>Free shipping over $75</b>
            <small>Good things come to you</small>
          </div>
        </div>
        <div>
          <span>
            <RotateCcw />
          </span>
          <div>
            <b>Easy 30-day returns</b>
            <small>Shopping without the stress</small>
          </div>
        </div>
        <div>
          <span>
            <ShieldCheck />
          </span>
          <div>
            <b>Secure checkout</b>
            <small>Your details stay protected</small>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          kicker="A GOOD PLACE TO START"
          title="Find your kind of good."
          link="Shop all categories"
          href="/collections"
        />
        <CategoryTiles />
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <SectionHeading
            kicker="THE CROWD FAVORITES"
            title="Good things, loved lots."
            link="Shop bestsellers"
          />
          <ProductGrid items={products.slice(0, 4)} />
        </div>
      </section>
      <section className="story-banner wrap">
        <div className="story-visual">
          <div className="story-shape shape-a" />
          <div className="story-shape shape-b" />
          <span>☀️</span>
          <small>THE ART OF EVERYDAY</small>
        </div>
        <div className="story-copy">
          <span className="eyebrow">LESS, BUT LOVELIER</span>
          <h2>
            Make room for
            <br />
            <em>the good stuff.</em>
          </h2>
          <p>
            We believe the things you bring into your life should earn their
            place there. That's why every find is chosen with care, made to be
            loved, and ready for real life.
          </p>
          <Link href="/collections" className="btn btn-dark">
            A little about us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          kicker="JUST LANDED"
          title="Fresh finds for right now."
          link="See what's new"
        />
        <ProductGrid items={products.slice(4, 8)} />
      </section>
      <section className="quote-section">
        <div className="wrap quote-inner">
          <span className="quote-mark">“</span>
          <div>
            <div className="stars">★★★★★</div>
            <h2>
              “It feels like shopping with a friend who just{" "}
              <em>gets your taste.</em>”
            </h2>
            <p>— Maya R. · Verified Forest Friend</p>
          </div>
          <div className="quote-stat">
            <b>
              4.9<span>/5</span>
            </b>
            <small>average customer rating</small>
            <div className="stat-stars">★★★★★</div>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <SectionHeading
          kicker="NOTES FROM THE GOOD LIFE"
          title="A little inspiration."
          link="Read the journal"
          href="/blog"
        />
        <div className="journal-grid">
          <Link href="/blog" className="journal-card">
            <div className="journal-art journal-art-one">
              <span>☕</span>
              <span>🌿</span>
            </div>
            <span className="eyebrow">SLOW LIVING · 5 MIN READ</span>
            <h3>The simple joy of a slower morning</h3>
            <p>
              Little rituals that make an ordinary day feel like something
              special.
            </p>
            <span className="text-link">Read the story ↗</span>
          </Link>
          <Link href="/blog" className="journal-card">
            <div className="journal-art journal-art-two">
              <span>🪴</span>
              <span>🪑</span>
            </div>
            <span className="eyebrow">AT HOME · 4 MIN READ</span>
            <h3>A home that feels a little more you</h3>
            <p>
              Thoughtful details, warm textures, and spaces that let you
              breathe.
            </p>
            <span className="text-link">Read the story ↗</span>
          </Link>
          <Link href="/blog" className="journal-card">
            <div className="journal-art journal-art-three">
              <span>👜</span>
              <span>🌼</span>
            </div>
            <span className="eyebrow">GOOD CHOICES · 6 MIN READ</span>
            <h3>Buy less, choose things you love</h3>
            <p>A friendly guide to finding your forever favorites.</p>
            <span className="text-link">Read the story ↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
