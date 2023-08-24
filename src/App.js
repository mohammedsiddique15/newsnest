import './App.css';
import AppLogo from './App-logo.png';



function App() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-light bg-dark">
          <div class="container-fluid d-flex justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1 head text-white"><img src={AppLogo} alt='Image not available' style={{width:'100px',height:'50px',objectFit:'cover',marginRight:'10px'}} />THE NEWS</span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;