import { VideoImage } from "../../VideoContent";

const Demo22content2 = () => {
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
              <VideoImage
                img="images/img-15.png"
                extraClass="video-btn video-btn-xl bg-skyblue ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Title */}
              <h3 className="h3-xl">Committed to top quality and results</h3>
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

export default Demo22content2;
