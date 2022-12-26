function Demo16content1() {
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
              {/* Section ID */}
              <span className="section-id txt-upcase violet-red-color">
                Fast Performance
              </span>
              {/* Title */}
              <h2 className="h2-xs">Lightning fast and super powerful</h2>
              {/* Text */}
              <p className="p-lg">
                Quaerat sodales sapien euismod blandit purus a purus ipsum
                primis in cubilia laoreet augue luctus magna dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>
              {/* Text */}
              <p className="p-lg">
                Quaerat sodales sapien euismod blandit at vitae ipsum primis
                undo and cubilia laoreet augue and luctus magna dolor luctus at
                egestas sapien vitae nemo egestas volute and turpis dolores
                aliquam quaerat sodales a sapien
              </p>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-08.png"
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
}

export default Demo16content1;
