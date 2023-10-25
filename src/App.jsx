import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import AllBeer from "./pages/AllBeer";
import BeerDetail from "./pages/BeerDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RandomBeer" element={<RandomBeer />} />
          <Route path="/AllBeer" element={<AllBeer />} />
          <Route path="/beer/:id" element={<BeerDetail />} />
        </Routes>
        <Header className="Header" />
      </BrowserRouter>
    </>
  );
}

export default App;
