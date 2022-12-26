



const Features = () => {
  return (
    <section id="features-8" className="wide-60 features-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          {/* <div className="col-lg-10 col-xl-8"> */}
          <div className="col-lg-9 col-xl-8 col-md-6">

          
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">We are better Here is why?</h2>
            
              {/* Text */}
              <p className="p-xl">
              {/* <p className={cn(styles.pTag,"p.p-lg-m")}> */}
                RestroX is not just a POS system. It is an ultimate restaurant
                operating system gathered with high-end features compacted all
                in one app. It is enclosed with all the multifaceted
                requirements from orders, billings, sales, inventory, staff,
                social media, and accounting management in a single system.
              </p>
            </div>
          </div>
        </div>
        {/* FEATURES-8 WRAPPER */}
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    src="/images/restroX-best-for-operation.png"

                    alt="RestroX Best for Operation"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Best for operation</h5>
                {/* Text */}
                <p className="p-lg">
                  Operate your restaurant from the menu to inventory, staffing
                  to department, social media to reviews, and many more.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    // src="/images/img-22.png"
                    src="assets/medias/restroX-best-for-owners.png"
                    alt="RestroX Best For Onwers"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Best for Owners</h5>
                {/* Text */}
                <p className="p-lg">
                  Keep track of your employees and staff wherever you go
                  anywhere at any time.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  <img
                    className="img-fluid"
                    // src="/images/img-23.png"
                    // src="/HomePageImages/img-23.png"
                    // src="/images/img-25.png"
                    src="/assets/medias/RestroX-best-startups.png"
                    alt="Best For Startups RestroX"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Best for Startups</h5>
                {/* Text */}
                <p className="p-lg">
                RestroX is free so it is the best app for any startup business that is in need of a restaurant operating system.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-8 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Features;
