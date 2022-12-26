import Counter from "../../Counter";

const Demo25statistic2 = () => {
  return (
    <section id="statistic-2" className="wide-100 statistic-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* STATISTIC BLOCK #2 */}
          <div className="col-sm-6 col-md-7 col-lg-2 order-last order-lg-2">
            <div className="statistic-block m-row wow fadeInUp">
              {/* Text */}
              <h2 className="h2-title-xs statistic-number">
                <Counter end={4.86} decimals={2} />
              </h2>
              {/* Rating */}
              <div className="txt-block-rating ico-15 yellow-color">
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-1" />
                <span className="flaticon-star-half-empty" />
              </div>
              <p className="p-lg txt-400">تقييم 8،376</p>
            </div>
          </div>
          {/* STATISTIC BLOCK #1 */}
          <div className="col-sm-6 col-md-5 col-lg-3 offset-lg-1 order-last order-lg-2">
            <div className="statistic-block m-row wow fadeInUp">
              {/* Text */}
              <h2 className="h2-title-xs statistic-number m-bottom">
                ألف <Counter end={65} />
              </h2>
              <p className="p-lg mt-20">التنزيلات النشطة من المجتمع</p>
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="txt-block right-column wow fadeInLeft">
              <h3 className="h3-xs">
                أكثر من 65000 مستخدم حول العالم يستخدمون بالفعل OLMO بنشاط
              </h3>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo25statistic2;
