import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import LocationCard from "./components/LocationCard/LocationCard";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/location" element={<LocationCard/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
