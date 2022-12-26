import { VideoImage } from "../../VideoContent";

const Demo12hero12 = () => {
  return (
    <section id="hero-12" className="rel hero-section division">
      <div className="container">
        {/* HERO TEXT */}
        <div className="row">
          <div className="col-lg-8 offset-lg-1">
            <div className="hero-12-txt">
              {/* Rounded Logo */}
              <div className="hero-logo-rounded bg-grey mb-40">
                <img
                  className="img-fluid"
                  src="/images/logo-01-sm.png"
                  alt="hero-logo"
                />
                <span>OLMO.DESIGN</span>
              </div>
              {/* Title */}
              <h2 className="h2-xl">
                Minimum cost solutions for all your web needs
              </h2>
              {/* Text */}
              <p>
                Handcrafted HTML5 landing page template. High quality solution
                for those who want a beautiful and powerful website
              </p>
            </div>
          </div>
        </div>{" "}
        {/* HERO TEXT */}
        {/* HERO IMAGE */}
        <div className="row">
          <div className="col">
            <div className="hero-12-img video-preview">
              <VideoImage extraClass="video-btn video-btn-xl bg-violet-red ico-90" />
            </div>
          </div>
        </div>{" "}
        {/* END HERO IMAGE */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12hero12;
