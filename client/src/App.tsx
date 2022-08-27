import React from 'react';
import { FooterComponent as Footer} from './components/Footer';
import { HeaderComponent as Header } from './components/Header';
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';

function App() {
  return (
    <>
      <Header />
      <div className="page__content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
