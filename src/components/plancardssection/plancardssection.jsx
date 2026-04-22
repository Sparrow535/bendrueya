import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getPlanImageSrc, getPlanPath } from "../../data/tours";
import "./plancardssection.css";

function PlanCardsSection({ plans = [] }) {
  const scrollerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const updateOverflowState = () => {
      const nextIsOverflowing = scroller.scrollWidth > scroller.clientWidth + 1;
      setIsOverflowing(nextIsOverflowing);

      if (!nextIsOverflowing) {
        scroller.scrollLeft = 0;
      } else {
        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
        scroller.scrollLeft = Math.min(
          scroller.scrollLeft,
          Math.max(0, maxScrollLeft),
        );
      }
    };

    updateOverflowState();

    const resizeObserver = new ResizeObserver(() => {
      updateOverflowState();
    });

    resizeObserver.observe(scroller);

    Array.from(scroller.children).forEach((child) => {
      resizeObserver.observe(child);
    });

    window.addEventListener("load", updateOverflowState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", updateOverflowState);
    };
  }, [plans]);

  if (plans.length === 0) return null;

  const handleWheel = (event) => {
    const scroller = scrollerRef.current;

    if (!scroller) return;

    const canScrollHorizontally = scroller.scrollWidth > scroller.clientWidth;

    if (!canScrollHorizontally) return;

    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const nextScrollLeft = scroller.scrollLeft + event.deltaY;

    if (
      (event.deltaY < 0 && scroller.scrollLeft <= 0) ||
      (event.deltaY > 0 && scroller.scrollLeft >= maxScrollLeft)
    ) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));
  };

  return (
    <section
      className={`plan-cards-section ${
        isOverflowing ? "plan-cards-section--overflowing" : ""
      }`}
      ref={scrollerRef}
      onWheel={handleWheel}
      aria-label="Travel itineraries"
      aria-roledescription="carousel"
    >
      <div className="plan-cards-section__track">
        {plans.map((plan) => (
          <Link
            key={plan.title}
            className="plan-cards-section__card-shell"
            to={getPlanPath(plan)}
            aria-label={`Open itinerary for ${plan.title}`}
          >
            <article className="plan-cards-section__card">
              <img
                src={getPlanImageSrc(plan)}
                alt={plan.title}
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <span className="plan-cards-section__days">{plan.days} DAYS</span>

              <div className="plan-cards-section__content">
                <h3>{plan.title}</h3>
                <span className="plan-cards-section__link">Discover More</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PlanCardsSection;
