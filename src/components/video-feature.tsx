"use client";

import { useState } from "react";

type VideoFeatureProps = { videoId: string | null; title: string };

export default function VideoFeature({ videoId, title }: VideoFeatureProps) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="video-stage" data-reveal>
      {playing && videoId ? (
        <iframe className="video-iframe" src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`}
          title={title} loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      ) : (
        <>
          <div className="video-grain" aria-hidden="true" />
          <div className="video-lines" aria-hidden="true">
            {Array.from({ length: 41 }, (_, index) => <span key={index} style={{ left: `${index * 2.5}%`, animationDelay: `${-index * 0.07}s` }} />)}
          </div>
          <div className="video-circle video-circle-one" aria-hidden="true" />
          <div className="video-circle video-circle-two" aria-hidden="true" />
          <div className="video-cross" aria-hidden="true">+</div>
          {videoId ? (
            <button className="video-play" type="button" onClick={() => setPlaying(true)} aria-label={`${title} を再生`}>
              <span aria-hidden="true">▶</span>
            </button>
          ) : (
            <div className="video-unavailable" aria-label="Video not uploaded yet">
              <span className="video-play-symbol" aria-hidden="true">↗</span>
              <span>video / pending</span>
            </div>
          )}
          <span className="video-stamp video-stamp-left">nukt / moving image</span>
          <span className="video-stamp video-stamp-right">16:09</span>
        </>
      )}
    </div>
  );
}
