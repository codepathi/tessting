const Demo1content3_about_2 = () => {
    return (
      <section
        id="content-3"
        className="content-3 wide-60 content-section division"
      >
        <div className="container">
          {/* TOP ROW */}
          <div className="top-row pb-50">
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
                    <h5 className="h5-lg" style={{fontWeight: "300"}}>Preparing your restaurant to blend in every situation</h5>
                    {/* Text */}
                    <p className="p-lg">
                    We offer the most exclusive services designed for the convenience of users.
                    </p>
                  </div>
                  
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
  
  export default Demo1content3_about_2;
  