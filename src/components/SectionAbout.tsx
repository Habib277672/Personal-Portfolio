import { siteConfig } from "../data/portfolio-data";
import { assetUrl } from "../lib/asset-url";

export function SectionAbout() {
  const resumeHref = assetUrl(siteConfig.resumePath);

  return (
    <section className="about section" id="about">
      <div className="about__shadow" />

      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            <span>Creativity</span>
            <br />
            Is My Passion
          </h2>
          <p className="about__description">
            I&apos;m a <b>MERN Stack Developer</b> passionate about experimenting
            with new <b> skills and creativity.</b>
            Driven by learning and curiosity, I&apos;m always looking to explore
            and learn new development skills.
          </p>

          <a
            href={resumeHref}
            download
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Resume <i className="ri-file-list-2-line" />
          </a>
        </div>

        <div className="about__image">
          <div className="blob-animate" />
          <div className="blob-animate" />
          <img
            src={assetUrl("assets/img/home-perfil1.png")}
            alt="Profile Picture"
            className="about__profile"
          />
        </div>
      </div>
    </section>
  );
}
