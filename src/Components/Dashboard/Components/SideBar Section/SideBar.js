import './SideBar.css'
import logo from '../../Assets/logo.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExploreOff} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import Orders from '../pages/Orders'
import Explore from '../pages/Explore'
import Products from '../pages/Products'
import Charts from '../pages/Charts'
import Trends from '../pages/Trends'
import Contact from '../pages/Contact'
import Billing from '../pages/Billing'


import { NavLink } from 'react-router-dom'


const SideBar = () => {

 
  // const navigate=useNavigate()
 
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={logo} alt="image name" className='logo'/>
        <h2>GreenWings.</h2>
      </div>

      <div className='menuDiv msCommon'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <NavLink to='/Dashboard' className='menuLink flex' >
              <IoMdSpeedometer className="icon"/>
              <span className='smallText'>
                Dash board
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Orders" className='menuLink flex' activeClassName="active-link">
              <MdDeliveryDining className="icon"/>
              <span className='smallText'>
                My Orders
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Explore" className='NavmenuLink flex'>
              <MdOutlineExploreOff className="icon"/>
              <span className='smallText'>
                Explore
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Products" className='NavmenuLink flex'>
              <BsTrophy className="icon"/>
              <span className='smallText'>
                Products
              </span>
            </NavLink>
          </li>
        </ul>

        
      </div>

      <div className='settingsDiv msCommon'>   
        <h3 className='divTitle'>
          Settings
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <NavLink to="/Charts" className='NavmenuLink flex'>
              <AiOutlinePieChart className="icon"/>
              <span className='smallText'>
                Charts
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Trends" className='NavmenuLink flex'>
              <BiTrendingUp className="icon"/>
              <span className='smallText'>
                Trends
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Contact" className='NavmenuLink flex'>
              <MdOutlinePermContactCalendar className="icon"/>
              <span className='smallText'>
                Contact
              </span>
            </NavLink>
          </li>

          <li className='listItem'>
            <NavLink to="/Billing" className='NavmenuLink flex'>
              <BsCreditCard2Front className="icon"/>
              <span className='smallText'>
                Billing
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className='sideBarCard'>
      <BsQuestionCircle className="icon2"/>
      <div className='cardContent'>
        <div className='circle1'></div>
        <div className='circle2'></div>


        <h3>Help Center</h3>
        <p>Having troble in Planti, please contact us from for more questions</p>
        <button className='btn1'>Go to help center</button>
      </div>
      </div>
    </div>
  )
}

export default SideBar
