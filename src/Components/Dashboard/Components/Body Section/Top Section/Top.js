import React, { useEffect, useState } from "react";
import "./Top.css";

import { Link } from 'react-router-dom'
import Axios from 'axios'



//Imported Icons
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import{ BsQuestionCircle } from "react-icons/bs"
import{ CgProfile } from "react-icons/cg"
import{ BiEdit } from "react-icons/bi"
import{ BsEnvelope } from "react-icons/bs"
import{ BiLogOut } from "react-icons/bi"



//Imported Images
import img from "../../../Assets/user3.jpg";
import img2 from "../../../Assets/lampTree.png";
import video from "../../../Assets/plantVideo.mp4";

const Top = () => {

  // const[open, setOpen]=useState(false)
  const [drop, setDrop] = useState(false)

  // const [loginUserName, setLoginUserName]=useState('')

  // Axios.post('http://localhost:3002/login', { //Now
  //   LoginUserName: loginUserName,
    
  // }).then((response)=>{
  //   console.log();
    
  // })  

 
   
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to GreenWings.</h1>
          <p>Hello CSTech, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle2 className="icon iconNew" />
          <IoIosNotificationsOutline className="icon iconNew" />
          <div className="adminImage" onClick={()=>{setDrop(!drop)}}>
            <img src={img} alt="Admin image" className="img2" />
          </div>

          <div className={`dropdown-menu ${drop? 'active' : 'inactive'}`}>
            {/* <h4>{setLoginUserName(loginUserName)}<br/><span>Website Designer</span></h4> //Now */}
            <h4>Channayya<br/><span>Website Designer</span></h4>

            <ul>
              {/* <DropdownItem icon  ={img} text={"My Profile"}/> */}

              <DropdownItem icon={<CgProfile className="iconUser"/>} text={"My Profile"}/>
              <DropdownItem icon={<BiEdit className="iconUser"/>} text={"Edit Profile"}/>
              <DropdownItem icon={<BsEnvelope className="iconUser"/>} text={"Inbox"}/>
              <Link to="/"><DropdownItem icon={<BiLogOut className="iconUser"/>} text={"Logout"}/></Link>
            </ul>

          </div>

        </div> 
      </div>

      <div className="cardSection flex">
          <div className="rightCard flex">
            <h1>Create and sell extraordinary products</h1>
            <p>The world's fast industry today are natural made products!</p>
            <div className="buttons flex">
              <button className="btn">Explore More</button>
              <button className="btn transparent">Top Seller's</button>
            </div>

            <div className="videoDiv">
              <video src={video} autoPlay loop muted></video>
            </div>
          </div>

          <div className="leftCard flex">
            <div className="main flex">
              <div className="textDiv">
                <h1>My Stat</h1>

                <div className="flexLeft">
                  <span>
                    Today <br /> <small>4 Orders</small>
                  </span>
                  <span>
                    This Month <br /> <small>127 Orders</small>
                  </span>
                </div>

                <span className="flex-link">
                  Go to my orders <BsArrowRightShort className="icon" />
                </span>
              </div>

              <div className="imageDiv">
                <img src={img2} alt="treeLamp" className="treeLamp"/>
              </div>

             {/*We Should use this */}
              

            </div>
            <div className="sideBarCard-inTop">
                <BsQuestionCircle className="icon2 " />
                <div className="cardContent">
                  <div className="circle1"></div>
                  <div className="circle2"></div>

                  <h3>Help Center</h3>
                  <p>
                    Having troble in Planti, please contact us from for more
                    questions
                  </p>
                  <button className="btn1">Go to help center</button>
                </div>
              </div>
          </div>
        </div>
    </div>
  );
};

function DropdownItem(props){
  return(
    <li className="dropdownItem">
      
      <a>{props.icon}</a>
      <a>{props.text}</a>
    </li>
  );
}

export default Top;
