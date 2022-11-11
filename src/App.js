
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header';
import NavBar from './components/navbar';
import Minifooter from './components/minifooter';
import About from './components/about';



const App = () => {
  return (
   <div>
      <NavBar />
      <Header />
      <Minifooter />
      <About/>
      </div>
     
   
  )
}

export default App

