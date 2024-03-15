import React from "react";
import CountryCards from "../CountryCards";

const AboutPage: React.FC = () => {
  return (
    <div>
      <img src="/src/assets/about-header.png" />
      <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-peach bg-right flex flex-col py-16 px-6 text-center font-jost">
        <h1 className="font-medium text-3xl text-white">ABOUT US</h1>
        <p className="leading-25 mt-8 text-white">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audience.
        </p>
      </div>
      <img src="/src/assets/about-header-2.png" alt="" />
      <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover">
        <h2 className="font-medium text-3xl text-peach">World-class talent</h2>
        <p className="leading-25 font-normal mt-6">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="leading-25 font-normal mt-6">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>

      <CountryCards country="canada" image="canada.svg" />
      <CountryCards country="australia" image="australia.svg" />
      <CountryCards country="united Kingdom" image="unitedKingdom.svg" />

      <img className="mt-32" src="/src/assets/about-header-3.png" alt="" />
      <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover">
        <h2 className="font-medium text-3xl text-peach">The Real Deal</h2>
        <p className="leading-25 font-normal mt-6">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="leading-25 font-normal mt-6">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
