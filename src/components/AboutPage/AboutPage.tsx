import React from "react";
import CountryCards from "../CountryCards";

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="md:mx-6 md:mt-10 lg:flex lg:flex-row-reverse lg:px-44">
        <img
          src="/src/assets/about-header.png"
          className="rounded-t-xl w-mapLgWidth lg:rounded-r-lg lg:rounded-t-none"
        />
        <div
          className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-peach bg-right flex flex-col py-16 px-6 text-center font-jost rounded-b-xl
        lg:bg-[url('/src/assets/about/bg-pattern-hero-about-desktop.svg')] lg:rounded-b-none lg:rounded-l-lg lg:w-4/12
        "
        >
          <h1 className="font-medium text-3xl text-white md:text-5xl leading-normal lg:text-start lg:px-16 lg:pt-8">
            ABOUT US
          </h1>
          <p className="mt-8 text-white text-base leading-relaxed md:px-12 lg:text-start lg:px-16">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audience.
          </p>
        </div>
      </div>

      <div className="md:mx-6 md:mt-16 mt-8 lg:flex lg:px-44">
        <img
          className="md:h-aboutHeader2 rounded-t-xl lg:w-half lg:rounded-t-none lg:rounded-l-lg"
          src="/src/assets/tablet/image-world-class-talent.jpg"
          alt=""
        />
        <div
          className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover 
        lg:rounded-r-lg"
        >
          <h2 className="font-medium text-3xl text-peach md:text-4xl lg:text-start lg:px-32">
            World-class talent
          </h2>
          <p className="md:leading-relaxed font-normal mt-6 md:px-12 lg:px-32 lg:text-start">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="md:leading-relaxed font-normal mt-6 md:px-12 lg:px-32 lg:text-start">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:justify-between lg:px-56">
        <CountryCards country="canada" image="canada.svg" />
        <CountryCards country="australia" image="australia.svg" />
        <CountryCards country="united Kingdom" image="unitedKingdom.svg" />
      </div>

      <div className="md:mx-6 md:mt-16 mt-8 lg:flex lg:flex-row-reverse lg:px-44">
        <img
          className="md:h-aboutHeader2 lg:w-half lg:rounded-r-lg"
          src="/src/assets/about-header-3.png"
          alt=""
        />
        <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover lg:rounded-l-lg">
          <h2 className="font-medium text-3xl text-peach md:text-4xl lg:text-start lg:px-32">
            The Real Deal
          </h2>
          <p className="leading-25 font-normal mt-6 md:px-12 lg:text-start lg:px-32">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="leading-25 font-normal mt-6 md:px-12 lg:text-start lg:px-32">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
