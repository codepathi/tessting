import Slider from "react-slick";

const CustomersReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section
      id="reviews-1"
      className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Stories From Our Customers</h2>
              {/* Text */}
              <p className="p-xl">
                {/* Some text here  */}
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-1-wrapper">
              <Slider {...settings}>
                {/* TESTIMONIAL #1 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    So I discovered this company while on one of my frequent visits to a youtube video. I found their promo video and took a look at their website page. I looked at them I found their services flexible and the system is very efficient to use. I hope to give them good business.
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
                        <h6 className="h6-xl">Manny Hayes</h6>
                        <p className="p-md">Owner of a restaurant</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    The most experienced software development team. They are a young team, smart, innovative, and know what they are doing. Thanks for helping me. Cheers!
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
                        <h6 className="h6-xl">Narik fais</h6>
                        <p className="p-md">Manager of a cafe</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    They have gone above and beyond in getting things to run the way the site I have been working with wants them to. Response time for support is astonishingly great. I look forward to continuing working with them in the future
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
                        <h6 className="h6-xl">Natalie Graham</h6>
                        <p className="p-md">Owner of food truck</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    RestroX is unbelievable. If you dream of what you want in a restaurant operating system, RestroX can do it! There has been a lot of thought put into this system. Never a crash. The support team is great too. Never a long wait.
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
                        <h6 className="h6-xl">Indra Ranjit</h6>
                        <p className="p-md">Owner of Ranjit Food and Drinks</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    Great system Great support. The entire team has been great to work with. The system is fast and friendly. Will be recommending RestroX to my peers owning a restaurant!
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
                        <h6 className="h6-xl">Ishan Maiti</h6>
                        <p className="p-md">Manager at Newari Cafe House</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    What an amazing group of workers and the owner himself is very wonderful when it comes to his business and making sure everything works fine for everyone. This is the best restaurant operating system on the market as we speak. If you want a nice restaurant operating system, RestroX is the best on the market.
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
                        <h6 className="h6-xl">Animesh Katuwal</h6>
                        <p className="p-md">Owner at Hot and Brewed Cafe</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #6 */}
              </Slider>
            </div>
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CustomersReviews;
