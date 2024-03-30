import React from 'react';
import './App.css';
import Header from './Home/Components/Header';
import CoverTwo from './Home/Components/CoverTwo';

function App() {
  return (
    <div className='website'>
      <div className='App'>
        <div className='cover_page'>
          <Header />
          <div className='heading'>
            <p>create your safe</p>
            <h4>real estate portfolio</h4>
            <div className='sub-heading'>
              <h3>&nbsp;  invest in growing physical assets  &nbsp; </h3>
              <p>Invest in India's growing real estate with just 100,000 from anywhere in the world just with your phone.
                Create an account to access pre-vetted and professionally managed real estate in a matter of minutes.</p>
            </div>
          </div>

        </div>
        <CoverTwo />
      </div>

    </div>
  );
}

export default App;
