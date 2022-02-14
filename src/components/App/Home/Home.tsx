import { ReactComponent as LogoIcon } from "src/assets/svg/logo.svg";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="content-wrapper">
      <div className="banner">
        <div>
          <LogoIcon className="logo" />
        </div>
        <div className="banner-text">
          <h1>
            Smell<span style={{ color: "#057dc9" }}>Sense</span>
          </h1>
          <h2>The Smell Training Solution</h2>
          <div className="external-links">
            <a
              href="https://www.facebook.com/SmellSense-345235540113222/"
              target="tab"
            >
              <img
                className="external-link"
                src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/facebook.png?raw=true"
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com/smellsense" target="tab">
              <img
                className="external-link"
                src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/twitter.png?raw=true"
                alt="Twitter"
              />
            </a>
            <a href="https://smellsense.myshopify.com/" target="tab">
              <img
                className="external-link"
                src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/shopify.png?raw=true"
                alt="Shopify"
              />
            </a>
            <a href="mailto: smellsenseza@gmail.com">
              <img
                className="external-link"
                src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/gmail.png?raw=true"
                alt="Email"
              />
            </a>
          </div>
          <div className="banner-divider"></div>
        </div>
      </div>
      <div className="availability">
        <div className="availability-text">Now available on</div>
        <div className="platforms">
          <div className="card">
            <div className="platform-title">Google Play</div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=za.co.smellsense"
                target="tab"
              >
                <img
                  className="store"
                  src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/google-play.png?raw=true"
                  alt="Google Play Store"
                />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="platform-title">App Store</div>
            <div>
              <a href="https://google.com" target="tab">
                <img
                  className="store"
                  src="https://github.com/mattgoespro/public-resources/blob/master/images/logos/png/ios-app-store.png?raw=true"
                  alt="iOS Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="others">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/about">About Us</Link>
      </div>
    </div>
  );
}

export default Home;
