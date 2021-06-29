import React, { Component } from "react";
import "./style.css";
export default class Contactus extends Component {
  render() {
    return (
      <section id="contact" className="contact section-bg">
        <div data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            {
              //<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            }
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <h3>Our Address</h3>
                <p>9/2 ram bagh colony,Karnal-132001</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <h3>Email Us</h3>
                <p>ayush85720@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <h3>Call Us</h3>
                <p>+91-9306332481</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 ">
              <iframe
                className="mb-4 mb-lg-0 Contactiframe"
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.167115166229!2d77.0925741!3d28.621016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1615732101728!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form className="php-email-form">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
