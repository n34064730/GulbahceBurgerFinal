import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItemPage from "./components/pages/MenuItemPage";
import BasketPage from "./components/pages/BasketPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuItemPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
