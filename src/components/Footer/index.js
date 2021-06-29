import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">

            <div className="footer-top">
    
                <div className="row">
        
                  <div className="col-lg-4 col-md-6 footer-contact">
                    <h3>Roompool</h3>
                    <p>
                      Maharaja Surajmal Institute of Technology,<br></br>
                      Janakpuri, Delhi<br></br>
                      India <br></br><br></br>
                      <strong>Phone:</strong> +91 9034391333<br></br>
                      <strong>Email:</strong> dipanshubhola321@gmail.com<br></br>
                    </p>
                  </div>
        
                  <div className="col-lg-4 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="fa fa-chevron-right"></i> <Link to="#">Home</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="#">About us</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="#">Services</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                    </ul>
                  </div>
        
                  <div className="col-lg-4 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i className="fa fa-chevron-right"></i> <Link to="/flat">Flat</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="/Roommate">Roommate</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="/wifi">Wifi</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="/pg">PG</Link></li>
                      <li><i className="fa fa-chevron-right"></i> <Link to="/food">Food</Link></li>
                    </ul>
                  </div>
        
               
              </div>
            </div>
        
    
        
              <div className="copyright-wrap d-md-flex py-4">
                <div className="mr-md-auto text-center text-md-left">
                  <div className="copyright">
                    &copy; Copyright <strong><span>Roompool-msit</span></strong>. All Rights Reserved
                  </div>
                 
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                  <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
                  <Link to="#" className="instagram"><i className="fa fa-instagram"></i></Link>
                  <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
                </div>
              </div>
        
   
          </footer>
        )
    }
}
