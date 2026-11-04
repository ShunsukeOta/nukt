import Image from "next/image";
import Link from "next/link";
import CoordinateField from "@/components/coordinate-field";
import VideoFeature from "@/components/video-feature";
import {site} from "@/site-data";
function SectionHead({number,title,extra}:{number:string;title:string;extra?:string}){
 return <div className="section-head" data-reveal><h2><span className="section-no">{number} /</span>{title}</h2>{extra&&<span>{extra}</span>}</div>;
}
export default function Home(){
 return <main>
 <section className="hero" aria-label="nukt"><CoordinateField/><span className="hero-index">n / 001</span>
  <h1 className="hero-logo" aria-label="nukt">{["n","u","k","t"].map((letter,i)=><span key={i}>{letter}</span>)}<span className="dot">.</span></h1>
  <a className="hero-scroll" href="#releases">scroll ↓</a>
 </section>
 <section className="section releases" id="releases" aria-labelledby="releases-heading">
  <div id="releases-heading"><SectionHead number="01" title="releases" extra="01 — 03"/></div>
  <div className="release-grid">{site.releases.map(item=><article className="release" key={item.number} data-reveal>
   <div className="cover-wrap"><Image src={item.cover} alt={item.title+" / 仮ジャケット"} width={1000} height={1000} sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw"/></div>
   <div className="release-meta"><span>{item.number}</span><h3>{item.title}</h3><span>{item.year}</span></div>
  </article>)}</div>
 </section>
 <section className="section video-section" id="video" aria-labelledby="video-heading">
  <div id="video-heading"><SectionHead number="02" title="video"/></div>
  <div className="video-content"><VideoFeature videoId={site.youtubeVideoId} title={site.youtubeTitle}/>
  <div className="video-caption"><span>{site.youtubeTitle}</span><span>{site.youtubeVideoId?"youtube ↗":"not published"}</span></div></div>
 </section>
 <section className="section history-section" id="history" aria-labelledby="history-heading">
  <div id="history-heading"><SectionHead number="03" title="history"/></div>
  <div className="history-list">{site.history.map((event,i)=><div className="history-entry" key={event.year+"-"+event.date+"-"+i} data-reveal>
   <span>{event.year}</span><span className="history-date">{event.date}</span>
   <div><h3>{event.title}</h3>{event.detail&&<p>{event.detail}</p>}</div></div>)}</div>
 </section>
 <section className="section links-section" id="links" aria-labelledby="links-heading">
  <div id="links-heading"><SectionHead number="04" title="links"/></div>
  <div className="platform-grid">{site.platforms.map(p=><div className="platform-item" key={p.index} data-reveal>
   {p.url?<a href={p.url} target="_blank" rel="noopener noreferrer"><span>{p.name}</span><span aria-hidden="true">↗</span></a>:
   <div className="platform-unlinked" aria-label={p.name+" は準備中"}><span>{p.name}</span><small>coming soon</small></div>}</div>)}</div>
 </section>
 <section className="goods-teaser" aria-label="goods"><Link href="/goods"><span>goods<span className="dot">.</span></span><span aria-hidden="true">↗</span></Link></section>
 </main>;
}