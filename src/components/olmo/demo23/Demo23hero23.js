import { VideoImage } from "../../VideoContent";

const Demo23hero23 = () => {
  return (
    <section id="hero-23" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            <div className="hero-23-txt white-color wow fadeInRight">
              {/* Title */}
              <h2 className="h2-sm">
                We craft marketing and digital products that grow business
              </h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis and ligula laoreet auctor mauris auctor laoreet
                and pretium augue cubilia
              </p>
              {/* Button */}
              <a href="#" className="btn btn-violet-red tra-white-hover">
                Find Out More
              </a>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6">
            <div className="hero-23-img video-preview wow fadeInLeft">
              <VideoImage
                img="images/hero-23-img.jpg"
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

export default Demo23hero23;
