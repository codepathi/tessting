const Demo2content4 = () => {
  return (
    <section id="content-4" className="content-4 pt-80 content-section">
      <div className="bg-inner bg-04 pb-100 division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6 order-end order-md-2">
              <div className="content-4-img left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/images/img-03.png"
                  alt="content-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6 order-first order-md-2">
              <div className="txt-block right-column white-color wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id rounded-id txt-upcase bg-tra-white">
                  Download OLMO
                </span>
                {/* Title */}
                <h2 className="h2-xs">Save your time and effort with OLMO</h2>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas
                </p>
                {/* STORE BADGES */}
                <div className="stores-badge">
                  {/* AppStore */}
                  <a href="#" className="store">
                    <img
                      className="appstore"
                      src="/images/appstore-white.png"
                      alt="appstore-badge"
                    />
                  </a>
                  {/* Google Play */}
                  <a href="#" className="store">
                    <img
                      className="googleplay"
                      src="/images/googleplay-white.png"
                      alt="googleplay-badge"
                    />
                  </a>
                  {/* Aamazon Market 
                                                    <a href="#" class="store">
                                                         <img class="amazon" src="/images/amazon.png" alt="amazon-badge" />
                                                    </a>  */}
                  {/* Mac AppStore 
                                                    <a href="#" class="store">
                                                         <img class="mac-appstore" src="/images/macstore.png" alt="macstore-badge" />
                                                    </a> */}
                  {/* Microsoft Store  
                                                    <a href="#" class="store">
                                                         <img class="microsoft" src="/images/microsoft.png" alt="microsoft-badge" />
                                                    </a> */}
                </div>
                {/* END STORE BADGES */}
              </div>
            </div>
            {/* END CONTENT TXT */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </div>
      {/* End Inner Background */}
    </section>
  );
};

export default Demo2content4;
