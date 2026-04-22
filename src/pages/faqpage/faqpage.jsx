import { useState } from "react";
import "./faqpage.css";

const faqs = [
  {
    question: "What is the best time to visit Bhutan?",
    answer:
      "Spring, from March to May, and autumn, from September to November, are the most popular seasons because the weather is clearer and many festivals take place. Winter is quieter and beautiful for cultural trips, while summer is greener with occasional rain.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes. Bendrueya Travel can shape the route, hotels, pace, guides, and experiences around your interests. You can focus on culture, hiking, wellness, photography, festivals, family travel, or a mix of several styles.",
  },
  {
    question: "What type of accommodation is provided?",
    answer:
      "We arrange trusted hotels, boutique lodges, traditional stays, and luxury properties depending on your package and preferred comfort level. Every option is selected for cleanliness, service, location, and overall travel experience.",
  },
  {
    question: "What should I pack for my trip?",
    answer:
      "Pack layered clothing, comfortable walking shoes, sun protection, a reusable water bottle, and modest clothing for dzongs and monasteries. If your trip includes hikes, bring a warm jacket and light rainwear.",
  },
  {
    question: "What is the Sustainable Development Fee (SDF)?",
    answer:
      "The Sustainable Development Fee (SDF) is a daily fee imposed by the Government of Bhutan on international tourists as part of its High Value, Low Impact tourism policy. The purpose of this fee is to ensure that tourism benefits the country while preserving its culture, environment, and way of life.",
  },
  {
    question: "Do I need a visa to travel to Bhutan?",
    answer:
      "Most international travelers need a Bhutan visa, which is processed before arrival as part of the confirmed travel arrangement. We guide you through the required documents and help coordinate the visa process with your booking.",
  },
];

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleFaq(index) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  }

  return (
    <section className="faq-page">
      <h1>FAQ</h1>

      <div className="faq-page__list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              className={`faq-page__item${isOpen ? " faq-page__item--open" : ""}`}
              key={faq.question}
            >
              <button
                className="faq-page__question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleFaq(index)}
              >
                <span className="faq-page__plus" aria-hidden="true">
                  {isOpen ? "-" : "+"}
                </span>
                <span>{faq.question}</span>
              </button>

              {isOpen && <p className="faq-page__answer">{faq.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FaqPage;
