import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {site} from "@/site-data";
export const metadata:Metadata={title:"goods",description:"nukt / goods"};
export default function GoodsPage(){
 return <main className="goods-page">
  <section className="goods-hero"><span>nukt / objects</span><h1>goods<span className="dot">.</span></h1></section>
  <section className="section goods-collection" aria-labelledby="goods-heading">
  <div className="section-head" data-reveal><h2 id="goods-heading"><span className="section-no">01 /</span>objects</h2><span>concept collection</span></div>
  <div className="goods-grid">{site.goods.map(item=><article className="goods-card" key={item.number} data-reveal>
   <div className="goods-image"><Image src={item.image} alt={item.name+" / 商品コンセプト画像"} width={1000} height={1200}
    sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw"/></div>
   <div className="goods-info"><span>{item.number}</span><h3>{item.name}</h3><small>{item.status}</small></div>
  </article>)}</div>
  <p className="goods-note">concept items / not available for purchase</p>
  <Link className="back-link" href="/">← back to index</Link>
  </section>
 </main>;
}