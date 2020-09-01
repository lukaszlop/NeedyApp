import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain/HomeMain";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeFourBoxes from "./HomeFourBoxes/HomeFourBoxes";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeHelpInfo from "./HomeHelpInfo/HomeHelpInfo";
import HomeContactForm from './HomeContactForm/HomeContactForm';


const Home = () => {
  return (
    <>
      <HomeHeader />
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
