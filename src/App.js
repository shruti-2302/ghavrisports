
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Achivements from './Components/Achivements';
import Players from './Components/Players';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import { Inquiry } from './Components/homescreen/Inqury';



function App() {
return(
<div className='bg-gray-900'>
<Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/gallery' element={<Gallery />}/>
    <Route path='/achievements' element={<Achivements />}/>
    <Route path='/players' element={<Players />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/admin' element={<Admin />}/>
    <Route path='/inquiry' element={<Inquiry />}/>
  </Routes>
  <Footer />


</div>
) ; 

}

export default App;
