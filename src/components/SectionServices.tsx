import { useState } from "react";
import { services } from "../data/portfolio-data";

export function SectionServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleCard(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="services section">
      <h2 className="section__title">
        What I <span>Offer</span>
      </h2>

      <div className="services__container container grid">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={service.title}
              className={`services__card ${isOpen ? "services__open" : "services__close"}`}
            >
              <div className={`blob ${service.blobClass ?? ""}`.trim()} />

              <div className="services__data">
                <h2 className="services__title">{service.title}</h2>
                <p className="services__description">{service.description}</p>
              </div>

              <div
                className="services__info"
                style={isOpen ? { height: "auto", opacity: 1 } : undefined}
              >
                <h3 className="services__subtitle">{service.subtitle}</h3>

                <ul className="services__skills">
                  {service.skills.map((skill) => (
                    <li key={skill} className="services__skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="services__button"
                onClick={() => toggleCard(index)}
                aria-expanded={isOpen}
              >
                <i className="ri-arrow-down-s-line" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
