import React from 'react';
import { FooterComponent as Footer} from './components/Footer';
import { HeaderComponent as Header } from './components/Header';
import { RegistrationForm } from './components/RegisterForm';

function App() {
  return (
    <>
      <Header />
      <div className="page__content">
        <RegistrationForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
