const Demo19hero19 = () => {
  return (
    <section id="hero-19" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6">
            <div className="hero-19-txt white-color">
              {/* Rounded Logo */}
              <div className="hero-logo-rounded bg-tra-white mb-45 wow fadeInUp">
                <img
                  className="img-fluid"
                  src="/images/logo-white-sm.png"
                  alt="hero-logo"
                />
                <span>OLMO.MARKETING</span>
              </div>
              {/* Title */}
              <h2 className="h2-lg wow fadeInUp">
                tions for Creative Minds
              </h2>
              {/* Text */}
              <p className="p-xl wow fadeInUp">
                Semper lacus cursus porta tellus neque dolor primis magna nullam
                laoreet potenti undo tempor neque and luctus and feugiat. Justo
                integer at odio
              </p>
              {/* Watch Video Link */}
              <div className="watch-video wow fadeInUp">
                <div className=" d-flex align-items-center">
                  {/* Link */}
                  <a
                    className="video-popup1"
                    href="https://www.youtube.com/embed/SZEflIVnhH8"
                  >
                    <div className="watch-video-link bg-tra-white ico-35">
                      <span className="flaticon-play-button" />
                    </div>
                  </a>
                  {/* Text */}
                  <div className="watch-video-txt">
                    <p className="p-lg video-txt-lg">Watch the Video</p>
                    <p className="video-txt-sm">2:40 min</p>
                  </div>
                </div>
              </div>{" "}
              {/* End Watch Video Link */}
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6">
            <div className="hero-19-img wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/tablet-01.png"
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

export default Demo19hero19;
