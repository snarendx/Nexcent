import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import OurClients from "./Components/OurClients";
import LocalBusiness from "./Components/LocalBusiness";
import Footer from "./Components/Footer";
import AllCustomer from "./Components/AllCustomer";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <OurClients />
        <LocalBusiness />
        <AllCustomer />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
