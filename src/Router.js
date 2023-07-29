import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LocationCardPage from "./components/LocationCard/LocationCardPage";
import Error from "./components/Error/Error";


function Router() {
    return (
      <div className="Router">
       
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/about" element={<About/>} />
          <Route path="/location" element={<LocationCardPage/>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
        
      </div>
    );
  }
  
  export default Router;