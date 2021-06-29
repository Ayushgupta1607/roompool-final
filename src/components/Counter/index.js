import React, { Component } from 'react'
import './style.css'
export default class Counter extends Component {
    render() {
        return (
            <section id="counts" className="counts">
      
      
              <div className="row counters">
      
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">32</span>
                  <p>Registered Users</p>
                </div>
      
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">1</span>
                  <p>Helped</p>
                </div>
      
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">5</span>
                  <p>Flats</p>
                </div>
      
                <div className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">2</span>
                  <p>Team Members</p>
                </div>
      
              </div>
      
           
          </section>
        )
    }
}
