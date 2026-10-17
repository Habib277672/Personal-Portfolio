import { testimonials } from "../data/portfolio-data";
import { assetUrl } from "../lib/asset-url";

function TestimonialCard({
  name,
  image,
  text,
}: {
  name: string;
  image: string;
  text: string;
}) {
  return (
    <article className="testimonials__card">
      <div className="blob" />

      <div className="testimonials__data">
        <img
          src={assetUrl(image)}
          alt={name}
          className="testimonials__img"
        />

        <h2 className="testimonials__name">{name}</h2>

        <div className="testimonial__rating">
          <div className="testimonial__stars">
            <i className="ri-star-line" />
            <i className="ri-star-line" />
            <i className="ri-star-line" />
            <i className="ri-star-line" />
            <i className="ri-star-line" />
          </div>

          <h3 className="testimonials__number">5.0</h3>
        </div>

        <p>{text}</p>
      </div>
    </article>
  );
}

function TestimonialTrack({ reverse }: { reverse?: boolean }) {
  const cards = [...testimonials, ...testimonials];

  return (
    <div
      className={`testimonial__content ${reverse ? "testimonials__reverse" : ""}`.trim()}
    >
      {cards.map((item, index) => (
        <TestimonialCard
          key={`${item.name}-${index}`}
          name={item.name}
          image={item.image}
          text={item.text}
        />
      ))}
    </div>
  );
}

export function SectionTestimonials() {
  return (
    <section className="testimonials section">
      <h2 className="section__title">
        <span>What They Say</span>
        <br />
        About Me
      </h2>

      <div className="testimonials__container container grid">
        <TestimonialTrack />
        <TestimonialTrack reverse />
      </div>
    </section>
  );
}
