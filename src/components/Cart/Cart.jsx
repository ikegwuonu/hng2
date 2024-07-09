import React from 'react'
import './Cart.css'
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image54 from '../../assets/image54.png'
import image51 from '../../assets/image51.png'
import image52 from '../../assets/image52.png'
import image53 from '../../assets/image53.png'

const Cart = () => {
  return (
    <div className='Cart-container'>
      <div className='crumb'>

        <span className='breadcrumbs grey'>Home / Products /  </span>
        <span className=' breadcrumbs bluetext'>  Cart</span>
      </div>
      <div className="carts">
        <div className="flex bold">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        <hr className='line'/>
        <div className="flex prod-arr">
          <div>
            <img src={image54} alt="" />
            <p className='bold'>Custom air force 1</p>
          </div>
          <div className='bold'>$25</div>
          <div > <FaCaretDown/>01 <FaCaretUp/></div>
          <div className='bold'>$40</div>
        </div>
        <div className="flex prod-arr">
          <div>
            <img src={image51} alt="" />
            <p className='bold'>Custom air force 1</p>
          </div>
          <div className='bold'>$25</div>
          <div> <FaCaretDown/>01 <FaCaretUp/></div>
          <div className='bold'>$40</div>
        </div>
        <div className="flex prod-arr">
          <div>
            <img src={image52} alt="" />
              <p className='bold'>Custom air force 1</p>
          </div>
          <div className='bold'>$25</div>
          <div> <FaCaretDown/>01 <FaCaretUp/></div>
          <div className='bold'>$40</div>
        </div>
        <div className="flex prod-arr">
          <div><img src={image53} alt="" /><p className='bold'>Custom air force 1</p></div>
          <div className='bold'>$25</div>
          <div> <FaCaretDown/>01 <FaCaretUp/></div>
          <div className='bold'>$40</div>
        </div>
        
       
      </div>
      <div className="cart-total">
        <h4>Cart Total</h4>
        <div className="flex">
          <div>Subtotal :</div>
          <div className='bold'>$173</div>
        </div><hr />
        <div className="flex">
          <div>Shipping :</div>
          <div className='bold'>$12</div>
        </div><hr />
        <div className="flex">
          <div>total :</div>
          <div className='bold'>$195</div>
        </div>
        
            <Link to='/checkout'>
              <div className='blue proceed'>
              Proceed to Checkout</div>
            </Link>
      </div><br />
    </div>
  )
}

export default Cart