import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { scroll } from "../utils/utils";
import styles from "./headers.module.css";
import cn from "classnames";
import { countryContext } from "../context/countryContext";
// import countryList from "../../public/CountryData/country.json";
import Popup from "../../pages/popup";

const Header = ({
  navLight,
  navHoverColor,
}) => {


  //Set country select popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = ()=> {
    setIsPopupOpen(true)
  }
  const closePopup = () => {
    setIsPopupOpen(false)
  }

  //Import contexts 
  const {isNepal, countryCodeContext, setCountryCodeContext, setIsNepal} = useContext(countryContext);
  
   // Change country according to select statement
  //  const changeCountry = (e) => {
  //   const countryCode = e.target.value
  //   setCountryCodeContext(e.target.value)

  //   // Set isNepal = false if other selected
  //   if(countryCode != 'NP') {
  //     setIsNepal(undefined)
  //   }
  //   else{
  //     setIsNepal(true)
  //   }
  // }

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
                    style={{width: "60%"}}
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
                
                <li>
                  <span
                    className={`wsmenu-click ${
                      mobileMenuToggle === "pages" ? "ws-activearrow" : ""
                    }`}
                    onClick={() => toggleMenu("pages")}
                  >
                    {/* <i className="wsmenu-arrow" /> */}
                  </span>
                  
                </li>
                <li className="nl-simple">
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
                  <Link href="/pricing">
                  <a style={{ color: "#2C3E50" }} href="/pricing">
                    Pricing
                  </a>
                  </Link>
                </li>
                {/* SIMPLE NAVIGATION LINK */}
                <li className="nl-simple clearfix">
                  {/* <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>About Us</Link> */}

                  <a style={{ color: "#2C3E50" }} href="/abouts">
                    About Us
                  </a>
                </li>
                <li className="nl-simple">
                  {/* <Link href={`${singlePage ? "/faqs" : "#faqs-2"}`}>Contact Us</Link> */}

                  <a style={{ color: "#2C3E50" }} href="/contacts">
                    Contact Us
                  </a>
                </li>
                <li className={styles.loginButton}>
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
                <li className="nl-simple countryChangeDiv">
                  
                    <a
                      style={{ color: "#2C3E50" }}
                    >
                    <div onClick={openPopup} >
                    {/* Country Change div, styling in popup.css */}
                    <div className="changeCountryContainer">                    
                    {countryCodeContext?<div className="flag" style={{backgroundImage: `url(https://flagcdn.com/h40/${countryCodeContext.toLowerCase()}.png)`}}>  </div>: (<div className="flag">  </div>)}                    
                    <div className="divider">
                    </div>
                    <div className="sideArrow">
                      &gt;
                    </div>
                    </div>
                    </div>  


                    <Popup open={isPopupOpen} closePopup = {closePopup}/>
                  </a>
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
