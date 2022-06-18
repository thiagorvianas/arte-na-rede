import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import { BrowserRouter } from 'react-router-dom';
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
