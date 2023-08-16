// import "./sb-admin-2.min.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";

import Home from "./Components/Home";

import PortalLayout from "./Components/PortalLayout";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="row">
          <Routes>
            <Route path="/" element={<PortalLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
