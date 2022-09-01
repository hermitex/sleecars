import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
