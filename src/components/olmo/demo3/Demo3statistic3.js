import Counter from "../../Counter";

const Demo3statistic3 = () => {
  return (
    <section id="statistic-3" className="bg-02 statistic-section division">
      <div className="container">
        <div className="statistic-3-wrapper white-color text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {/* STATISTIC BLOCK #1 */}
            <div className="col">
              <div className="statistic-block mb-40 wow fadeInUp">
                {/* Icon  */}
                <div className="statistic-ico ico-65">
                  <span className="flaticon-web-programming" />
                </div>
                {/* Text */}
                <h3 className="h3-md statistic-number">
                  4,
                  <Counter end={497} />
                </h3>
                <p className="p-lg txt-400">Finished Projects</p>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div className="col">
              <div className="statistic-block mb-40 wow fadeInUp">
                {/* Icon  */}
                <div className="statistic-ico ico-65">
                  <span className="flaticon-shuttle" />
                </div>
                {/* Text */}
                <h3 className="h3-md statistic-number">
                  3,
                  <Counter end={889} />
                </h3>
                <p className="p-lg txt-400">Websites Improved</p>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div className="col">
              <div className="statistic-block mb-40 wow fadeInUp">
                {/* Icon  */}
                <div className="statistic-ico ico-65">
                  <span className="flaticon-speech-bubble-3" />
                </div>
                {/* Text */}
                <h3 className="h3-md statistic-number">
                  5,
                  <Counter end={179} />
                </h3>
                <p className="p-lg txt-400">Happy Customers</p>
              </div>
            </div>
            {/* STATISTIC BLOCK #4 */}
            <div className="col">
              <div className="statistic-block mb-40 wow fadeInUp">
                {/* Icon  */}
                <div className="statistic-ico ico-65">
                  <span className="flaticon-help" />
                </div>
                {/* Text */}
                <h3 className="h3-md statistic-number">
                  1,
                  <Counter end={473} />
                </h3>
                <p className="p-lg txt-400">Tickets Closed</p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End statistic-3-wrapper */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3statistic3;
