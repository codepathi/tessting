import { VideoWithBtn } from "../../VideoContent";

const Democontent10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 pb-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Title */}
              <h3 className="h3-xl">
                Get more sales with SEO, PPC, and Email Marketing
              </h3>
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
            <div className="img-block text-center wow fadeInUp">
              <img
                className="img-fluid"
                src="/images/startup.png"
                alt="content-image"
              />
            </div>
          </div>
        </div>
        {/* ACTION BUTTON */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
              <VideoWithBtn
                defText="See OLMO in Action"
                extraClass="video-popup2 btn btn-md btn-skyblue tra-grey-hover ico-15 ico-left"
              />
              {/* Advantages List */}
              <ul className="advantages mt-25 clearfix">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Democontent10;
