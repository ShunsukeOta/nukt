import Link from "next/link";
import {site} from "@/site-data";
export default function Footer(){
 return <footer className="site-footer">
  <Link className="footer-brand" href="/">nukt<span className="dot">.</span></Link>
  <span>© {site.year} nukt</span><a href={"mailto:"+site.email}>contact ↗</a><a href="#top">↑ top</a>
 </footer>;
}