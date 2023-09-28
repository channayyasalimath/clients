import React from 'react'
import './listing.css'

import{BsArrowRight} from 'react-icons/bs'
import{AiFillHeart} from 'react-icons/ai'

import img3 from "../../../Assets/annualVince.png"
import img4 from "../../../Assets/coffeePlant.png"
import img5 from "../../../Assets/ButtonFern.png"
import img6 from "../../../Assets/spider.png"
import img7 from "../../../Assets/user4.jpg"
import img8 from "../../../Assets/user5.jpg"
import img9 from "../../../Assets/user6.jpg"
import img10 from "../../../Assets/user7.jpg"






const listing = () => {
  return (
    <div className='listingSection'>

      <div className='headingFlex'>
        <h1>My Listisng</h1>
        <button className='btnflex'>See All <BsArrowRight className="icon"/></button>
      </div>

      <div className='secContainerflex'>
        <div className='singleItem'>
          <AiFillHeart className="icon iconHeart"/>
          <img src={img3} alt='' className='img4'/>
          <h3>Annul Vince</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon iconHeart"/>
          <img src={img4} alt='' className='img4'/>
          <h3>Coffee Plant</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon iconHeart"/>
          <img src={img5} alt='' className='img4'/>
          <h3>Button Fern</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon iconHeart"/>
          <img src={img6} alt='' className='img4'/>
          <h3>Annul Vince</h3>
        </div>
        
           
        <div className='sellersFlex'>
        <div className='topSellers'>
          <div className='heading2 flex'>
            <h3>Top Sellers</h3>
            <button className='btnflex'>See All <BsArrowRight className="icon"/></button>
          </div>

          <div className='card flex'>
            <div className='users'>
            <img src={img7} alt='' className='userImg'/>
            <img src={img8} alt='' className='userImg'/>
            <img src={img9} alt='' className='userImg'/>
            <img src={img10} alt='' className='userImg'/>

            </div>

            <div className='cardText'>
              <span className='cspan'>14,556 Plant sold
                <small className='cspansmall'>21 Sellers
                  <span className='date'>7days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className='featuresSellers'>
          <div className='heading2 flex'>
            <h3>Featured Sellers</h3>
            <button className='btnflex'>See All <BsArrowRight className="icon"/></button>
          </div>

          <div className='card flex'>
            <div className='users'>
            <img src={img9} alt='' className='userImg'/>
            <img src={img10} alt='' className='userImg'/>
            <img src={img7} alt='' className='userImg'/>
            <img src={img8} alt='' className='userImg'/>

            </div>

            <div className='cardText'>
              <span className='cspan'>28,556 Plant sold
                <small className='cspansmall'>26 Sellers
                  <span className='date'>31days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>

      

        
      </div>

      

    </div>
  )
}

export default listing
