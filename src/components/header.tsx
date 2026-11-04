"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
const nav=[["releases","/#releases"],["video","/#video"],["history","/#history"],["links","/#links"],["goods","/goods"]];
export default function Header(){
 const [open,setOpen]=useState(false);
 const pathname=usePathname();
 useEffect(()=>setOpen(false),[pathname]);
 return <header className="site-header">
  <Link className="header-wordmark" href="/" aria-label="nukt home" onClick={()=>setOpen(false)}>nukt<span className="dot">.</span></Link>
  <nav id="primary-nav" className={open?"header-nav is-open":"header-nav"} aria-label="Main navigation">
  {nav.map(([label,href])=><Link href={href} key={href} onClick={()=>setOpen(false)} className={pathname==="/goods" && href==="/goods"?"is-active":undefined}>{label}</Link>)}
  </nav>
  <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(v=>!v)}>{open?"close −":"menu +"}</button>
 </header>;
}