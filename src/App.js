import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import LocationCardPage from "./components/LocationCard/LocationCardPage";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/location" element={<LocationCardPage/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
