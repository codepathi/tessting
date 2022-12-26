const Demo2content5_2 = () => {
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
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Fast Performance
                </span>
                {/* Title */}
                <h2 className="h2-xs">Committed to top quality and results</h2>
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
                      Quaerat sodales sapien euismod purus blandit
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
              </div>

              </div>
            </div>
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
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2content5_2;
