import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Fruits from "./pages/Fruits";
import Berries from "./pages/Berries";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="berries" element={<Berries />} />
        <Route
          path="*"
          element={
            <div className="container mx-auto py-16 text-center text-2xl">
              404 — Страница не найдена
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
