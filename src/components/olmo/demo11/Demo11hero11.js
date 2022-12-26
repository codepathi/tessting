const Demo11hero11 = () => {
  return (
    <section
      id="hero-11"
      className="bg-whitesmoke-gradient hero-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6 order-last order-md-2">
            <div className="hero-11-img text-center">
              <img
                className="img-fluid"
                src="/images/img-07.png"
                alt="hero-image"
              />
            </div>
          </div>
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6 order-first order-md-2">
            <div className="hero-11-txt">
              {/* Title */}
              <h2 className="h2-lg">Keeps Your Data Private &amp; Safe</h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis ligula risus auctor egestas and augue viverra
                mauri tortor in iaculis magna feugiat
              </p>
              {/* DOWNLOAD BUTTON */}
              <a href="#" className="os-btn bg-white d-flex align-items-center">
                {/* Icon */}
                <div className="os-btn-ico">
                  <div className="ico-50">
                    <img src="/images/png-icons/windows.png" alt="os-icon" />
                  </div>
                </div>
                {/* Text */}
                <div className="os-btn-txt">
                  <h6 className="h6-lg">Download for Windows</h6>
                  <p>try 30 days free trial</p>
                </div>
              </a>
              {/* DOWNLOAD BUTTON */}
              <a
                href="#"
                className="os-btn mac-os-btn bg-white d-flex align-items-center"
              >
                {/* Icon */}
                <div className="os-btn-ico">
                  <div className="ico-50">
                    <img src="/images/png-icons/mac-os.png" alt="os-icon" />
                  </div>
                </div>
                {/* Text */}
                <div className="os-btn-txt">
                  <h6 className="h6-lg">Download for Mac</h6>
                  <p>try 30 days free trial</p>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo11hero11;
