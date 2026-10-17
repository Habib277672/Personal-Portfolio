import { useState } from "react";
import { siteConfig, socialLinks } from "../data/portfolio-data";

const writeLinks = [
  { href: "https://Wa.me/+9203155564265", label: "WhatsApp" },
  { href: "https://m.me/pandacoders1", label: "Messenger" },
  {
    href: "https://www.instagram.com/panda_coders/reels/",
    label: "Instagram",
  },
  { href: "https://www.tiktok.com/@pandaxcoder", label: "TikTok" },
];

export function SectionContact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__data">
          <h2 className="section__title">Contact Me</h2>

          <p className="contact__description">Tell me about your next project.</p>

          <button
            type="button"
            className="contact__button button"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                Email Copied <i className="ri-check-line" />
              </>
            ) : (
              <>
                Copy Email <i className="ri-file-copy-line" />
              </>
            )}
            <span className="contact__email">{siteConfig.email}</span>
          </button>
        </div>

        <div className="contact__content grid">
          <div className="contact__info grid">
            <div>
              <h3 className="contact__title">Email</h3>
              <address className="contact__address">{siteConfig.email}</address>
            </div>

            <div>
              <h3 className="contact__title">Location</h3>
              <address className="contact__address">{siteConfig.location}</address>
            </div>
          </div>

          <div className="contact__social">
            <h3 className="contact__title">Social Media</h3>

            <div className="contact__links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link"
                >
                  {link.label}
                  <i className="ri-arrow-right-up-long-line" />
                </a>
              ))}
            </div>
          </div>

          <div className="contact__write">
            <h3 className="contact__title">Write Me & We&apos;ll Talk</h3>

            <div className="contact__links">
              {writeLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__link"
                >
                  {link.label}
                  <i className="ri-arrow-right-up-long-line" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
