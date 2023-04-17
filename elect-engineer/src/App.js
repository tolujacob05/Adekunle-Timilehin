import React from "react";
import "./App.css";
import FrontPage from "./components/frontpage/FrontPage";
import Service from "./components/services/Service";

const App = () => {
  return (
    <>
      <div>
        <FrontPage />
        <Service />
      </div>
    </>
  )
}

export default App;