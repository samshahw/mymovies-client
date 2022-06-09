import React from "react";
import Header from './header/Header';
import Footer from "./footer/Footer";
import Body from "./body/Body";
import About from "./about/About";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/movies" />} />
            <Route path="movies" element={<Body />} />
            <Route path="directors" element={<Body />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
