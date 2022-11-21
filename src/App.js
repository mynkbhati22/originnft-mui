import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Hometabs from "./Components/Hometabs"
import Footer from "./Components/Footer";
import Main from "./Components/Pages/Main";
import Explore from "./Components/Explore"

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
         {/*  <Route
            path="/exploreart"
            element={<Exploreart mode={mode} toggleMode={toggleMode} />}
          /> */}
         
        </Routes>
      </Router>
    {/*   <Navbar />
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
