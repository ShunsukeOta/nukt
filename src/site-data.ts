/**
 * nukt / content settings
 * Replace only the values in this file when real media, accounts, or history are available.
 * null deliberately keeps unknown social/video destinations non-clickable.
 */

export const site = {
  name: "nukt",
  email: "nukt.mp3@gmail.com",
  year: "2026",
  youtubeVideoId: null as string | null,
  youtubeTitle: "video 001",
  releases: [
    { number: "001", title: "untitled 01", year: "2026", cover: "/images/cover-01.svg" },
    { number: "002", title: "untitled 02", year: "2026", cover: "/images/cover-02.svg" },
    { number: "003", title: "untitled 03", year: "2026", cover: "/images/cover-03.svg" },
  ],
  /** Add only verified band events. The first entry records the site's project identity. */
  history: [
    { year: "2026", date: "11.02", title: "nukt", detail: "" },
  ],
  platforms: [
    { name: "X", label: "x / twitter", url: null as string | null, index: "01" },
    { name: "Instagram", label: "instagram", url: null as string | null, index: "02" },
    { name: "Spotify", label: "spotify", url: null as string | null, index: "03" },
    { name: "Apple Music", label: "apple music", url: null as string | null, index: "04" },
  ],
  goods: [
    { number: "001", name: "line / tee", type: "garment", image: "/images/goods-tee.svg", status: "concept" },
    { number: "002", name: "coordinate / print", type: "print", image: "/images/goods-print.svg", status: "concept" },
    { number: "003", name: "field / tote", type: "accessory", image: "/images/goods-tote.svg", status: "concept" },
  ],
};
