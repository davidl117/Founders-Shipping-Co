import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import QuoteForm from "./components/quote/quoteForm"
import HomePage from "./components/homePage"
import Contact from "./components/contact/contact"
import About from "./components/aboutPage/about"
import "./Styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App() {
  return (
  <main>
    <Router>
      <Navbar/>
      <Routes>
       <Route path ="/homePage" element={<HomePage/>} />
       <Route  path ="/quoteForm" element={<QuoteForm/>} />
       <Route  path ="/contact" element={<Contact/>} />
       <Route  path ="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
 </main>
  )
}