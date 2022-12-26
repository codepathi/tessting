import Slider from "react-slick";

const Freviews1 = () => {
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
    // <section id="reviews-1" className="wide-100 reviews-section division">
    <section id="reviews-1" className="wide-11 reviews-section division">

      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Stories From Our Customers</h2>
              {/* Text */}
              <p className="p-xl">
              We would love to connect with you. We care about our customer's reviews and would love to know more feedback about our app so that we can improve our customer experience.
              
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <Slider
              {...settings}
              className="owl-carousel owl-theme reviews-1-wrapper slickmargin"
            >
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
                  Great system Great support. The entire team has been great to work with. The system is fast and friendly. Will be using it in all my stores. The support team is great too!!
                  
                  </p>
                  {/* Testimonial Author */}
                  <div className="author-data clearfix">
                    {/* Testimonial Avatar */}
                    <div className="review-avatar">
                  <img src="/images/Sobit-thakuri.png" alt="review-avatar" />

                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Sobit Thakuri</h6>
                      <p className="p-md">Coffee Ghar Nepal</p>
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
                  {/* <img src="/images/prabin-nepali.png" alt="review-avatar" /> */}
                  <img  src="/images/review-author-5.jpg" alt="review-avatar" />

                 

                     
                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Narik fais </h6>
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
                  </div>{" "}
                  {/* End Testimonial Author */}
                </div>{" "}
                {/* End Text */}
              </div>{" "}
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
                  Easy to Use!! You don't have to be computer savvy to use RestroX. It is extremely user-friendly. Easy access to data instantly anytime and anywhere.

                  </p>
                  {/* Testimonial Author */}
                  <div className="author-data clearfix">
                    {/* Testimonial Avatar */}
                    <div className="review-avatar">
                     
                      <img src="/images/Soshiv-bhurtel.png" alt="review-avatar" />
                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Soshiv Bhurtel</h6>
                      <p className="p-md">Food Bank & Restro Bar</p>
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
                        src="/images/review-author-4.jpg"
                        alt="review-avatar"
                      />
                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Manny Hayes</h6>
                      <p className="p-md">Owner of a Restaurant</p>
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
              <div className="review-1">
                {/* Quote Icon */}
                <div className="review-1-ico ico-25">
                  <span className="flaticon-left-quote" />
                </div>
                {/* Text */}
                <div className="review-1-txt">
                  {/* Text */}
                  <p className="p-lg">
                  RestroX is unbelievable. If you dream of what you want in a restaurant operating system, RestroX can do it! There has been a lot of thought put into this system. Never a crash.


                  </p>
                  {/* Testimonial Author */}
                  <div className="author-data clearfix">
                    {/* Testimonial Avatar */}
                    <div className="review-avatar">
                      {/* <img
                        src="/images/review-author-5.jpg"

                        alt="review-avatar"
                      /> */}
                  <img src="/images/prabin-nepali.png" alt="review-avatar" />

                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Prabin Nepali </h6>
                      <p className="p-md"> Bulldog bar and restaurant</p>
                      {/* Rating */}
                      <div className="review-rating ico-15 yellow-color">
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        {/* <span className="flaticon-star-1" /> */}
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
                        src="/images/review-author-6.jpg"
                        alt="review-avatar"
                      />
                    </div>
                    {/* Testimonial Author */}
                    <div className="review-author">
                      <h6 className="h6-xl">Natalie Graham</h6>
                      <p className="p-md">Owner of food truckr</p>
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
              {/* <div className="review-1"> */}
                {/* Quote Icon */}
                {/* <div className="review-1-ico ico-25">
                  <span className="flaticon-left-quote" />
                </div> */}
                {/* Text */}
                {/* <div className="review-1-txt"> */}
                  {/* Text */}
                  {/* <p className="p-lg">
                    Augue egestas diam tempus volutpat egestas augue in cubilia
                    laoreet magna suscipit luctus dolor and blandit vitae purus
                    diam tempus an aliquet porta rutrum gestas
                  </p> */}
                  {/* Testimonial Author */}
                  {/* <div className="author-data clearfix"> */}
                    {/* Testimonial Avatar */}
                    {/* <div className="review-avatar">
                      <img
                        src="/images/review-author-7.jpg"
                        alt="review-avatar"
                      />
                    </div> */}
                    {/* Testimonial Author */}
                    {/* <div className="review-author"> */}
                      {/* <h6 className="h6-xl">Mike Harris</h6>
                      <p className="p-md">Graphic Designer</p> */}
                      {/* Rating */}
                      {/* <div className="review-rating ico-15 yellow-color">
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-half-empty" />
                      </div> */}
                    {/* </div> */}
                  {/* </div>{" "} */}
                  {/* End Testimonial Author */}
                {/* </div>{" "} */}
                {/* End Text */}
              {/* </div>{" "} */}
              {/* END TESTIMONIAL #7 */}
              {/* TESTIMONIAL #8 */}
              {/* <div className="review-1"> */}
                {/* Quote Icon */}
                {/* <div className="review-1-ico ico-25">
                  <span className="flaticon-left-quote" />
                </div> */}
                {/* Text */}
                {/* <div className="review-1-txt"> */}
                  {/* Text */}
                  {/* <p className="p-lg">
                    Augue at vitae purus tempus egestas volutpat augue undo
                    cubilia laoreet magna suscipit luctus dolor blandit at purus
                    tempus feugiat impedit
                  </p> */}
                  {/* Testimonial Author */}
                  {/* <div className="author-data clearfix"> */}
                    {/* Testimonial Avatar */}
                    {/* <div className="review-avatar">
                      <img
                        src="/images/review-author-8.jpg"
                        alt="review-avatar"
                      />
                    </div> */}
                    {/* Testimonial Author */}
                    {/* <div className="review-author"> */}
                      {/* <h6 className="h6-xl">Evelyn Martinez</h6>
                      <p className="p-md">WordPress Consultant</p> */}
                      {/* Rating */}
                      {/* <div className="review-rating ico-15 yellow-color">
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-1" />
                        <span className="flaticon-star-half-empty" />
                      </div> */}
                    {/* </div> */}
                  {/* </div>{" "} */}
                  {/* End Testimonial Author */}
                {/* </div>{" "} */}
                {/* End Text */}
              {/* </div>{" "} */}
              {/* END TESTIMONIAL #8 */}
            </Slider>
          </div>
        </div>{" "}
        {/* END TESTIMONIALS CONTENT */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Freviews1;
