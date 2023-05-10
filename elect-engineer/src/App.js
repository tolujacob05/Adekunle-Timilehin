import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/frontpage/FrontPage";
// import Service from "./components/services/Service";
import Onboard from "./components/onboard/Onboard";
// import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Onboard />} />
            <Route path="/frontpage" element={<FrontPage />} />
            {/* <Route path="/services" element={<Service />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;