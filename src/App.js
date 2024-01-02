import './App.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./Page/LandingPage/LandingPage";
import Footer from './components/Footer/Footer';
import CustomNavbar from './components/Navbar/Navbar';
import Price_component from './components/Price/Price_component';

function App() {
  return (
   <>
   <CustomNavbar/>
   <LandingPage/>
   <Price_component/>
   <Footer/>
   </>
  );
}

export default App;
