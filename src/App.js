
import './App.css';
import MainPage from './components/MainPage';
import './App.css';
import Navbar from './components/NavBar';
import AboutRouter from './components/AboutRoute';
import AboutUseNavigate from './components/AboutNavigate';
import {
  
  Routes,
  Route,
} from "react-router-dom";


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://guardian.ng/wp-content/uploads/2022/07/World-population.jpg" /> */}
       
        <p>
          Therese sin react side for å lære react
        </p>


 
      </header>
      <div className='App-sidebar'>
        <Navbar>

        </Navbar>
      
      </div>
      <div className='App-content'> 
     
      <Routes>
        <Route path="/" element={<MainPage/> } />
        <Route path="/ar" element={<AboutRouter />} />
        <Route path="/aun" element={<AboutUseNavigate />} />
      </Routes>

     </div>
   
    
    </div>
  );
}

export default App;
