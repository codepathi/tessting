import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer-1" className="footer division">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info mb-40">
              <img
                className="footer-logo mb-25"
                src="logo/RestroXLogo.png"
                alt="footer-RestroX-logo-final-edit"
              />
              <p className="p-md">
                RestroX is an ultimate combination of restaurant operating
                systems gathered with high-end features compacted all in one
                app.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Company</h6>
              <ul className="foo-links clearfix  ">
                <li>
                  <p className="p-md">
                    <a href="aboutus" style={{ color: "inherit" }}>
                      About Us
                    </a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/contacts">Contact Us</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Discover</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/features">Features</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/pricing">Plans &amp; Pricing</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Legal</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/terms">Terms of Use</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="/privacy">Privacy Policy</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              <h6 className="h6-xl">Support</h6>
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="/faqs">FAQs</a>
                  </p>
                  <p className="p-md">
                    <a href="https://support.restrox.co/" target="_blank">
                      Support
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p>© {new Date().getFullYear()} RestroX. All Rights Reserved</p>
              </div>
            </div>
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a
                      href="https://www.facebook.com/restrox.co"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.instagram.com/restrox_/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://twitter.com/RestroX_" target="_blank">
                      <FaTwitter />
                    </a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a
                      href="https://www.linkedin.com/company/restrox/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
