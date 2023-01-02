import styles from "./hero.module.css";
import { Col, Row, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import Link from "next/link";
import cn from "classnames";
import { useEffect, useContext, useState } from "react";
import { countryContext } from "../../../context/countryContext";
import countryList from "../../../../public/CountryData/country.json";

const Demo1Hero1 = (country) => {
  
  const {isNepal, countryCodeContext, setCountryCodeContext, setIsNepal} = useContext(countryContext);
  const [value, setValue] = useState()

  useEffect(()=> {
      setValue(countryCodeContext)
  }, [])
 

  // Change country according to select statement
  const changeCountry = (e) => {
    const countryCode = e.target.value
    setCountryCodeContext(e.target.value)
    setValue(e.target.value)

    // Set isNepal = false if other selected
    if(countryCodeContext != 'NP') {
      setIsNepal(undefined)
    }
    else{
      setIsNepal(true)
    }
  }
  
  
  return (
    <section id="hero-1" className="bg-scroll hero-section" >
      <div className="container">
        {/* <div className="row d-flex  align-items-center"> */}
        <div className={cn(styles.flexing,"row   align-items-center")}>

          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6">
            <select value={value} name="country" id="country" onChange={changeCountry}>
            {
              countryList.map((country)=>{
                return(
                <option value={country.code}>{country.name}</option>
                )
              })
            }
          </select>
          
         
          {countryCodeContext? <img src={`https://flagcdn.com/h40/${countryCodeContext.toLowerCase()}.png`} alt="Andorra flag"/> : (<></>)}

            <div className={styles.thecontent}>
              <h3 className={styles.thetitle}>
                Stop waiting. <br />
                Grow your <br />
                <ReactTypingEffect
                  text={["restaurant.", "cafe.", "bar."]}
                  className={`highlight-text d-inline-block ${styles.rendering}`}
                  speed="150"
                  eraseSpeed="100"
                  typingDelay="400"
                  eraseDelay="800"
                  cursorClassName="typed-cursor"
                />
              </h3>
              <p className={styles.theparagraph} style={{marginTop: "-20px"}}>
                {/* Change text depending on country  */}
              {isNepal ? <>Perform all the operations of your restaurant just <br></br> by using a
                single app in RestroX from Nepal</> 
                :(<>Perform all the operations of your restaurant just <br></br> by using a
                single app in RestroX from elsewhere</>)}
                
                <br className="d-none d-xs-block" />
              </p>
              {/* Newsletter */}
              <Row>
                <Col xs="12" className="col-xxl-10">
                  <div className={styles.box}>
                    {/* <form> */}
                    {/* <input
                        type={"email"}
                        name={"email"}
                        placeholder="Enter your email"
                        className="form-control"
                      /> */}
                    {/* <Link href="https:/app.restrox.co/register"> */}
                    {/* <Link> */}
                      {/* <Button
                        className={`btn ${styles.getStarted}`}
                        textTransform="capitalized"
                      >
                        <a target="_blank"> Get Started</a>
                      </Button> */}
                      <div className="btns-group mb-30 wow fadeInUp" style={{marginTop: "-30px"}}>
                        <a
                          href="https://app.restrox.co/register"
                          className="btn btn-green tra-white-hover mr-15"
                          target="_blank"
                        >
                          {/* Change button text depending on country  */}
                          {isNepal ? <>Suru garnus</> 
                        :(<>Get started</>)}
                        </a>
                      </div>
                    {/* </Link> */}

                    {/* </form> */}
                  </div>
                  <p className={styles.paragraphLets} style={{marginTop: "-5px"}}>
                    Free forever, no credit card
                    {/* <Link to="/innerpage/terms">Terms & Conditions.</Link> */}
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          {/* END HERO TEXT */}

          {/* HERO IMAGE */}
        <div className="col-md-5 col-lg-6">

<div className="hero-1-img wow fadeInLeft">
  <img
    className="img-fluid"
    // src="/images/hero-1-img.png"
    // src="HomePageImages/image-1-home-8.png"
    // src="RestroXNewImages/pngfile/image-1-home.png"
    // src="RestroXNewImages/image-home-latest.png"
    src="images/web_banner_restrox.png"
    alt="RestroX QR Scan and Digital Menu"
    style={{width: "100%"}}
  />
</div>
</div>
          
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,64L120,80C240,96,480,128,720,128C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo1Hero1;
