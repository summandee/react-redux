import React from 'react'
import './home.css';

const Home = () => {
    return (
        <div>
            <h1>Home Pakistan</h1>
            <div className='add-to-cart'>
                <img src='./img/cad.png' alt='addcart'/>
            </div>
            <div className='Cart-wrapper'>
                <div className='image-wrapper item'>
                    <img src='./img/mm1.png' alt='image'/>
                </div>
                <div className='text-wrapper item'>
                    <span>i-phone pro</span><br/>
                    <span>Price $990</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home
