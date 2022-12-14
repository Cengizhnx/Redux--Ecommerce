import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProfileHome from "./pages/Profile/ProfileHome";
import ProductDetail from './pages/ProductDetail';
import Banner from './components/Banner';
import Cart from './pages/Cart';
import Orders from './pages/Orders';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between bg-slate-200'>
      <Router>
        <div>
          <Nav></Nav>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<ProfileHome />}></Route>
            <Route path="/products/:products_id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
          </Routes>
        </div>

        <div className='bg-slate-200'>
          <Banner></Banner>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
