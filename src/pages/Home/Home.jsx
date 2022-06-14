import "./home.css";
import { Header, HeroBanner, Category, ShopNow } from "../../components";
const Home = () => {
    return (
        <div class="main_container">
            <Header />
            <ShopNow />
            <Category />
            <HeroBanner />
        </div>
    );
}

export {Home};