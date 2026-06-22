import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const { familyName, givenName } = config.developer;

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{config.ui.landing.greeting}</h2>
            <h1 className="gradient-text">
              {familyName}
              <br />
              <span>{givenName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.ui.landing.roleLine1}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.ui.landing.roleLine2}</div>
            </h2>
          </div>
          <div className="mobile-photo">
            <img src="/images/mypicnbg.png" alt={config.developer.fullName} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
