import Slider from "react-slick";

const Demo19brands1 = () => {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="brands-1" className="pt-100 brands-section division">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            {/* Brands Carousel */}
            <Slider {...setting} className="owl-carousel brands-carousel">
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-1.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-2.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-3.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-4.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-5.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-6.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-7.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-8.png"
                  alt="brand-logo"
                />
              </div>
              {/* Brand Logo Image */}
              <div className="brand-logo">
                <img
                  className="img-fluid"
                  src="/images/brand-9.png"
                  alt="brand-logo"
                />
              </div>
            </Slider>{" "}
            {/* End Brands Carousel */}
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default Demo19brands1;
