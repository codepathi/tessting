const Aboutcontent3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* TOP ROW */}
        <div className="top-row pb-50">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-last order-lg-2">
              <div className="txt-block left-column wow fadeInRight">
                {/* Section ID */}
                <span className="section-id txt-upcase">About us</span>
                {/* Title */}
                <h2 className="h2-xs">Shape your entire restaurant operation
in one system</h2>
                {/* Text */}
                <p className="p-lg">
                RestroX is an ultimate combination of restaurant operating systems gathered with high-end features compacted all in one app. It is combined with all the features that a restaurant needs.

                </p>
                {/* Text */}
                <p className="p-lg">
                It brings together a varied range of services from integrated online ordering to tracking of inventory, managing your staff and business reports, automated inventory, and a cloud-based system. 
                 
                </p>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-first order-md-2">
              <div className="img-block left-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  // src="/images/img-16.png"
                  // src="/assets/shape-your-restaurant-restroX.png"
                  src="/assets/shape-restaurant-restroX.png"

                  
                  alt="Shape your entire restaurant operation with RestroX"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  // src="/images/img-17.png"
                  src="/assets/pos-software-restrox.png"
                  alt="Pos Software RestroX"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* TEXT BOX */}
                <div className="txt-box mb-25">
                  {/* Title */}
                  <h5 className="h5-lg">Don’t settle for less</h5>
                  {/* Text */}
                  <p className="p-lg">
                  Most businesses use various computer terminals, coupled with POS software, to ease the process of managing everyday operations and sales transactions. RestroX is the system that will provide all of these features.

                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Be updated, wherever you are</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      With RestroX not only high-end restaurants but the small business restaurants will be able to use them.

                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      Compatible and can be operated both on IOS and android as well as the web. 
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>
        </div>{" "}
        {/* END BOTTOM ROW */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Aboutcontent3;
