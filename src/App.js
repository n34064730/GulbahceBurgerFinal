import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItemPage from "./components/pages/MenuItemPage";
import BasketPage from "./components/pages/BasketPage";
import HomePage from "./components/pages/HomePage";

function App() {
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Header pageMode={changeMode} />

      <Routes>
        <Route path="/" element={<HomePage mode={mode} />} />
        <Route path="/menu" element={<MenuItemPage  />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
