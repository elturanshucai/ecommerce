import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { Provider } from "react-redux"
import store from "./store/store"
import Catalog from "./pages/catalog/Catalog"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/women/:category" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
