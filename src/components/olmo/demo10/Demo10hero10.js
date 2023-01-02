import { VideoImage } from "../../VideoContent";

const Demo10hero10 = () => {
  return (
    <section id="hero-10" className="bg-scroll rel hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            {/* HERO TEXT */}
            <div className="hero-10-txt" style={{marginTop: "-80px"}}>
              {/* Title */}
              <h2 className="h2-md wow fadeInUp">
                The integration of information, design, and technology
              </h2>
              <p style={{marginTop: "-20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi adipisci eius tempora nesciunt ex? Iure, quia nemo aliquam eum quis.</p>
              {/* Buttons Group */}
              <div className="btns-group wow fadeInUp">
                <a
                  href="#content-3"
                  className="btn btn-violet-red tra-violet-red-hover mr-15"
                >
                  Find Out More
                </a>
                <a
                  href="#features-4"
                  className="btn btn-tra-black tra-violet-red-hover"
                >
                  Core Features
                </a>
              </div>
            </div>
            {/* HERO IMAGE */}
            <div className="hero-10-img video-preview wow fadeInUp">
              <VideoImage extraClass="video-btn video-btn-xl bg-violet-red ico-90" />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo10hero10;
