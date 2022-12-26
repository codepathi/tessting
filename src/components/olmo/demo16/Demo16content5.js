const Demo16content5 = () => {
  return (
    <section
      id="content-5"
      className="content-5 ws-wrapper content-section division"
    >
      <div className="container">
        <div className="content-5-wrapper bg-whitesmoke">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                {/* Section ID */}
                <span className="section-id txt-upcase violet-red-color">
                  Download OLMO
                </span>
                {/* Title */}
                <h2 className="h2-xs">Save your time and effort with OLMO</h2>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris auctor euismod an iaculis
                      luctus magna purus pretium ligula purus and quaerat sapien
                      rutrum mauris auctor
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Nemo ipsam egestas volute turpis dolores ligula and
                      aliquam quaerat at sodales sapien purus
                    </p>
                  </li>
                </ul>
                {/* STORE BADGES */}
                <div className="stores-badge">
                  {/* AppStore */}
                  <a href="#" className="store">
                    <img
                      className="appstore"
                      src="/images/appstore.png"
                      alt="appstore-badge"
                    />
                  </a>
                  {/* Google Play */}
                  <a href="#" className="store">
                    <img
                      className="googleplay"
                      src="/images/googleplay.png"
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
                </div>{" "}
                {/* END STORE BADGES */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/img-12.png"
                  alt="content-image"
                />
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

export default Demo16content5;
