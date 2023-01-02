const Demo1content3_about = () => {
    return (
      <section
        id="content-3"
        className="content-3 wide-60 content-section division"
      >
        <div className="container">
          {/* TOP ROW */}
          <div className="top-row">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/images/img-05.png"
                    alt="content-image"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6" style={{marginTop: "-60px"}}>
                <div className="txt-block right-column wow fadeInLeft">
                  {/* TEXT BOX */}
                  <div className="txt-box mb-20">
                    {/* Title */}
                    <h5 className="h5-lg" style={{fontWeight: "300"}}>Don’t settle for less</h5>
                    {/* Text */}
                    <p className="p-lg">
                    Most businesses use various computer terminals, coupled with POS software, to ease the process of managing everyday operations and sales transactions. RestroX is the system that will provide all of these features.
                    </p>
                  </div>
                  {/* TEXT BOX */}
                  <div className="txt-box">
                    {/* Title */}
                    <h5 className="h5-lg" style={{fontWeight: "300"}}>Be updated, wherever you are</h5>
                        <p className="p-lg">
                        With RestroX not only high-end restaurants but the small business restaurants will be able to use them.
                        </p>
                        <p className="p-lg">
                        Compatible and can be operated both on IOS and android as well as the web.
                        </p>                      
                  </div>
                  {/* END TEXT BOX */}
                </div>
              </div>
              {/* END TEXT BLOCK */}
            </div>
          </div>
          {/* END TOP ROW */}
        </div>
        {/* End container */}
      </section>
    );
  };
  
  export default Demo1content3_about;
  