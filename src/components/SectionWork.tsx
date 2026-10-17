import { useState } from "react";
import {
  educationItems,
  experienceItems,
  type WorkItem,
} from "../data/portfolio-data";

type WorkTab = "experience" | "education";

function WorkCard({ item }: { item: WorkItem }) {
  const titleLines = item.title.split("\n");
  const yearLines = item.year.split("\n");

  return (
    <div className="work__card">
      <div className="work__data">
        <div>
          <h1 className="work__title">
            {titleLines.length > 1 ? (
              <>
                {titleLines[0]} <br />
                {titleLines[1]}
              </>
            ) : (
              item.title
            )}
          </h1>
          <h3 className="work__subtitle">{item.subtitle}</h3>
        </div>
        <h2 className="work__year">
          {yearLines.length > 1 ? (
            <>
              {yearLines[0]}
              <br />
              {yearLines[1]}
            </>
          ) : (
            item.year
          )}
        </h2>
      </div>

      <p className="work__description">{item.description}</p>
    </div>
  );
}

export function SectionWork() {
  const [activeTab, setActiveTab] = useState<WorkTab>("experience");
  const items =
    activeTab === "experience" ? experienceItems : educationItems;

  return (
    <section className="work section">
      <h2 className="section__title">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <div className="work__container container grid">
        <div className="work__tabs">
          <button
            type="button"
            className={`work__button ${activeTab === "experience" ? "work-active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            Experience <i className="ri-briefcase-3-line" />
          </button>

          <button
            type="button"
            className={`work__button ${activeTab === "education" ? "work-active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            Education <i className="ri-graduation-cap-line" />
          </button>
        </div>

        <div className="work__area">
          <div className="work__line" />

          <div
            className="work__content work-active"
            data-content
            id={activeTab}
          >
            {items.map((item) => (
              <WorkCard key={`${item.title}-${item.subtitle}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
