import { VideoImage } from "../../VideoContent";

const Demo9content10a = () => {
  return (
    <section
      id="content-10a"
      className="content-10 wide-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              <h3 className="h3-xl">
                Our SEO services will help you to dominate the search engines
              </h3>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview">
              <VideoImage
                extraClass="video-btn video-btn-xl bg-skyblue ico-90"
                img="images/seo-07.png"
              />
            </div>
          </div>
        </div>
        {/* ADVANTAGES LIST */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
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

export default Demo9content10a;
