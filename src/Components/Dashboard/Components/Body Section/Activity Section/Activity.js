import React from 'react'
import './Activity.css'
import { BsArrowRightShort } from "react-icons/bs";

import img7 from "../../../Assets/user4.jpg"
import img8 from "../../../Assets/user5.jpg"
import img9 from "../../../Assets/user6.jpg"
import img10 from "../../../Assets/user7.jpg"


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='headingActivity'>
        <h1>Resent Activity</h1>
        <btn className="btnFlex">
          See All
          <BsArrowRightShort className='icon'/>
        </btn>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
        <img src={img7} alt="" className="custimg"/>
        <div className='customerDetails'>
          <span className='name'>Swapna</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2min ago</div>
        </div>

        <div className='singleCustomer flex'>
        <img src={img8} alt="" className="custimg"/>
        <div className='customerDetails'>
          <span className='name'>Raghu</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2min ago</div>
        </div>

        <div className='singleCustomer flex'>
        <img src={img9} alt="" className="custimg"/>
        <div className='customerDetails'>
          <span className='name'>Ravi</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2min ago</div>
        </div>

        <div className='singleCustomer flex'>
        <img src={img10} alt="" className="custimg"/>
        <div className='customerDetails'>
          <span className='name'>Anjali</span>
          <small>Ordered a new plant</small>
        </div>
        <div className='duration'>2min ago</div>
        </div>

      </div>
    </div>
  )
}

export default Activity
