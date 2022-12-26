const Demo12content7 = () => {
  return (
    <section
      id="content-7"
      className="content-7 bg-whitesmoke-gradient wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                Easy Integration
              </span>
              {/* Title */}
              <h2 className="h2-xs">Intuitive features, powerful results</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Fringilla risus, luctus mauris auctor euismod an iaculis
                    luctus magna purus pretium ligula purus and quaerat
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Nemo ipsam egestas volute turpis dolores undo ultrice
                    aliquam quaerat at sodales sapien purus
                  </p>
                </li>
              </ul>
              {/* Tools List */}
              <div className="tools-list ico-40 mt-30">
                {/* Text */}
                <h6 className="h6-lg">Technologies We Use:</h6>
                {/* Icons */}
                <span className="flaticon-html-5 text-black-50" />
                <span className="flaticon-css-3 text-black-50" />
                <span className="flaticon-wordpress-logo text-black-50" />
                <span className="flaticon-js text-black-50" />
                <span className="flaticon-diamond-1 text-black-50" />
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-6 order-first order-md-2">
            <div className="content-7-img wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/dashboard-05.png"
                alt="content-image"
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

export default Demo12content7;
