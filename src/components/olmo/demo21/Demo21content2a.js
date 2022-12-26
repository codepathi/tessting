const Demo21content2a = () => {
  return (
    <section
      id="content-2a"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-06.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">Totally Optimized</span>
              {/* Title */}
              <h2 className="h2-xs">Work smarter with powerful features</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Fringilla risus, luctus mauris orci auctor euismod iaculis
                    luctus magna purus pretium ligula purus undo quaerat tempor
                    sapien rutrum mauris quaerat ultrice
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Quaerat sodales sapien euismod purus blandit
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Nemo ipsam egestas volute turpis dolores undo ultrice
                    aliquam quaerat at sodales sapien purus
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo21content2a;
