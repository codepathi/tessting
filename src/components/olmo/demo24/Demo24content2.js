import { VideoImage } from "../../VideoContent";

const Demo24content2 = () => {
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
                img="images/img-08.png"
                extraClass="video-btn video-btn-xl bg-pink ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">جميع الأدوات في مكان واحد</h5>
                {/* Text */}
                <p className="p-lg">
                  العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم
                  لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال في
                  أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج
                  البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم
                  إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض
                  العبارات الفكاهية إليها.
                </p>
              </div>
              <hr />
              {/* CONTENT BOX #1 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">لوريم إيبسوم حقيقي على الإنترنت.</h6>
                </div>
              </div>
              {/* CONTENT BOX #2 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">لوريم إيبسوم حقيقي على الإنترنت.</h6>
                </div>
              </div>
              {/* CONTENT BOX #3 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">لوريم إيبسوم حقيقي على الإنترنت.</h6>
                </div>
              </div>
              {/* CONTENT BOX #4 */}
              <div className="cbox-3 mb-10">
                <div className="cbox-3-ico ico-15">
                  <span className="flaticon-check purple-color" />
                </div>
                <div className="cbox-3-txt">
                  <h6 className="h6-lg">لوريم إيبسوم حقيقي على الإنترنت.</h6>
                </div>
              </div>
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

export default Demo24content2;
