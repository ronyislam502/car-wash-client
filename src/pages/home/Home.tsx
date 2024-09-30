import Banner from "./components/Banner";
import Review from "./components/review";
import Services from "./components/services";

import "./style.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Review />
    </div>
  );
};

export default Home;
