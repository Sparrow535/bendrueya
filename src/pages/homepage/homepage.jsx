import "./homepage.css";
import Button from "../../components/button/button.jsx";
import SliderSection from "../../components/slidersection/slidersection.jsx";
import Subfooter from "../../components/subfooter/subfooter.jsx";
import taktshang from "../../assets/homepage/taktshang.png";
import paro from "../../assets/homepage/paro.png";

function HomePage() {
  return (
    <div className="homepage">
      {/* Add home page code here later. */}
      <section className="hero">
        <div className="text">
          <h1 className="hero-title">
            BEN<span className="hero-title__accent">DR</span>UEYA
          </h1>
          <p>
            Luxury Journeys Through Bhutan <br />
            Curated experience for travelers who seek <br />
            authenticity.
          </p>
        </div>
        <Button label="Explore Experience" theme="dark" />
      </section>
      <section className="second">
        <div className="second__left">
          <img src={taktshang} alt="Taktshang" />
        </div>
        <div className="second__right">
          <div className="second__top">
            <h3 className="second__top-text-1">BHUTAN IS NOT</h3>
            <h3 className="second__top-text-2">FOR EVERYONE</h3>
          </div>
          <div className="second__bot">
            <p>
              Bhutan is not for everyone. It’s for those who seek depth over
              speed - where journeys unfold through ancient dzongs, quiet
              villages, and monasteries carried by the rhythm of prayer flags.
              This is not just travel, but a slower, more intentional way of
              experiencing a place.
            </p>
          </div>
        </div>
      </section>
      <section className="third">
        <h2>
          FOR THOSE <br />
          WHO TRAVEL DIFFERENTLY
        </h2>
        <p>
          Discover Bhutan through its signature experiencesexplore ancient
          dzongs, walk through timeless villages, and find stillness in
          monasteries where prayer flags move with the mountain wind.
        </p>
      </section>
      <section className="fourth">
        <SliderSection />
      </section>
      <section className="fifth">
        <img src={paro} alt="Paro" />
        <h2>TRAVEL BHUTAN, YOUR WAY</h2>
        <p>
          Our experts design journeys that flow effortlessly through Bhutan
          blending traditional stays, trusted local guides, private transport,
          and meaningful experiences. From planning to arrival, every detail
          aligns into one seamless journey Bhutan, tailored entirely to you.
        </p>
      </section>
      <section className="subfooter">
        <Subfooter />
      </section>
    </div>
  );
}

export default HomePage;
