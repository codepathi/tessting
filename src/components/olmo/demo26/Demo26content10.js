import { VideoWithBtn } from "../../VideoContent";

const Demo26content10 = () => {
  return (
    <section
      id="content-10"
      className="content-10 wide-100 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">شارك اللحظات. شارك الحياة.</h2>
              {/* Text */}
              <p className="p-xl">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس
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
                src="/images/social-networks.png"
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
                defText="راجع OLMO أثناء العمل"
                extraClass="video-popup2 btn btn-md btn-orange-red tra-grey-hover ico-15 ico-left"
              />
              {/* Advantages List */}
              <ul className="advantages mt-25 clearfix">
                <li className="first-li">
                  <p>تجربة مجانية لمدة 30 يومًا</p>
                </li>
                <li>
                  <p>دعم حصري</p>
                </li>
                <li className="last-li">
                  <p>بدون رسوم</p>
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

export default Demo26content10;
