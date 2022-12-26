import { VideoImage } from "../../VideoContent";

const Demo13hero13 = () => {
  return (
    <section id="hero-13" className="bg-scroll hero-section division">
      <div className="container">
        {/* HERO TITLE */}
        <div className="row">
          <div className="col-md-9 col-lg-8">
            <div className="hero-13-title mb-40">
              <h2 className="h2-lg">
                Convert your ideas into workable solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-md-6 col-lg-5">
            <div className="hero-13-txt">
              <p className="p-title-sm">Fringilla risus, luctus mauris</p>
              <p className="p-title-sm">Nemo ipsam egestas volute turpis</p>
              <p className="p-title-sm">Mauris in cubilia rutrum</p>
              <p className="p-title-sm">Mullam a donec nihil impedit</p>
              <p className="p-title-sm">Feugiat primis a ligula</p>
              {/* Tools List */}
              <div className="tools-list ico-40 mt-50">
                {/* Text */}
                <h6 className="h6-xl">Technologies We Use:</h6>
                {/* Icons */}
                <span className="flaticon-html-5" />
                <span className="flaticon-css-3" />
                <span className="flaticon-wordpress-logo" />
                <span className="flaticon-js" />
                <span className="flaticon-diamond-1" />
              </div>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-md-6 col-lg-7">
            <div className="hero-13-img video-preview">
              <VideoImage
                img="images/dashboard-04.png"
                extraClass="video-btn video-btn-xl bg-violet-red ico-90"
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

export default Demo13hero13;
