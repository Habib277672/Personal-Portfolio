import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { projects } from "../data/portfolio-data";
import { assetUrl } from "../lib/asset-url";

import "swiper/css";
import "swiper/css/pagination";

function ProjectTitle({ title }: { title: string }) {
  const lines = title.split("\n");

  if (lines.length === 1) {
    return <h1 className="projects__title">{title}</h1>;
  }

  return (
    <h1 className="projects__title">
      {lines[0]} <br />
      {lines[1]}
    </h1>
  );
}

export function SectionProjects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">
        I make Incredible <br />
        <span>Projects</span>
      </h2>

      <div className="projects__container container grid">
        <Swiper
          className="projects__swiper swiper"
          modules={[Pagination, Autoplay]}
          loop
          spaceBetween={24}
          slidesPerView="auto"
          grabCursor
          speed={600}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.number} className="projects__card">
              <div className="blob" />

              <div className="projects__number">
                <h1>{project.number}</h1>
                <h3>Web</h3>
              </div>

              <div className="projects__data">
                <ProjectTitle title={project.title} />
                <p className="projects__subtitle">Techstack used</p>
                <p className="projects__description">{project.stack}</p>
              </div>

              <div className="projects__image">
                <img
                  src={assetUrl(project.image)}
                  alt="Project"
                  className="projects__img"
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="projects__button"
                >
                  <i className="ri-arrow-right-up-long-line" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
