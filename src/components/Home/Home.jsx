import React from "react";
import HomeMain from "./HomeMain/HomeMain";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeFourBoxes from "./HomeFourBoxes/HomeFourBoxes";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeHelpInfo from "./HomeHelpInfo/HomeHelpInfo";
import HomeContactForm from "./HomeContactForm/HomeContactForm";

const Home = () => {
  return (
    <>
      <HomeMain />
      <HomeThreeColumns />
      <HomeFourBoxes />
      <HomeAboutUs />
      <HomeHelpInfo />
      <HomeContactForm />
    </>
  );
};

export default Home;
