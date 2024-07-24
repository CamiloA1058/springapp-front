import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import AuthUserForm from "../AuthUserForm";
import { Nav } from '../Nav'
import { ProductsPage } from "../pages/ProductsPage";


export const MyRoutes = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<AuthUserForm />} />
        <Route path="/products-page" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
};
