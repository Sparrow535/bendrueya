import { useState } from "react";
import Button from "../../components/button/button.jsx";
import "./contactpage.css";

const mapSrc =
  "https://www.google.com/maps?q=Thimphu%2C%20Bhutan&z=12&output=embed";

function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-page">
      <section
        className="contact-page__shell"
        aria-label="Contact Bendruya Travel"
      >
        <div className="contact-page__form-panel">
          <div className="contact-page__form-inner">
            <h1>Contact Us</h1>
            <span className="contact-page__accent" aria-hidden="true" />

            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__form-grid">
                <label
                  className="contact-page__field"
                  htmlFor="contact-first-name"
                >
                  <span>First Name</span>
                  <input
                    id="contact-first-name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </label>

                <label
                  className="contact-page__field"
                  htmlFor="contact-second-name"
                >
                  <span>Second Name</span>
                  <input
                    id="contact-second-name"
                    name="secondName"
                    type="text"
                    placeholder="Second Name"
                    value={formState.secondName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </label>

                <label className="contact-page__field" htmlFor="contact-phone">
                  <span>Phone</span>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Number"
                    value={formState.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </label>

                <label className="contact-page__field" htmlFor="contact-email">
                  <span>E-mail</span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Your e-mail"
                    value={formState.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </label>

                <label
                  className="contact-page__field contact-page__field--message"
                  htmlFor="contact-message"
                >
                  <span>Message</span>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Enter your message here"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <Button
                label="Get in touch"
                theme="dark"
                type="submit"
                className="contact-page__submit"
              />
            </form>
          </div>
        </div>

        <div className="contact-page__details-panel">
          <div className="contact-page__details-copy">
            <section className="contact-page__detail-block">
              <h2>Address</h2>
              <address>
                Bendrueya Travel
                <br />
                Thimphu, Bhutan
              </address>
            </section>

            <section className="contact-page__detail-block">
              <h2>Call us</h2>
              <p>
                <a href="tel:77628354">77628354</a>
                <br />
                <a href="mailto:bendrueyatravel@gmail.com">
                  bendrueyatravel@gmail.com
                </a>
              </p>
            </section>
          </div>

          <div className="contact-page__map-panel">
            <iframe
              title="Bendruya Travel map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
