import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";
import DistrictPage from "./pages/DistrictPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query" element={<SearchResultsPage/>} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/district/:district" element={<DistrictPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
