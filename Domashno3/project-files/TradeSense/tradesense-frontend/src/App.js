import './App.css';
import StockPricesList from "./components/StockPricesList";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router";
import Home from "./pages/home/Home";
import Predict from "./pages/predict/Predict";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import RootLayout from "./layouts/RootLayout";
import StockItemPage from "./pages/stock-item/StockItemPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="predict" element={<Predict />} />
            <Route path="predict/stock-item/:id" element={<StockItemPage />} />
        </Route>
    )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
