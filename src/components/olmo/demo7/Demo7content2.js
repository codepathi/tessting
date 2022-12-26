import { VideoImage } from "../../VideoContent";

const Demo7content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 bg-whitesmoke-gradient wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column video-preview wow fadeInRight">
              <VideoImage
                img="images/img-09.png"
                extraClass="video-btn video-btn-xl bg-pink ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">Creative Alternative Solutions</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris auctor euismod an iaculis
                      luctus magna purus pretium ligula purus and quaerat
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
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Front-End Development</h5>
                {/* Text */}
                <p className="p-lg">
                  Quaerat sodales sapien euismod blandit at vitae ipsum primis
                  undo and cubilia laoreet augue and luctus magna dolor luctus
                  at egestas sapien vitae nemo egestas
                </p>
                {/* Tools List */}
                <div className="tools-list ico-40 mt-30">
                  {/* Text */}
                  <h6 className="h6-lg">Technologies We Use:</h6>
                  {/* Icons */}
                  <span className="flaticon-html-5 text-black-50" />
                  <span className="flaticon-css-3 text-black-50" />
                  <span className="flaticon-wordpress-logo text-black-50" />
                  <span className="flaticon-js text-black-50" />
                  <span className="flaticon-diamond-1 text-black-50" />
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

export default Demo7content2;
