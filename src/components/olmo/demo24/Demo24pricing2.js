const Demo24pricing2 = () => {
  return (
    <section
      id="pricing-2"
      className="bg-whitesmoke-gradient wide-60 pricing-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">تسعير بسيط ومرن</h2>
              {/* Text */}
              <p className="p-xl">
                بطاقة الإئتمان غير مطالب بها. تغيير أو إلغاء خطتك في أي وقت
              </p>
            </div>
          </div>
        </div>
        {/* PRICING TABLES */}
        <div className="pricing-2-row pc-25">
          <div className="row row-cols-1 row-cols-md-3">
            {/* BASIC PLAN */}
            <div className="col">
              <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs">أساسي</h5>
                    <h6 className="h6-sm bg-lightgrey">وفر 30٪</h6>
                  </div>
                  {/* Price */}
                  <sup className="validity dark-color">
                    شهر / <span>99.</span>
                  </sup>
                  <span className="dark-color">7</span>
                  <sup className="dark-color">$</sup>
                  <p className="p-md">دفع 96 دولارًا سنويًا</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">25 مشروع</p>
                  </li>
                  <li>
                    <p className="p-md">10 قاعدة بيانات mySQL</p>
                  </li>
                  <li>
                    <p className="p-md">25 جيجا بايت من التخزين</p>
                  </li>
                  <li>
                    <p className="p-md">دعم متميز</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#"
                  className="btn btn-sm btn-tra-grey tra-stateblue-hover"
                >
                  اختر خطة
                </a>
              </div>
            </div>{" "}
            {/* END BASIC PLAN */}
            {/* AGENCY PLAN */}
            <div className="col">
              <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price */}
                <div className="pricing-plan">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs">وكالة</h5>
                    <h6 className="h6-sm bg-lightgrey">وفر 25٪</h6>
                  </div>
                  {/* Price */}
                  <sup className="validity dark-color">
                    شهر / <span>25.</span>
                  </sup>
                  <span className="dark-color">11</span>
                  <sup className="dark-color">$</sup>
                  <p className="p-md">دفع 135 دولارًا سنويًا</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">100 مشروع</p>
                  </li>
                  <li>
                    <p className="p-md">25 قاعدة بيانات mySQL</p>
                  </li>
                  <li>
                    <p className="p-md">80 جيجا بايت من التخزين</p>
                  </li>
                  <li>
                    <p className="p-md">دعم متميز</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a
                  href="#"
                  className="btn btn-sm btn-tra-grey tra-stateblue-hover"
                >
                  اختر خطة
                </a>
              </div>
            </div>{" "}
            {/* END AGENCY PLAN  */}
            {/* ADVANCED PLAN */}
            <div className="col">
              <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                {/* Plan Price  */}
                <div className="pricing-plan highlight">
                  {/* Plan Title */}
                  <div className="pricing-plan-title">
                    <h5 className="h5-xs">متقدم</h5>
                    <h6 className="h6-sm bg-stateblue white-color">شائع</h6>
                  </div>
                  {/* Price */}
                  <sup className="validity dark-color">
                    شهر / <span>99.</span>
                  </sup>
                  <span className="dark-color">15</span>
                  <sup className="dark-color">$</sup>
                  <p className="p-md">دفع 199 دولارًا سنويًا</p>
                </div>
                {/* Plan Features  */}
                <ul className="features">
                  <li>
                    <p className="p-md">مشاريع غير محدودة</p>
                  </li>
                  <li>
                    <p className="p-md">50 قاعدة بيانات mySQL</p>
                  </li>
                  <li>
                    <p className="p-md">500 جيجا بايت من التخزين</p>
                  </li>
                  <li>
                    <p className="p-md">دعم VIP</p>
                  </li>
                </ul>
                {/* Pricing Plan Button */}
                <a href="#" className="btn btn-sm btn-stateblue tra-grey-hover">
                  اختر خطة
                </a>
              </div>
            </div>{" "}
            {/* END ADVANCED PLAN */}
          </div>
        </div>{" "}
        {/* END PRICING TABLES */}
        {/* PRICING NOTICE TEXT */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="pricing-notice text-center mb-40">
              <p className="p-md">
                الأسعار المذكورة أعلاه لا تشمل الضرائب المطبقة بناءً على عنوان
                إرسال الفواتير الخاص بك. سيتم عرض السعر النهائي على صفحة الخروج
                ، قبل إتمام الدفع
              </p>
            </div>
          </div>
        </div>
        {/* PAYMENT METHODS */}
        <div className="payment-methods pc-30">
          <div className="row row-cols-1 row-cols-md-3">
            {/* Payment Methods */}
            <div className="col col-lg-5">
              <div className="pbox mb-40">
                {/* Title */}
                <h6 className="h6-md">طرق الدفع المقبولة</h6>
                {/* Payment Icons */}
                <ul className="payment-icons ico-50">
                  <li>
                    <img src="/images/png-icons/visa.png" alt="payment-icon" />
                  </li>
                  <li>
                    <img src="/images/png-icons/am.png" alt="payment-icon" />
                  </li>
                  <li>
                    <img
                      src="/images/png-icons/discover.png"
                      alt="payment-icon"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/png-icons/paypal.png"
                      alt="payment-icon"
                    />
                  </li>
                  <li>
                    <img src="/images/png-icons/jcb.png" alt="payment-icon" />
                  </li>
                  <li>
                    <img
                      src="/images/png-icons/shopify.png"
                      alt="payment-icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* Payment Guarantee */}
            <div className="col col-lg-4">
              <div className="pbox mb-40">
                {/* Title */}
                <h6 className="h6-md">ضمان استعادة الاموال</h6>
                {/* Text */}
                <p>
                  استكشف OLMO Premium لمدة 14 يومًا. إذا لم يكن ذلك مناسبًا
                  تمامًا ، فاسترد أموالك بالكامل.
                </p>
              </div>
            </div>
            {/* Payment Encrypted */}
            <div className="col col-lg-3">
              <div className="pbox mb-40">
                {/* Title */}
                <h6 className="h6-md">الدفع المشفر SSL</h6>
                {/* Text */}
                <p>معلوماتك محمية بواسطة تشفير 256 بت SSL.</p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END PAYMENT METHODS */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo24pricing2;
