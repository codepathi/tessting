import Link from "next/link";
import { useEffect, useState } from "react";
import { scroll } from "../utils/utils";
import styles from "./headers.module.css";
import cn from "classnames";

const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mobileMenuToggle, setMobileMenuToggle] = useState("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };
  const toggleMenu = (value) => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return (
    <header
      id="header"
      className={`header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`}
    >
      <div className="header-wrapper">
        {/* MOBILE HEADER */}
        <div className="wsmobileheader clearfix">
          <span
            className="smllogo"
            //  className={cn(styles.logo,"smlllogo")}
          >
            <img
              src="logo/RestroXLogo.png"
              alt="RestroX-logo-mobile-logo m"
              className={styles.mobileLogo}
            />
          </span>
          <a
            id="wsnavtoggle"
            onClick={() => toggleFun()}
            className="wsanimated-arrow"
          >
            <span />
          </a>
        </div>
        {/* NAVIGATION MENU */}
        <div className="wsmainfull menu clearfix">
          <div className={cn("wsmainwp clearfix", styles.menuMainDiv)}>
            {/* HEADER LOGO */}
            <div className="desktoplogo">
              <Link href="/">
                <a className="logo-black">
                  <img
                    src="logo/RestroXLogo.png"
                    alt="RestroX-logo-desktop-logo"
                    className={styles.logoDesktop}
                  />
                </a>
              </Link>
            </div>

            {/* MAIN MENU */}
            <nav
              className="wsmenu clearfix"
              //  style={{backgroundColor:"pink"}}
              // style={{ width: "90%", marginRight: "-4.5rem" }}
            >
              <div className="overlapblackbg" onClick={() => toggleFun()} />
              <ul
                className={`wsmenu-list ${
                  navHoverColor ? navHoverColor : "nav-skyblue-hover"
                }`}
              >
                {/* MEGAMENU */}
                <li className="mg_link">
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "home" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("home")}
                  >
                    {/* <i className="wsmenu-arrow" /> */}
                  </span>
                  {/* <Link href="#">
                    <a>
                      Home
                       <span className="wsarrow" />
                    </a>
                  </Link> */}
                </li>
                {/* END MEGAMENU */}
                {/* DROPDOWN MENU */}
                {/* <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "about" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("about")}
                  >
                    <i className="wsmenu-arrow" />
                  </span>
                  <Link href={`${singlePage ? "/about" : "#"}`}>
                    <a>About {!singlePage && <span className="wsarrow" />}</a>
                  </Link>
                  {!singlePage && (
                    <ul
                      className="sub-menu"
                      style={{
                        display: mobileMenuToggle === "about" ? "block" : "",
                      }}
                    >
                      <li>
                        <Link href="#content-2">Why OLMO?</Link>
                      </li>
                      <li>
                        <Link href="#content-5">Best Solutions</Link>
                      </li>
                      <li>
                        <Link href="#content-3">Integrations</Link>
                      </li>
                      <li>
                        <Link href="#content-10">How It Works</Link>
                      </li>
                      <li>
                        <Link href="#reviews-1">Testimonials</Link>
                      </li>
                    </ul>
                  )}
                </li> */}
                {/* DROPDOWN MENU */}
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "pages" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("pages")}
                  >
                    {/* <i className="wsmenu-arrow" /> */}
                  </span>
                  {/* <Link href="#">
                    <a>
                      Pages <span className="wsarrow" />
                    </a>
                  </Link> */}
                  {/* <div
                    className="wsmegamenu clearfix halfmenu"
                    style={{
                      display: mobileMenuToggle === "pages" ? "block" : "",
                    }}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/features">Features &amp; Addons</Link>
                          </li>
                          <li>
                            <Link href="/pricing">Pricing Packages</Link>
                          </li>
                          <li>
                            <Link href="/download">Download Page</Link>
                          </li>
                          <li>
                            <Link href="/projects">Our Projects</Link>
                          </li>
                          <li>
                            <Link href="/project-details">Project Details</Link>
                          </li>
                        </ul>
                      
                        <ul className="col-lg-6 link-list">
                          <li>
                            <Link href="/team">Meet The Team</Link>
                          </li>
                          <li>
                            <Link href="/faqs">FAQs Page</Link>
                          </li>
                          <li>
                            <Link href="/blog-listing">Blog Listing</Link>
                          </li>
                          <li>
                            <Link href="/single-post">Single Blog Post</Link>
                          </li>
                          <li>
                            <Link href="/terms">Terms &amp; Privacy</Link>
                          </li>
                          <li>
                            <Link href="/contacts">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </li>
                {/* END DROPDOWN MENU */}
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  {/* <Link href={`${singlePage ? "/features" : "#features-8"}`} > */}
                  {/* <Link> */}
                  <a
                    style={{ color: "#2C3E50" }}
                    onClick={() => window.location.reload(true)}
                    href="/"
                  >
                    Home
                  </a>
                  {/* </Link> */}
                </li>
                <li className="nl-simple">
                  <a style={{ color: "#2C3E50" }} href="/features">
                    Features
                  </a>
                </li>

                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple">
                  {/* <Link > */}
                  <a style={{ color: "#2C3E50" }} href="/pricing">
                    Pricing
                  </a>
                  {/* </Link> */}
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple clearfix">
                  {/* <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>About Us</Link> */}

                  <a style={{ color: "#2C3E50" }} href="/aboutus">
                    About Us
                  </a>
                </li>
                <li className="nl-simple">
                  {/* <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>Contact Us</Link> */}

                  <a style={{ color: "#2C3E50" }} href="/contacts">
                    Contact Us
                  </a>
                </li>
                {/* <li className="nl-simple "> */}
                <li className={styles.loginButton}>
                  {/* <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>Contact Us</Link> */}
                  {/* <Link href="https:/app.restrox.co/login"> */}
                  <Link href="https://app.restrox.co/login">
                    <a
                      // style={{ color: "#2C3E50", marginLeft: "8rem" }}
                      style={{ color: "#2C3E50" }}
                      target="_blank"
                      // className={styles.loginButton}
                    >
                      Login
                    </a>
                  </Link>
                </li>

                {/* HEADER BUTTON */}
                <li className="nl-simple getStartedLi">
                  {/* <Link href={`${singlePage ? "/pricing" : "#content-4"}`}> */}
                  {/* <Link href="https:/app.restrox.co/register"> */}
                  <Link href="https://app.restrox.co/register">
                    <a
                      style={{ color: "#da0819" }}
                      target="_blank"
                      className={`btn ${
                        btnCustomHover
                          ? btnCustomHover
                          : "btn-tra-white orange-red-hover"
                      } last-link`}
                    >
                      {getStartText ? "Get Started" : "Get Sarted"}
                    </a>
                    {/* className={`btn ${ }
                         btnCustomHover
                          ? btnCustomHover
                           : "btn-tra-white orange-red-hover"
                       } last-link`} */}
                  </Link>
                </li>

                {/* HEADER SOCIAL LINKS 													
									<li class="nl-simple white-color header-socials ico-20 clearfix" >
										<span><Link href="#" class="ico-facebook"><span class="flaticon-facebook"></span></Link></span>
										<span><Link href="#" class="ico-twitter"><span class="flaticon-twitter"></span></Link></span>
										<span><Link href="#" class="ico-instagram"><span class="flaticon-instagram"></span></Link></span>
										<span><Link href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></Link></span>	
									</li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// border: 1px solid transparent;
