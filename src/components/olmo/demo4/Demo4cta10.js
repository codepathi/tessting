import Link from "next/dist/client/link";

const Demo4cta10 = () => {
  return (
    // <section id="cta-10" className="bg-04 pt-50 pb-50 cta-section division">
    // <section id="cta-10" className=" pt-50 pb-50 cta-section division" style={{backgroundColor:"#F4F4F9"}}> 
    // <section id="cta-10" className=" pt-50 pb-50 cta-section division"> 
    <section id="cta-10" className=" cta-section division"> 
      <div className="container white-color">
        <div className="cta-10-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-8 col-xl-7">
              <div className="cta-10-txt">
                {/* Title */}
                <h3 className="h3-md" style={{color:"#000"}}>
   
                  Change your restaurant <br></br> practices.
                </h3>
                {/* Text */}
                <p className="p-lg"
            
                 style={{color:"#000"}}>
                  Get started with RestroX. Your all in one app. Multiple
                  features, <br></br>incorporated all in one app.
                  
                </p>
                {/* Button */}
                <Link href="https://app.restrox.co/register" >
                  {/* <a className="btn btn-pink tra-white-hover"> */}
                  <a className="btn tra-white-hover" target="_blank">Get Started Now</a>
                </Link>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-4 col-xl-5">
              <div className="text-end">
                <div className="cta-10-img text-center">
                  <img
                    className="img-fluid"
                    // src="/images/img-25.png"
                    // src="/HomePageImages/img-25.png"
                    src="/assets/get-started-with-RestroX.png"
                    alt="Change your Restaurant Practices with RestroX"
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

export default Demo4cta10;
