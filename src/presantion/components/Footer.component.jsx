import React from 'react';
import './css/footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer section-space60">

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="footer-widget mb20">

              <h3 className="footer-title">Contact Info</h3>
              <div className="ft-contact-info">

                <div className="ft-icon">

                  <i className="fa fa-phone" />
                </div>

                <div className="ft-content">

                  +91 123 456 789
                </div>

              </div>

              <div className="ft-contact-info">

                <div className="ft-icon">

                  <i className="fa fa-envelope" />
                </div>

                <div className="ft-content">

                  info@broker.com
                </div>

              </div>

              <div className="ft-contact-info">

                <div className="ft-icon">

                  <i className="fa fa-map-marker" />
                </div>

                <div className="ft-content">

                  4451 Jett Lane Irvine,
                  <br />
                  CA 92614
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
            <div className="footer-widget mb20">

              <h3 className="footer-title">Quick Links</h3>
              <ul className="bullet listnone no-padding mb0">
                <li>
                  <i className="fa fa-angle-right" />
                  {' '}
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/index.html" className="Home">Home</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                  {' '}
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/service-list.html" title="Services">Services</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                  {' '}
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/blog.html" title="Blog">Blog</a>
                </li>
                <li>
                  <i className="fa fa-angle-right" />
                  {' '}
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/contact-us.html" title="Contact us">Contact us</a>
                </li>
              </ul>

            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div className="footer-widget mb20">

              <h3 className="footer-title">Follow Us On</h3>
              <ul className="listnone no-padding mb0">
                <li className="footer-link">
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/#">
                    <i className="fa fa-facebook-square " />
                    {' '}
                    facebook
                  </a>
                </li>
                <li className="footer-link">
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/#">
                    <i className="fa fa-twitter-square " />
                    {' '}
                    twitter
                  </a>
                </li>
                <li className="footer-link">
                  <a href="https://easetemplate.com/free-website-templates/stock-broker/#">
                    <i className="fa fa-google-plus-square " />
                    {' '}
                    google-plus
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="footer-widget">

              <h3 className="footer-title">Newsletter</h3>
              <p>Subscribe our email newsletter today to receive updates.</p>
              <form>
                <div className="form-group">

                  <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email Address" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-outlin">Subscribe</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;
