import "./packagespage.css";
import culture1 from "../../assets/packages/culture_1.png";
import culture2 from "../../assets/packages/culture_2.png";
import culture3 from "../../assets/packages/culture_3.png";
import culture4 from "../../assets/packages/culture_4.png";
import culture5 from "../../assets/packages/culture_5.png";
import PlanCardsSection from "../../components/plancardssection/plancardssection.jsx";
import Subfooter from "../../components/subfooter/subfooter.jsx";
import { plans } from "../../data/tours";

const baseStripItems = [
  "Cultural Discovery",
  "Adventure & Nature",
  "Luxury & Wellness",
];

const stripItems = Array(8).fill(baseStripItems).flat();

function PackagesPage() {
  return (
    <div className="packages-page">
      <h2 className="top__header">Packages</h2>
      <section className="package_hero">
        <h3>
          Bhutan Journeys <br />
          The Kingdom's Soul
        </h3>
      </section>
      <section className="package_strip" aria-label="Package categories">
        <div className="package_strip__viewport">
          <div className="package_strip__track">
            <div className="package_strip__group">
              {stripItems.map((item, index) => (
                <span key={`${item}-${index}`} className="package_strip__item">
                  {item}
                </span>
              ))}
            </div>
            <div className="package_strip__group" aria-hidden="true">
              {stripItems.map((item, index) => (
                <span
                  key={`${item}-duplicate-${index}`}
                  className="package_strip__item"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="culture_discovery">
        <div className="culture_discovery__inner">
          <div className="culture_discovery__intro">
            <h2>CULTURE DISCOVERY</h2>
            <p>
              Step into the cultural heartbeat of Bhutan. Visit ancient dzongs
              that have stood for centuries, wander through villages where
              traditions remain untouched by time, and experience a way of life
              deeply rooted in heritage and spirituality.
            </p>
          </div>

          <div
            className="culture_discovery__gallery"
            aria-label="Culture images"
          >
            <img
              className="culture_discovery__image culture_discovery__image--1"
              src={culture1}
              alt="Traditional Bhutanese food spread"
              loading="lazy"
            />
            <img
              className="culture_discovery__image culture_discovery__image--2"
              src={culture2}
              alt="Bhutanese monastery beside a cliff"
              loading="lazy"
            />
            <img
              className="culture_discovery__image culture_discovery__image--3"
              src={culture3}
              alt="Prayer flags and sunlight in a forest"
              loading="lazy"
            />
            <img
              className="culture_discovery__image culture_discovery__image--4"
              src={culture4}
              alt="Traditional dancers in colorful costumes"
              loading="lazy"
            />
            <img
              className="culture_discovery__image culture_discovery__image--5"
              src={culture5}
              alt="Snow-covered mountain peaks"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="subtitle">
        <p>BHUTAN'S JOURNEYS</p>
        <h2>Explore the world of Bhutan</h2>
      </section>
      <PlanCardsSection plans={plans} />
      <section className="subfooter">
        <Subfooter />
      </section>
    </div>
  );
}

export default PackagesPage;
