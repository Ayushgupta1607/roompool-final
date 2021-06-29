import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default class BannerIntro extends Component {
    render() {
        return (
            <section id="hero" className="d-flex align-items-center">

            <div className="container-fluid" data-aos="fade-up">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>Bettter Room Sharing Experience With Roompool </h1>
                  <h2>We are team of Student from different states with experience flat and system</h2>
                  <div><Link to="/login" className="btn-get-started scrollto">Get Started</Link></div>
                </div>
                <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
                  <img src="https://res.cloudinary.com/dcpks831z/image/upload/v1617469025/RoomAssets/Design_inspiration-bro_rztycv.svg" className="img-fluid animated" alt="" />
                </div>
              </div>
            </div>
        
          </section>
        )
    }
}
