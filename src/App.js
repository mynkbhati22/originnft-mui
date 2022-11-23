import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Components/Pages/Main";
import Explore from "./Components/Explore"
import Exploreinsidepage from "./Components/Exploreinsidepage";
import Collectionsstate from "./Components/Collectionsstate"

function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/explore"
            element={<Explore/>}
          /> 
        <Route 
            path="/exploreinsidepage"
            element={<Exploreinsidepage/>}
          /> 
           <Route 
            path="/collectionsstate"
            element={<Collectionsstate/>}
          /> 
        </Routes>
        
      </Router>
    {/*   <Navbar />
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;


