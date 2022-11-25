
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import All from './Components/All/All';
import Toolbar from './Components/Toolbar';
import Catogories from './Components/Catogories/Catogories';
import Cart from './Components/Cart/Cart';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    
     <Route path="/navbar" element={<Navbar/>}/>
     <Route path="/" element={<Home/>}/>
     <Route path="/footer" element={<Footer/>}/>
     <Route path="/all" element={<All/>}/>
     <Route path="/toolbar" element={<Toolbar/>}/>
     <Route path="/catogories" element={<Catogories/>}/>
     <Route path="/cart" element={<Cart/>}/>
     
     </Routes>
     </BrowserRouter>
  );
}

export default App;
