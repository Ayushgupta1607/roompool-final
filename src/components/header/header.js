import React, { Component  } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"


export default class Header extends Component {

    constructor(props){
       super()
       this.state = {

         isOpen : false,
         isMenu : false,
       }
    }
    
    render() {
    
        return (
            <>
            <div className="Header-container">
               <Link to="/">
                   <img src="https://res.cloudinary.com/dcpks831z/image/upload/v1615717280/RoomAssets/favicon_k7mjj8.png" alt="logo" />
                   Roompool-Msit
               </Link>
                 <ul>
                     <li>
                         <Link to="/" >Home</Link>
                     </li>
                     <li>
                         <a href="#about">About</a>
                     </li>
                     <li>
                         <a href="#services">Services</a>
                     </li>
                     <li>
                         <a href="#team">Team</a>
                     </li>
                     <li>
                         <a href="#contact">Contact</a>
                     </li>
                     <li className="Register">
                         <Link to="/login">Login</Link>
                     </li>
                 </ul>
                 <li className="Menu-icon" onClick={ () => this.setState({isMenu : !this.state.isMenu})}>
                {
                    this.state.isMenu ? 
                    <i className="fa fa-times" aria-hidden="true"></i>
                   :
                    <i className="fa fa-bars" ></i>
                
                } 
                 </li>
            </div>
            <div className={this.state.isMenu ?  "Menu" : "none"} >
            <ul onClick={() => this.setState({isMenu : !this.state.isMenu})}>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="#about">About</Link>
                     </li>
                     <li>
                         <Link to="/">Services</Link>
                     </li>
                     <li>
                         <Link to="/">Team</Link>
                     </li>
                     <li>
                         <Link to="/">Contact</Link>
                     </li>
                     <li >
                         <Link to="/login">Login</Link>
                     </li>
                 </ul>
            </div>
              
           
            </>
        )
    }
}
