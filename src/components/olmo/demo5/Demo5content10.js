import { VideoImage } from "../../VideoContent";

const Demo5content10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 bg-snow pb-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Section ID */}
              <span className="section-id txt-upcase">Extremely Flexible</span>
              {/* Title */}
              <h2 className="h2-xs">
                Discover powerful features to boost your productivity
              </h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview wow fadeInUp">
              {/* Play Icon */}

              <VideoImage id="SZEflIVnhH8" img="images/dashboard-07.png" />
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5content10;
