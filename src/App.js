import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
      <div className="App">
        <Header />
          <Routes />
        <Footer />
      </div>
  );
}

export default App;
