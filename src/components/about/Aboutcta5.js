const Aboutcta5 = () => {
  return (
    <section id="cta-5" className="cta-section division">
      <div className="container">
        {/* <div className="rel bg-04 cta-5-wrapper"> */}
        <div className="rel  cta-5-wrapper" style={{backgroundColor:"#FBFBFD"}}>

          <div className="row justify-content-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-8">
              <div className="cta-5-txt white-color text-center">
                {/* Title */}
                <h2 className="h2-xs" style={{color: "rgba(38, 39, 41, 0.7)"}}>It's easy to get started.</h2>
                {/* Text */}
                <p className="p-xl" style={{color: "rgba(38, 39, 41, 0.7)"}}>
                  What makes us the best? It's the support we provide. Let's get in touch now.
                </p>
                {/* Button */}
                {/* <a
                  href="#pricing-2"
                  className="btn btn-skyblue tra-white-hover"
                >
                  Get Started Now
                </a> */}
                <div className="btns-group mb-30 wow fadeInUp">
                  <a
                    href="/contacts"
                    target="_blank"
                   
                    className="btn btn-green tra-white-hover mr-15"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Aboutcta5;
