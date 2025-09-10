import React from "react";
import "./styles/Footer.css";
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Contact Info */}
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaMapMarkerAlt />
                {/* <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, SW 54321, Chandigarh</span>
                </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FaPhone />
                {/* <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210</span>
                </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FiMail />
                {/* <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            {/* Logo & About */}
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><FaFacebookF className="facebook-bg" /></a>
                  <a href="#"><FaTwitter className="twitter-bg" /></a>
                  <a href="#"><FaGooglePlusG className="google-bg" /></a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss our latest updates. Subscribe now!</p>
                </div>
                <div className="subscribe-form">
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit"><FaTelegramPlane /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>© {new Date().getFullYear()} All Rights Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
