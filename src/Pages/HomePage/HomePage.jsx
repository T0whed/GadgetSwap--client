import BannerComponent from "../../Components/BannerComponent/BannerComponent.jsx";
import FeaturedProductsComponent from "../../Components/FeaturedProductsComponent/FeaturedProductsComponent.jsx";
import HowItWorksComponent from "../../Components/HowItWorksComponent/HowItWorksComponent.jsx";
import LoyaltyAndRewardsComponent from "../../Components/LoyaltyAndRewardsComponent/LoyaltyAndRewardsComponent.jsx";
import WhatOurCustomersSayComponent from "../../Components/WhatOurCustomersSayComponent/WhatOurCustomersSayComponent.jsx";
// import EidSpecialFunComponent from "../../Components/EidSpecialFunComponent/EidSpecialFunComponent.jsx";

const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <FeaturedProductsComponent />
      <HowItWorksComponent />
      <LoyaltyAndRewardsComponent />
      <WhatOurCustomersSayComponent />
      {/* <EidSpecialFunComponent /> */}
    </>
  );
};

export default HomePage;
