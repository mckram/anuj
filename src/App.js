import "./App.css";
import Navbars from "./Components/navbar/navbar";
import Footers from './Components/footer/Footer'
import Home from "./Views/home/home";
import Awards from "./Views/awards/awards";
import Publications from './Views/publics/publics';
import Education from './Views/educ/educ';
import Work from './Views/work/work';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <Routes>
        <Route
                path="/"
                element={
                  <>
                    <Navbars />
                    <Home />
                    <Education/>
                     <Publications/>
                    <Awards/>
                    <Work/>
                  </>
                }
              />
        </Routes>
        <Footers/>
      </div>
    </Router>
  );
}

export default App;
