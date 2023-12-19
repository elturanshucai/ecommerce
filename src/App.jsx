import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
