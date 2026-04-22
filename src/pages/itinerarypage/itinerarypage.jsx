import { Link, useParams } from "react-router-dom";
import { getPlanBySlug, getPlanImageSrc } from "../../data/tours";
import "./itinerarypage.css";
import Subfooter from "../../components/subfooter/subfooter.jsx";

function ItineraryPage() {
  const { slug } = useParams();
  const plan = getPlanBySlug(slug || "");

  if (!plan) {
    return (
      <div className="itinerary-page itinerary-page--missing">
        <h1>Plan not found</h1>
        <Link className="itinerary-page__back" to="/packages">
          Back to packages
        </Link>
      </div>
    );
  }

  const heroImage = getPlanImageSrc(plan);
  const galleryImages = plan.galleryImages.length
    ? plan.galleryImages
    : [heroImage];
  const closingImage =
    galleryImages[galleryImages.length - 1] ?? galleryImages[0];
  const title = `${plan.title} Experience`;

  return (
    <div className="itinerary-page">
      <header className="itinerary-page__hero">
        <div className="itinerary-page__hero-inner">
          <h1>{title}</h1>
        </div>

        <img
          className="itinerary-page__hero-image"
          src={heroImage}
          alt={plan.title}
          loading="eager"
          fetchPriority="high"
        />
      </header>

      <section
        className="itinerary-page__closing"
        aria-label={`${plan.title} overview`}
      >
        <div className="itinerary-page__closing-inner">
          <figure className="itinerary-page__closing-figure">
            <img
              src={closingImage}
              alt={`${plan.title} landscape`}
              loading="lazy"
            />
          </figure>

          <div className="itinerary-page__closing-copy">
            <p>{plan.shortDesc}</p>
          </div>
        </div>
      </section>

      <section
        className="itinerary-page__itinerary"
        aria-label="Planned itinerary"
      >
        <div className="itinerary-page__itinerary-inner">
          <div className="itinerary-page__itinerary-copy">
            <p className="itinerary-page__section-label">Planned Itinerary</p>
            <h2>Day 1-{plan.dayPlans.length}</h2>

            <div className="itinerary-page__day-list">
              {plan.dayPlans.map((dayPlan) => (
                <article
                  key={`${plan.title}-${dayPlan.day}`}
                  className="itinerary-page__day"
                >
                  <span
                    className="itinerary-page__day-dot"
                    aria-hidden="true"
                  />
                  <div className="itinerary-page__day-body">
                    <h3>
                      Day {dayPlan.day}: {dayPlan.title}
                    </h3>
                    <p>{dayPlan.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <figure className="itinerary-page__itinerary-figure">
            <img
              src={galleryImages[0]}
              alt={`${plan.title} detail view`}
              loading="eager"
            />
          </figure>
        </div>
      </section>
      <Subfooter />
    </div>
  );
}

export default ItineraryPage;
