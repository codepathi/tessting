const Demo2content5 = () => {
    return (
      <section
        id="content-5"
        className="content-5 ws-wrapper content-section division"
      >
        <div className="container">
          <div className="content-5-wrapper">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block left-column wow fadeInRight">
                  {/* Section ID */}
                  <span className="section-id rounded-id txt-upcase" style={{fontWeight: "200"}}>
                    About us
                  </span>
                  {/* Title */}
                  <h3 className="h2-xs" style={{fontWeight: "350"}}>Shape your entire restaurant operation in one system</h3>
                  {/* List */}
                    <p>
                    RestroX is an ultimate combination of restaurant operating systems gathered with high-end features compacted all in one app. It is combined with all the features that a restaurant needs.
                    </p>
                  <p>
                  It brings together a varied range of services from integrated online ordering to tracking of inventory, managing your staff and business reports, automated inventory, and a cloud-based system.
                  </p>
                </div>
              </div>
              {/* END TEXT BLOCK */}
  
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block right-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/images/img-13.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
  
      </section>
    );
  };
  
  export default Demo2content5;
  