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
import {Link } from "react-router-dom";

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
      </Routes>
      
      <Link to = "/" ></Link>
      <Link to = "/productlist" ></Link>
      <Link to = "/cart" ></Link>
      <Link to = "/wishlist" ></Link>
      <Link to = "/login" ></Link>
      <Link to = "/logout" ></Link>
      <Link to = "/signup" ></Link>
      <Link to = "/forgotpwd" ></Link>
    </div>
  );
}

export default App;
