import Counter from "../../Counter";

const Demo24statistic1 = () => {
  return (
    <div
      id="statistic-1"
      className="bg-01 pt-70 pb-70 statistic-section division"
    >
      <div className="container white-color">
        {/* STATISTIC-1 WRAPPER */}
        <div className="statistic-1-wrapper">
          <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
            {/* STATISTIC BLOCK #1 */}
            <div id="sb-1-1" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  {/* <span className="count-element">28</span>% */}
                  <Counter end={28} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">وصول أسرع</h5>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div id="sb-1-2" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  {/* <span className="count-element">54</span>% */}
                  <Counter end={54} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">إنتاجية</h5>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div id="sb-1-3" className="col">
              <div className="statistic-block wow fadeInUp">
                {/* Digit */}
                <h2 className="h2-xl statistic-number">
                  {/* <span className="count-element">36</span>% */}
                  <Counter end={36} />%
                </h2>
                {/* Text */}
                <h5 className="h5-lg">وصول آمن</h5>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END STATISTIC-1 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Demo24statistic1;
