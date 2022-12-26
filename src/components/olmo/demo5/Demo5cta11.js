import Link from "next/dist/client/link";
const Demo5cta11 = () => {
  return (
    // <section id="cta-11" className="bg-snow cta-section division" style={{marginTop:"2rem"}}>
    <section id="cta-11" className="bg-snow cta-section division">

      <div className="container">
        {/* <div className="bg-tra-purple cta-11-wrapper"> */}
        <div className="bg-snow  cta-11-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                {/* Title */}
                <h2 className="h2-xs">It's easy to get Started.</h2>
                {/* Text */}
                <p className="p-lg">
                  What makes us the best? It's the support we provide.
                </p>
                {/* Button */}
                {/* <Link href=""> */}
                  {/* <a className="btn btn-violet-red tra-violet-red-hover">
                    Get Started Now
                  </a> */}
                  {/* <a className="btn ">Get Started Now</a> */}
                {/* </Link> */}
              </div>
              <div className="btns-group mb-30 wow fadeInUp" style={{marginTop:"1rem"}}>
                <a
                  href="/contacts" target="_blank"
                  className="btn btn-green tra-white-hover mr-15"
                >
                  Contact Us
                </a>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-5">
              <div className="text-end">
                <div className="cta-11-img text-center">
                  <img
                    className="img-fluid"
                    // src="/images/img-25.png"
                    src="/assets/medias/easy-started-restrox.png"

                    
                    alt="Get started with RestroX"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5cta11;
