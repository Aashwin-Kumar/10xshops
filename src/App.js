import "./Apps.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Provider } from "react-redux";
import { ProductDetails } from "./pages/ProductDetails";
import store from "./store/store";
function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <div className="page-container">
              <div className="content-wrapper">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/:productId" element={<ProductDetails />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
