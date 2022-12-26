const Demo14pricing1 = () => {
  return (
    <section
      id="pricing-1"
      className="bg-snow wide-70 pricing-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Simple and Flexible Pricing</h2>
              {/* Text */}
              <p className="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis a libero tempus, blandit and cursus varius and magnis
                sapien
              </p>
            </div>
          </div>
        </div>
        {/* PRICING TABLES */}
        <div className="pricing-1-row pc-25">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FREE PLAN */}
            <div className="col">
              <div className="pricing-1-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <h5 className="h5-xs">OLMO Free</h5>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">0</span>
                  <sup className="validity dark-color">
                    <span>.00</span> / month
                  </sup>
                  <p className="p-md">
                    The price per one user. Change or cancel your plan anytime
                  </p>
                  {/* Pricing Plan Button */}
                  <a
                    href="#"
                    className="btn btn-sm btn-tra-grey tra-violet-red-hover"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END FREE PLAN */}
            {/* MONTHLY PLAN */}
            <div className="col">
              <div className="pricing-1-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <h5 className="h5-xs">Monthly Billing</h5>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">13</span>
                  <sup className="validity dark-color">
                    <span>.99</span> / month
                  </sup>
                  <p className="p-md">
                    The price per one user. Change or cancel your plan anytime
                  </p>
                  {/* Pricing Plan Button */}
                  <a
                    href="#"
                    className="btn btn-sm btn-tra-grey tra-violet-red-hover"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END MONTHLY PLAN  */}
            {/* ANNUAL PLAN */}
            <div className="col">
              <div className="pricing-1-table bg-white rel mb-40 wow fadeInUp">
                {/* Hightlight Badge */}
                <div className="badge-wrapper">
                  <div className="highlight-badge bg-violet-red white-color">
                    <h6 className="h6-md">Best Value</h6>
                  </div>
                </div>
                {/* Plan Price */}
                <div className="pricing-plan highlight">
                  {/* Plan Title */}
                  <h5 className="h5-xs">Annual Billing</h5>
                  {/* Price */}
                  <sup className="dark-color">$</sup>
                  <span className="dark-color">10</span>
                  <sup className="validity dark-color">
                    <span>.75</span> / month
                  </sup>
                  <p className="p-md">
                    The price per one user. Change or cancel your plan anytime
                  </p>
                  {/* Pricing Plan Button */}
                  <a
                    href="#"
                    className="btn btn-sm btn-violet-red tra-grey-hover"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* END ANNUAL PLAN */}
          </div>
        </div>{" "}
        {/* END PRICING TABLES */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo14pricing1;
