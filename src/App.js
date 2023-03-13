import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <>
   <Navbar/>
   <Header/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
