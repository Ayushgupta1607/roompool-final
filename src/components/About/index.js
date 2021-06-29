import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default class About extends Component {
    render() {
        return (
            <section id="about" className="about">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
            <img src="https://res.cloudinary.com/dcpks831z/image/upload/v1615717281/RoomAssets/about_zrquht.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>Roompool is here to help you with</h3>
            {
              //  <p className="font-italic">
              //  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              //  magna aliqua.
              //  </p>
            }
           
            <ul>
              <li><i className="fa fa-bandcamp" aria-hidden="true"></i> Getting a flat and facilities. </li>
              <li><i className="fa fa-bandcamp" aria-hidden="true"></i> Hustle of searching best PG.</li>
              <li><i className="fa fa-bandcamp" aria-hidden="true"></i> Introducing Roommates with comman interests.</li>
            </ul>
          </div>
        </div>

    </section>
        )
    }
}
