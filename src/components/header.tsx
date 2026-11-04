"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "releases", href: "/#releases" },
  { label: "video", href: "/#video" },
  { label: "history", href: "/#history" },
  { label: "goods", href: "/goods" },
  { label: "links", href: "/#links" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="header-wordmark" href="/" onClick={() => setOpen(false)} aria-label="nukt home">
        nukt<span className="dot">.</span>
      </Link>
      <nav id="primary-nav" className={open ? "header-nav is-open" : "header-nav"} aria-label="Main navigation">
        {links.map(link => (
          <Link key={link.href} className={path === "/goods" && link.href === "/goods" ? "is-active" : undefined}
            href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
        ))}
      </nav>
      <div className="header-end"><span className="header-index">n / 001</span>
        <button className={open ? "menu-toggle is-open" : "menu-toggle"} type="button" aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="primary-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
