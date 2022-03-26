import "./App.css";
import {Home} from "./pages";
import {ProductList} from "./pages";
import {Cart} from "./pages";
import {Wishlist} from "./pages";
import {Login} from "./pages";
import {Logout} from "./pages";
import {SignUp} from "./pages";
import {ForgotPwd} from "./pages";
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/productlist" element = {<ProductList />} />
        <Route path="/cart" element= {<Cart />} />
        <Route path="/wishlist" element= {<Wishlist />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout />} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/forgotpwd" element = {<ForgotPwd />} />
        <Route path="/mock" element = {<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
