import { siteConfig } from "../data/portfolio-data";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="header" id="header">
      <div className="blob-animate" />
      <nav className="nav container">
        <a href="#" className="nav__logo">
          {siteConfig.brand}
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
