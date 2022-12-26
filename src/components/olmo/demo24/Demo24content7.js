const Demo24content7 = () => {
  return (
    <section
      id="content-7"
      className="content-7 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">سهولة التكامل</span>
              {/* Title */}
              <h2 className="h2-xs">مميزات بديهية ونتائج قوية</h2>
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
                    هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                    الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                    العشوائية إلى النص.
                  </p>
                </li>
              </ul>
              {/* Tools List */}
              <div className="tools-list ico-40 mt-30">
                {/* Text */}
                <h6 className="h6-lg">التقنيات التي نستخدمها:</h6>
                {/* Icons */}
                <span className="flaticon-html-5 text-black-50" />
                <span className="flaticon-css-3 text-black-50" />
                <span className="flaticon-wordpress-logo text-black-50" />
                <span className="flaticon-js text-black-50" />
                <span className="flaticon-diamond-1 text-black-50" />
              </div>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-6 order-first order-md-2">
            <div className="content-7-img wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/dashboard-05.png"
                alt="content-image"
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

export default Demo24content7;
