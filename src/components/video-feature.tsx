"use client";
import {useState} from "react";
export default function VideoFeature({videoId,title}:{videoId:string|null;title:string}){
 const [playing,setPlaying]=useState(false);
 return <div className="video-stage" data-reveal>
 {playing&&videoId?
 <iframe className="video-iframe" src={"https://www.youtube-nocookie.com/embed/"+encodeURIComponent(videoId)+"?autoplay=1"} title={title} loading="lazy"
 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>:
 <div className="video-placeholder"><span className="video-placeholder-mark" aria-hidden="true">○</span>
 {videoId?<button className="video-play" type="button" onClick={()=>setPlaying(true)} aria-label={title+" を再生"}>play ↗</button>:
 <span className="video-pending">video / coming soon</span>}</div>}
 </div>;
}