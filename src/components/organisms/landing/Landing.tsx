import Image from "next/image";
import LandingHeader from "../../atoms/landingHeader/LandingHeader";
import LandingLearnMore from "../../molecules/landingLearnMore/LandingLearnMore";

// Landing component
const Landing = () => {
  return (
    <section className="landing-section">
      <div className="space-y-8">
        <LandingHeader />
        <LandingLearnMore />
      </div>
      <div className="landing-image-wrapper">
        <Image
          alt=""
          src="/landing.jpg"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default Landing;
