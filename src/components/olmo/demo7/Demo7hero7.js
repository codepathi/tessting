import { VideoWithBtn } from "../../VideoContent";

const Demo7hero7 = () => {
  return (
    // <section id="hero-7" className="bg-scroll hero-section division mt-100 " 
    <section id="hero-7" className="bg-scroll hero-section division mt-100 "  

    // style={{marginTop:"6rem"}}
    >

      <div className="container" style={{marginTop:"-2rem"}}>
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            <div className="hero-7-txt white-color wow fadeInLeft">
              {/* Rounded Logo */}
              {/* <div className="hero-logo-rounded bg-tra-white mb-40">
                <img
                  className="img-fluid"
                  src="/images/logo-white-sm.png"
                  alt="hero-logo"
                />
                <span>OLMO.DESIGN</span>
              </div> */}
              {/* Title */}
              <h2 className="h2-xl" style={{color:"#000"}}>Multiple Restaurants, Multiple Roles, 
              <br />One App!
                  </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg"  style={{color: "rgba(38, 39, 41, 0.7)"}}>
                  It’s easy to manage your chain restaurants. Monitor your restaurant's activity from anywhere through a single system.

                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg"  style={{color: "rgba(38, 39, 41, 0.7)"}}>
                  With a more secure hierarchy, it allows access to confidential and 
                  non-confidential information based on your responsibilities in the restaurant.
                  </p>
                </li>
              </ul>
              {/* Buttons Group */}
              {/* <div className="btns-group mt-35"> */}
              <div className="btns-group mb-30 wow fadeInUp">

              
                <a
                  href="https://app.restrox.co/register"
                  // className="btn btn-pink tra-white-hover mr-15"
                  className="btn btn-green tra-white-hover mr-15"
                  target="_blank"
                >
                  Get Started
                </a>
                {/* <VideoWithBtn
                  defText="See how it works"
                  extraClass="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                  id="7e90gBu4pas"
                /> */}
              </div>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6">
            <div className="hero-7-img text-center wow fadeInRight">
              <img
                className="img-fluid"
                // src="/images/dashboard-06.png"
                // src="/images/dashboard-06.png"
                // src="/RestroXNewImages/pngfile/restro-4-sample.png"
                src="/assets/restrox-dashboard.png"
                alt="RestroX Dashboard"
                // style={{width:"45rem",height:"30rem"}}
                // style={{width:"70rem",height:"40rem"}}

              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};
export default Demo7hero7;
2