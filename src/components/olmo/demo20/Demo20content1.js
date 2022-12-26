const Demo20content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">Two-factor authentication</h5>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas volute and turpis dolores
                  aliquam quaerat sodales a sapien
                </p>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Cutting-edge encryption</h5>
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
              </div>{" "}
              {/* END TEXT BOX */}
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-07.png"
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

export default Demo20content1;
