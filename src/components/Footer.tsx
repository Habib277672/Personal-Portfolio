import { siteConfig } from "../data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer grid">
      <div className="blob-animate" />

      <div className="footer__copy">
        All Rights Reserved By <span>{siteConfig.brand}</span>
      </div>

      <div className="footer__year">
        &#169; <span id="footer-year">{currentYear}</span>
      </div>
    </footer>
  );
}
