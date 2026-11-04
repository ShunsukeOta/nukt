import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/site-data";

export const metadata: Metadata = { title: "goods", description: "nukt / objects / goods" };

export default function GoodsPage() {
  return (
    <main className="goods-page">
      <section className="goods-hero" aria-labelledby="goods-heading">
        <div className="goods-hero-grid" aria-hidden="true" />
        <div className="goods-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="goods-hero-top"><span>nukt / edition 001</span><span>objects / archive</span></div>
        <h1 className="goods-hero-title" id="goods-heading"><span>goods</span><span className="dot">.</span></h1>
        <div className="goods-hero-bottom"><span>01 / 03</span><span>concept collection</span></div>
      </section>

      <section className="goods-collection section-space" aria-labelledby="collection-title">
        <div className="section-head" data-reveal><span className="section-no">01 /</span><h2 id="collection-title">objects</h2><span className="section-end">edition / 001</span></div>
        <div className="goods-grid">
          {site.goods.map((item, i) => (
            <article className="goods-card" key={item.number} data-reveal style={{ transitionDelay: `${i * 85}ms` }}>
              <div className="goods-image"><Image src={item.image} alt={`${item.name} / concept illustration`} width={1000} height={1200}
                sizes="(max-width: 720px) 100vw, 50vw" /></div>
              <div className="goods-info"><span>{item.number}</span><div><h3>{item.name}</h3><small>{item.type}</small></div><span>{item.status}</span></div>
            </article>
          ))}
        </div>
        <div className="goods-note" data-reveal><span>＊</span><p>concept items / not available for purchase</p></div>
      </section>
      <section className="goods-outro"><Link href="/" aria-label="Back to nukt home"><span>←</span> index</Link><span>nukt / 2026</span></section>
    </main>
  );
}
