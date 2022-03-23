import "./home.css";
import { Header, HeroBanner, Category, ShopNow } from "../../components";
const Home = () => {
    return (
        <div class="main_container">
            <Header />
            <Category />
            <ShopNow />
            <HeroBanner />
        </div>
    );
}

export {Home};