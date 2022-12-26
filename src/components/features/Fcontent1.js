import Demo7hero7 from "../olmo/demo7/Demo7hero7";

const Fcontent1 = () => {
  return (
    <section
      id="content-1"
      // className="content-1 wide-60 inner-page-hero content-section division"
      // className="content-1 inner-page-hero content-section division "
      className="content-1 content-section division "

    >
      {/* < Demo7hero7 /> */}
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* Section ID */}
              {/* <span className="section-id txt-upcase">Pixel Perfect</span> */}
              {/* Title */}
              <h2 className="h2-xs">
                {`Simplify your online ordering experience`}
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                  Help customers easily order their favorite menu
                  items with ease and take orders through the app from anywhere and from any device, anytime.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  With RestroX, you can manage and update menu items and take orders easily.

                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Enhance your customer experience with QR and digital menu solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                // src="/images/img-07.png"
                // src="/RestroXNewImages/restro-img1.png"
                src="/assets/simplify-ordering-online-system.png"

                

                alt="Simplify Online Ordering Experience with RestroX"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Fcontent1;
