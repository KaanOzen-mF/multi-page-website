import React from "react";
import CountryCards from "../CountryCards";

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="md:mx-6 md:mt-10">
        <img src="/src/assets/about-header.png" className="rounded-t-xl" />
        <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-peach bg-right flex flex-col py-16 px-6 text-center font-jost rounded-b-xl">
          <h1 className="font-medium text-3xl text-white md:text-5xl leading-normal">
            ABOUT US
          </h1>
          <p className="mt-8 text-white text-base leading-relaxed md:px-12">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audience.
          </p>
        </div>
      </div>

      <div className="md:mx-6 md:mt-16 mt-8">
        <img
          className="md:h-aboutHeader2 rounded-t-xl"
          src="/src/assets/tablet/image-world-class-talent.jpg"
          alt=""
        />
        <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover">
          <h2 className="font-medium text-3xl text-peach md:text-4xl">
            World-class talent
          </h2>
          <p className="md:leading-relaxed font-normal mt-6 md:px-12">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="md:leading-relaxed font-normal mt-6 md:px-12">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <CountryCards country="canada" image="canada.svg" />
      <CountryCards country="australia" image="australia.svg" />
      <CountryCards country="united Kingdom" image="unitedKingdom.svg" />

      <div className="md:mx-6 md:mt-16 mt-8">
        <img
          className="mt-32 md:h-aboutHeader2 w-full"
          src="/src/assets/about-header-3.png"
          alt=""
        />
        <div className="bg-[url('/src/assets/bg-pattern-design-pages-intro-mobile.svg')] bg-lightPeachWhite py-16 px-6 text-center font-jost bg-right bg-cover">
          <h2 className="font-medium text-3xl text-peach md:text-4xl">
            The Real Deal
          </h2>
          <p className="leading-25 font-normal mt-6 md:px-12">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="leading-25 font-normal mt-6 md:px-12">
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
