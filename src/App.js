import "./App.css";
import {Home} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Link to="/"></Link>
    </div>
  );
}

export default App;
