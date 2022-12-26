import { VideoImage } from "../../VideoContent";

const Demo6content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column video-preview wow fadeInRight">
              <VideoImage img="images/img-08.png" />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">All Tools in One Place</h5>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas volute and turpis dolores
                  aliquam quaerat sodales a sapien
                </p>
              </div>
              <hr />
              {/* CONTENT BOX #1 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">
                    Egestas volute turpis dolores ultrice
                  </h6>
                </div>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">
                    Quaerat sodales sapien euismod purus
                  </h6>
                </div>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">Luctus mauris orci auctor euismod</h6>
                </div>
              </div>
              {/* CONTENT BOX #4 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">Magna dolor luctus at egestas</h6>
                </div>
              </div>
            </div>
          </div>
          {/* END TEXT BLOCK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo6content2;
