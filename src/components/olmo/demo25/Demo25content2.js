import { VideoImage } from "../../VideoContent";

const Demo25content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 bg-04 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column video-preview wow fadeInRight">
              <VideoImage
                img="images/img-08.png"
                extraClass="video-btn video-btn-xl bg-violet-red ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column white-color wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id white-color txt-upcase">
                محسن تمامًا
              </span>
              {/* Title */}
              <h2 className="h2-xs">
                اجعل الأمر أبسط باستخدام الأوامر السريعة
              </h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل
                    وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
                    لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس
                    عشر
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                    الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                    العشوائية إلى النص.
                  </p>
                </li>
              </ul>
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

export default Demo25content2;
