const Demo17cta9 = () => {
  return (
    <section id="cta-9" className="bg-01 wide-80 cta-section division">
      <div className="container">
        <div className="row justify-content-md-center">
          {/* CALL TO ACTION TEXT */}
          <div className="col col-lg-8">
            <div className="cta-9-txt text-center">
              {/* Title */}
              <h2 className="h2-xs white-color">
                Getting Started is Fast &amp; Easy
              </h2>
              <p className="p-xl white-color mb-35">
                Download OLMO on your Windows or Mac and get 30 days free trial.
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
          {/* END CALL TO ACTION TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo17cta9;
