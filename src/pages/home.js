import React from 'react'
import {Header, CoverTwo} from '../components/ui';
function HomePage() {
  return (
    <div className='Home'>
        <div className='cover_page'>
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
  )
}

export {HomePage}