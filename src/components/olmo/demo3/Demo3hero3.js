import { VideoWithBtn } from "../../VideoContent";

const Demo3hero3 = () => {
  return (
    <section id="hero-3" className="bg-scroll hero-section division  mt-120 ">
      <div className="container"
      //  style={{marginTop:"8rem"}}
       >
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            {/* <div className="hero-3-txt white-color"> */}
            <div className="hero-3-txt" 
            //  style={{marginBottom:"-2rem"}}
             >
              {/* Title */}
              <h2 className="h2-lg wow fadeInUp">
                {/* Impressive Web Marketing Solutions */}
                Grow your business with RestroX
                
              </h2>
              {/* Text */}
              <p className="p-xl wow fadeInUp">
                An ultimate combination of restaurant operating systems gathered
                with high-end features compacted all in one app.
              </p>
              {/* Buttons Group */}
              <div className="btns-group mb-30 wow fadeInUp">
                <a
                  href="https://app.restrox.co/register"
                  target="_blank"
                  className="btn btn-green tra-white-hover mr-15"
                >
                  Get Started
                </a>
                {/* <VideoWithBtn defText="See how it works" id="7e90gBu4pas"  /> */}
                {/* <VideoWithBtn defText="See how it works" id="LO0U7PwNlcs" /> */}
              </div>
              {/* Advantages List */}
              <ul className="advantages clearfix wow fadeInUp">
                <li className="first-li">
                  <p>Free Forever</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6 " style={{marginBottom:"-2rem"}}>
            {/* <div className="hero-3-img wow fadeInRight "  style={{marginTop:"-4rem",maginRight:"20rem"}}> */}
            <div className="hero-3-img wow fadeInRight "  style={{marginTop:"-4rem"}}>

              <img
                className="img-fluid"
                // src="/images/tablet-01.png"
                // src="/AboutUsImages/tablet-01.png"
                src="/assets/grow-with-restroX.png"

                
                // src="/AboutUsImages/Laptop and Mobile.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,192L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo3hero3;
