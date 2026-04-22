import { useState } from "react";
import Button from "../button/button.jsx";
import { getPlanImageSrc, getPlanPath, plans } from "../../data/tours";
import "./slidersection.css";

const visibleOffsets = [-1, 0, 1];

function normalizeIndex(index, length) {
  return ((index % length) + length) % length;
}

function SliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (plans.length === 0) {
    return null;
  }

  const activePlan = plans[activeIndex];
  const visiblePlans = visibleOffsets.map((offset) =>
    plans[normalizeIndex(activeIndex + offset, plans.length)],
  );

  function showPreviousSlide() {
    setActiveIndex((currentIndex) =>
      normalizeIndex(currentIndex - 1, plans.length),
    );
  }

  function showNextSlide() {
    setActiveIndex((currentIndex) =>
      normalizeIndex(currentIndex + 1, plans.length),
    );
  }

  return (
    <div className="journey-slider">
      <div className="journey-slider__header">
        <p>Explore Bhutan</p>
        <h2>Journeys Designed For You</h2>

        <div className="journey-slider__thumbs" aria-label="Choose journey">
          {visiblePlans.map((plan, index) => {
            const planIndex = normalizeIndex(activeIndex + visibleOffsets[index], plans.length);
            const isActive = index === 1;

            return (
              <button
                className={`journey-slider__thumb${
                  isActive ? " journey-slider__thumb--active" : ""
                }`}
                key={plan.title}
                type="button"
                aria-label={`Show ${plan.title}`}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(planIndex)}
              >
                <img src={getPlanImageSrc(plan)} alt="" />
              </button>
            );
          })}
        </div>
      </div>

      <div className="journey-slider__stage">
        <div className="journey-slider__content">
          <div className="journey-slider__media">
            <button
              className="journey-slider__nav journey-slider__nav--previous"
              type="button"
              aria-label="Previous slide"
              onClick={showPreviousSlide}
            >
              ←
            </button>

            <img
              className="journey-slider__image"
              src={getPlanImageSrc(activePlan)}
              alt={activePlan.title}
            />

            <button
              className="journey-slider__nav journey-slider__nav--next"
              type="button"
              aria-label="Next slide"
              onClick={showNextSlide}
            >
              →
            </button>
          </div>

          <p className="journey-slider__caption">{activePlan.title}</p>
          <Button
            className="journey-slider__button"
            label="View Journey"
            theme="dark"
            to={getPlanPath(activePlan)}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
