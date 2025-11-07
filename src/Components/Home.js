import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-session">
                    <h1 className="primary-heading">
                        Your Favorite Food delivered Hot and Fresh
                    </h1>
                    <p className="primary-text" >
                        Healthy switcher chefs do all the prep work like peeling, chopping and marinating so you can cook a fresh food
                    </p>
                    <button className="secondary-button">
                        Order Now <FiArrowRight />
                    </button>
                </div>
                <div className="home-image-container">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home