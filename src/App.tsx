import DiplabLogo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={DiplabLogo} className="logo diplab" alt="Diplab Logo" />
      </div>
      <p className="coming-soon">Coming soon...</p>
    </>
  );
}

export default App;
