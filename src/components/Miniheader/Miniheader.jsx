import React from 'react';
import './Miniheader.css'
import {FaCaretDown} from 'react-icons/fa';

const Miniheader = () => {
  return (
    <div className='Miniheader'>
        <div>
            Make a splash with our summer sales: 50% off + Express <br /> Delivery
        </div>
        <div>Shop Now</div>
        <div>
            <span>English  </span>
            <FaCaretDown/>

        </div>
    </div>
  )
}

export default Miniheader