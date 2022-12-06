
import { useNavigate } from 'react-router';
import './App.css';


function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://guardian.ng/wp-content/uploads/2022/07/World-population.jpg" /> */}
       
        <p>
          Therese sin react side for å lære react
        </p>


 
      </header>
      <div className="btns">   
        <button className="btn" onClick={()=> navigate('/ar')}>Bruke router og navigate </button>
      </div>
   
    
    </div>
  );
}

export default App;
