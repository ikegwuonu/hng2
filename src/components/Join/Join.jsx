import React from 'react';
import'./Join.css';

const Join = () => {
    
    

  return (
    <div className='Join' >
      <h1>Join our community</h1>
        <div className="form">
          <p>We have the community committed to sharing more information <br /> about us. To get our promo yo can leave your email here</p>
            <form className="email-container">
                <input type="email" name='user-email' placeholder='Add your email here' />
                <button className='but' >Sign up</button>
            </form>
        </div>
    </div>
  )
}
export default Join