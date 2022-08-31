import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/home/Hero";
import Car from "./components/car/Car";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Car />
      </Router>
    </div>
  );
}

export default App;
