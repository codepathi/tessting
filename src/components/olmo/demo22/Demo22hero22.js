const Demo22hero22 = () => {
  return (
    <section id="hero-22" className="hero-section division">
      <div className="container">
        <div className="hero-22-wrapper bg-tra-blue">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                {/* Title */}
                <h3 className="h3-xl">Start your online business with OLMO</h3>
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
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/images/hero-22-img.png"
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

export default Demo22hero22;
