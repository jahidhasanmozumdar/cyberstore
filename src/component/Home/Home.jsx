import React from "react";
import Banner from "../Banner/Banner";
import Benefits from "../Benefites/Benefits";
import EcommerceBanner from "../EcommerceBanner/EcommerceBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import Footer from "../Footer/Footer";
import ProductCategory from "../ProductCategory/ProductCategory";
import BrandSection from "../BrandSection/BrandSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Benefits></Benefits>
      <FeaturedProduct></FeaturedProduct>
      <EcommerceBanner></EcommerceBanner>
      <ProductCategory></ProductCategory>
      <BrandSection />
      <Footer></Footer>
    </>
  );
};

export default Home;
