import { Link } from "react-router-dom";
import "./footer.css";

const planLinks = [
  { label: "Culture Explore", to: "/packages" },
  { label: "Adventure & Nature", to: "/packages" },
  { label: "Luxury And Wellness", to: "/packages" },
];

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

function Icon({ name }) {
  const icons = {
    location: (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 0 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M6.6 3.5 9.2 6c.6.6.7 1.5.2 2.2l-1 1.4a13.8 13.8 0 0 0 6 6l1.4-1c.7-.5 1.6-.4 2.2.2l2.5 2.6c.7.7.6 1.8-.2 2.4-1.1.8-2.5 1.2-3.9.8C10 18.9 5.1 14 3.4 7.6 3 6.2 3.4 4.8 4.2 3.7c.6-.8 1.7-.9 2.4-.2Z" />
    ),
    facebook: (
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.3l.7-3h-3V9c0-.6.4-1 1-1Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.4" cy="7.6" r="0.7" fill="currentColor" stroke="none" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M4.3 19.7 5.5 16A8 8 0 1 1 8 18.5l-3.7 1.2Z" />
        <path d="M9.1 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.1-.2.3 0 .5.5.9 1.3 1.7 2.2 2.2.2.1.4.1.5 0l.6-.7c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .6-.3 1.2-.7 1.5-.6.4-1.4.5-2.7.1-2.2-.7-4.5-3-5.2-5.2-.4-1.2-.3-2 .1-2.6.2-.3.4-.5.7-.7Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className="footer__svg"
    >
      {icons[name]}
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <section className="footer__column">
          <h2>Book plan</h2>
          <ul className="footer__list">
            {planLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer__column footer__company">
          <h2>Company</h2>
          <nav aria-label="Footer navigation">
            {companyLinks.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className="footer__column footer__contact">
          <h2>Get in Touch</h2>
          <ul className="footer__list">
            <li>
              <span className="footer__icon" aria-hidden="true">
                <Icon name="location" />
              </span>
              <span>Bhutan, Thimphu</span>
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">
                <Icon name="mail" />
              </span>
              <a href="mailto:bendrueyatravel@gmail.com">
                bendrueyatravel@gmail.com
              </a>
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">
                <Icon name="phone" />
              </span>
              <a href="tel:77628354">77628354</a>
            </li>
          </ul>
        </section>

        <section className="footer__column">
          <h2>Connect</h2>
          <div className="footer__socials" aria-label="Social links">
            <a href="/" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="/" aria-label="Instagram">
              <Icon name="instagram" />
            </a>
            <a href="https://wa.me/97577628354" aria-label="WhatsApp">
              <Icon name="whatsapp" />
            </a>
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <p>All rights reserved © 2026 Bendrueya Travel.</p>
        <p>
          Developed by <span className="footer__credit">ULTRA</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
