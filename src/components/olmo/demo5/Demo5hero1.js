import Link from "next/dist/client/link";
const Demo5hero1 = () => {
  return (
    <section id="hero-5" className="bg-snow hero-section division">
      <div className="container">
        <div className="row justify-content-md-center d-flex align-items-center">
          {/* HERO IMAGE */}
          <div className="col-md-7 col-lg-7">
            <div className="hero-5-img">
              <img
                className="img-fluid"
                src="/images/hero-5-img.png"
                alt="hero-image"
              />
            </div>
          </div>
          {/* HERO TEXT */}
          <div className="col-md-5 col-lg-4">
            <div className="hero-5-txt">
              <ul className="hero-5-list">
                <li className="first-li">
                  <h4 className="h4-xl">OLMO</h4>
                </li>
                <li>
                  <h5 className="h5-xl">2.4.11</h5>
                  <span className="grey-color">Current version</span>
                </li>
                <li>
                  <h5 className="h5-xl">macOS</h5>
                  <span className="grey-color">For Mac OS X 10.8.5+</span>
                </li>
                <li className="last-li ico-left">
                  <Link href="/download">
                    <a className="btn btn-violet-red tra-grey-hover ico-15 ico-left">
                      <span className="flaticon-down-arrow" /> Download Now
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* END HERO TEXT */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5hero1;
