import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { Provider } from "react-redux"
import store from "./store/store"
import Catalog from "./pages/catalog/Catalog"
import SingleProductPage from "./pages/singleProduct/SingleProductPage"
import Checkout from "./pages/checkout/Checkout"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:person/:category" element={<Catalog />} />
          <Route path="/:person/:category/:productName" element={<SingleProductPage />} />
          <Route path="/:productName" element={<SingleProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
