import React from 'react';
import { FooterComponent as Footer} from './components/Footer';
import { HeaderComponent as Header } from './components/Header';
import { RegistrationForm } from './components/RegistrationForm';
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <>
      <Header />
      <div className="page__content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<RegistrationForm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
