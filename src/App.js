import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuItemPage from "./components/pages/MenuItemPage";
import BasketPage from "./components/pages/BasketPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuItemPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
