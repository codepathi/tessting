const Demo17hero17 = () => {
  return (
    <section id="hero-17" className="bg-scroll rel hero-section division">
      <div className="container">
        {/* HERO TITLE */}
        <div className="row">
          <div className="col-md-9 col-lg-8">
            <div className="hero-17-title white-color mb-50">
              <h2 className="h2-xl">Boost your design workflow with OLMO</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-md-6 col-lg-5">
            <div className="hero-17-txt">
              {/* Text */}
              <p className="p-xl white-color">
                Quaerat sodales sapien euismod blandit at vitae ipsum primis
                undo and cubilia laoreet augue luctus magna dolor luctus sapien
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
              {/* Advantages List */}
              <ul className="advantages white-color clearfix mt-30">
                <li className="first-li">
                  <p>Version 2.10.074</p>
                </li>
                <li className="last-li">
                  <p>Free 30 days trial</p>
                </li>
              </ul>
            </div>
          </div>
          {/* HERO IMAGE */}
          <div className="col-md-6 col-lg-7">
            <div className="hero-17-img video-preview">
              <img
                className="img-fluid"
                src="/images/dashboard-04.png"
                alt="hero-image"
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

export default Demo17hero17;
