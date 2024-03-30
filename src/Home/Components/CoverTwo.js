import React from 'react'
import padlock from "../Assets/unlock.png"
function CoverTwo() {
  return (
    <div className='cover_two'>
        <div className='cover_two_heading'>
            <h2>Secure & Regulated</h2>
            <div className='cover_two_grid'>
                <div className='cover_two_grid_comp'>
                    <img src={padlock} alt="" />
                    <p>To be the premier realty investment platform in India. Simplify
                         access to lucrative investment opportunities, and generate long 
                         term value for our investors and stakeholders.</p>
                </div>
                <div className='cover_two_grid_comp'>
                    <img src={padlock} alt="" />
                    <p>To be the premier realty investment platform in India. Simplify
                         access to lucrative investment opportunities, and generate long 
                         term value for our investors and stakeholders.</p>
                </div>
                <div className='cover_two_grid_comp'>
                    <img src={padlock} alt="" />
                    <p>To be the premier realty investment platform in India. Simplify
                         access to lucrative investment opportunities, and generate long 
                         term value for our investors and stakeholders.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoverTwo