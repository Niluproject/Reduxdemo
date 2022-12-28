import React from 'react'
import test from '../components/images/samplemob.jpg'
import testt from '../components/images/addtocart.jpg'
function Home() {
  return (
    <div>
      <div className='add-to-cart'>
      <img alt='logo' src={testt} />
      </div>
      <h1>Test Home page</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
          <img alt='logo' src={test} />
        </div>
        <div className='text-wrapper item'>
          <span>
            I-phone
          </span>
          <span>
            Price: $100.00
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
