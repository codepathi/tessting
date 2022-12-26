import Slider from "react-slick";

const Demo25reviews4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      id="reviews-4"
      className="rel pt-100 reviews-section division slickmargin"
    >
      {/* SECTION TITLE */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-60">
              {/* Title */}
              <h2 className="h2-md">قصص من عملائنا</h2>
              {/* Text */}
              <p className="p-xl">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-4-holder">
        <div className="container">
          <div className="row">
            {/* TESTIMONIALS CAROUSEL */}
            <div className="col-md-12">
              <Slider
                {...settings}
                className="owl-carousel owl-theme reviews-4-wrapper"
              >
                {/* TESTIMONIAL #1 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                      الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
                      الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم
                      إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو
                      عبارات محرجة أو غير لائقة مخبأة في هذا النص.
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-1.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">سكوت بوكسر</h6>
                        <p className="p-md">@scott_boxer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-2.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">جويل بيترسون</h6>
                        <p className="p-md">متصفحي الإنترنت</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                      الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
                      الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم
                      إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو
                      عبارات محرجة أو غير لائقة مخبأة في هذا النص.
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-3.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">ماريسول 19</h6>
                        <p className="p-md">@marisol19</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-4.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">ليزلي د.</h6>
                        <p className="p-md">مطور ويب</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-5.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">جينيفر هاربر</h6>
                        <p className="p-md">مطور التطبيق</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                      الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
                      الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم
                      إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو
                      عبارات محرجة أو غير لائقة مخبأة في هذا النص.
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-6.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">جوناثان بارنز</h6>
                        <p className="p-md">jQuery مبرمج</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                      الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع
                      ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي
                      منذ القرن الخامس عشر
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-7.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">مايك هاريس</h6>
                        <p className="p-md">مصمم جرافيك</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-4">
                  {/* Text */}
                  <div className="review-4-txt">
                    {/* Text */}
                    <p className="p-lg">
                      هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                      الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو
                      الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم
                      إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو
                      عبارات محرجة أو غير لائقة مخبأة في هذا النص.
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-8.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">إيفلين مارتينيز</h6>
                        <p className="p-md">مستشار ووردبريس</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #8 */}
              </Slider>
            </div>{" "}
            {/* END TESTIMONIALS CAROUSEL */}
          </div>
        </div>{" "}
        {/* End container */}
      </div>
    </section>
  );
};

export default Demo25reviews4;
