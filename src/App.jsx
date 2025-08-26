import { Route, Routes } from "react-router-dom"
import Wishlist from "./pages/Wishlist"
import View from "./pages/View"
import Pnf from "./pages/Pnf"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:id/view" element={<View />}></Route>
        <Route path="/*" element={<Pnf />}></Route>





      </Routes>
      <Footer/>
    </div>
  )
}

export default App
