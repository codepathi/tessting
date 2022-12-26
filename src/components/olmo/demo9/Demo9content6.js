const Demo9content6 = () => {
  return (
    <section
      id="content-6"
      className="content-6 bg-03 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 col-lg-5">
            <div className="txt-block left-column white-color wow fadeInRight">
              {/* Title */}
              <h3 className="h3-xl">One brilliant idea for every client</h3>
              {/* Text */}
              <p className="p-lg">
                Aliqum mullam blandit tempor sapien gravida at donec ipsum porta
                justo. Velna vitae auctor and congue magna impedit luctus dolor
                volute
              </p>
              {/* Button */}
              <a href="#pricing-3" className="btn btn-skyblue tra-white-hover">
                {`Let's Get Started`}
              </a>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-7">
            <div className="img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-20.png"
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

export default Demo9content6;
