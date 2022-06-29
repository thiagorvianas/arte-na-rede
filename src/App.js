import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
