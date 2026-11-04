import Link from "next/link";
import { site } from "@/site-data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" href="/">nukt<span className="dot">.</span></Link>
      <div className="footer-index">© {site.year} nukt</div>
      <a href="mailto:nukt.mp3@gmail.com" className="footer-contact">contact ↗</a>
      <a href="#top" className="footer-top">↑ top</a>
    </footer>
  );
}
