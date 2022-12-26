const Ffeatures8 = () => {
  return (
    <section id="features-8" className="wide-60 features-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">It’s easy. Experience exciting features for free!
              
              </h2>
              {/* Text */}
              <p className="p-xl">
              Yes, it’s free. With RestroX, you can manage your entire operation
              of the restaurant regardless of your business type by 
              just downloading the app for free. Get the app now!
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
                    src="/assets/medias/user-friendly.png"
                    alt="user friendly restrox"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">User Friendly</h5>
                {/* Text */}
                <p className="p-lg">
                An app that is both user-friendly and compatible
                with users for better functionality and performance.
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
                    // src="/images/img-25.png"
                    src="/assets/medias/easy-started-restrox.png"
                    alt="fully featured with restrox"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Fully Featured</h5>
                {/* Text */}
                <p className="p-lg">
                Many features are built in to set up your restaurant right away.
                Since it's free everyone can just download and access its features.
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
                    // src="/images/img-24.png"
                    src="/assets/medias/customize-app.png"
                    alt="customize the app with restrox"
                  />
                </div>
                {/* Title */}
                <h5 className="h5-md">Customizable</h5>
                {/* Text */}
                <p className="p-lg">
                Build up your restaurant according to your need in the app. Contact us or see pricing plans to customize the app according to your needs.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END FEATURES-8 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Ffeatures8;
