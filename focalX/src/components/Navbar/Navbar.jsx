import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
export default function Navbar(){
    return <>
     <div className="navbar">
      <div className="left">
        <img src="./images/logo.svg" alt="Photo-Logo" className="logo" />
        <span className="text">Digital marketing agency</span>
      </div>
      <div className="right">
        <a href="#" target="_blank">Home</a>
        <a href="#" target="_blank">Service</a>
        <a href="#"target="_blank">Portfolio</a>
        <a href="#" target="_blank">Clients & Partners</a>
        <a  href="#" target="_blank"><span className="border-b">X  A</span>cademy</a>
        <a href="#" target="_blank">About Us</a>
        <a href="#" target="_blank">Let`s Talk</a>
      </div>
      <div className="ul-down">
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faBars} />
                        
                        <ul className="dropdown"> 
                            <li><a href="#" target="_blank"> Home </a></li>
                            <li><a href="#" target="_blank"> Service</a></li>
                            <li><a href="#"  target="_blank"> Portfolio</a></li>
                            <li><a href="#"  target="_blank">Clients & Partners</a></li>
                            <li> <a  href="#" target="_blank"><span className="border-b">X  A</span>cademy</a></li>
                            <li> <a href="#" target="_blank">About Us</a></li>
                            <li> <a href="#" target="_blank">Let`s Talk</a></li>
                              
                        </ul>
                        </li>
                     </ul> 
                   </div>
                   
      
    </div>
    </>
}
