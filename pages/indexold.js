import Link from "next/dist/client/link";
import { useEffect } from "react";
import { scroll } from "../src/utils/utils";
const Index = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);
  return (
    <div id="page" className="page-wrapper demo">
      {/* HEADER
			============================================= */}
      <header id="header" className="header tra-menu navbar-light">
        <div className="header-wrapper">
          {/* MOBILE HEADER */}
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <img src="/demo/images/logo.png" alt="mobile-logo" />
            </span>
          </div>
          {/* NAVIGATION MENU */}
          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              <div className="desktoplogo">
                <a href="#hero" className="logo-black">
                  <img src="/demo/images/logo.png" alt="header-logo" />
                </a>
              </div>
              <div className="desktoplogo">
                <a href="#hero" className="logo-white">
                  <img src="/demo/images/logo-white.png" alt="header-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End header-wrapper */}
      </header>{" "}
      {/* END HEADER */}
      {/* HERO
			============================================= */}
      <section id="hero" className="bg-scroll hero-section division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="hero-txt">
                <span className="section-id">One-stop solution</span>
                <h2>Pixel-Perfect, Lovely Design</h2>
                <p className="p-lg">
                  A great collection of flexible &amp; creative landing page
                  templates to promote your Software, App, SaaS, Startup or
                  business projects
                </p>
                <a
                  href="#select"
                  className="btn btn-theme tra-white-hover"
                  title
                >
                  Check Demos
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="hero-img">
                <img
                  className="img-fluid"
                  src="/demo/images/hero-img.png"
                  alt="hero-image"
                />
              </div>
            </div>
            <h2 className="tra-title">Flexible</h2>
          </div>
        </div>{" "}
        {/* End container */}
        {/* WAVE SHAPE BOTTOM */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
            <path
              fill="#f4f4f9"
              fillOpacity={1}
              d="M0,224L120,224C240,224,480,224,720,197.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </section>
      {/* END HERO */}
      {/* FEATURES
			============================================= */}
      <section id="features" className="features division">
        <div className="container">
          <div className="row">
            {/* FEATURE BOX #1 */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="fbox">
                <img
                  className="img-fluid"
                  src="/demo/images/responsive.png"
                  alt="Responsive"
                />
                <h5>Fully Responsive</h5>
                <p>
                  OLMO has a fully responsive design. It fits perfectly on
                  various displays and resolutions
                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="fbox">
                <img
                  className="img-fluid"
                  src="/demo/images/bootstrap.png"
                  alt="bootstrap"
                />
                <h5>Built with Bootstrap 5.x</h5>
                <p>
                  The world’s most popular front-end open source toolkit for
                  building responsive websites
                </p>
              </div>
            </div>
            {/* FEATURE BOX #4 */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.8s">
              <div className="fbox">
                <img
                  className="img-fluid"
                  src="/demo/images/customize.png"
                  alt="customize"
                />
                <h5>Easy to Customization</h5>
                <p>
                  Well commented and structured, easy to understand code. Spend
                  less time for the customization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SELECT
			============================================= */}
      <section id="select" className="bg-fixed select-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h2>Stunning Home Demos</h2>
              <p>
                27 beautiful, hand-crafted designs to get you started. Choose
                the one you like best and start customize it to your website
              </p>
            </div>
          </div>
          {/* DEMOS WRAPPER */}
          <div className="row">
            {/* LAYOUT-1 */}
            <div
              id="l-1"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-1">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-01.jpg"
                      alt="layout-1-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>App Landing</h4>
              <span>[ Demo #1 ]</span>
            </div>
            {/* LAYOUT-2 */}
            <div
              id="l-2"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-2">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-02.jpg"
                      alt="layout-2-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>App Showcase 1</h4>
              <span>[ Demo #2 ]</span>
            </div>
            {/* LAYOUT-3 */}
            <div
              id="l-3"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-3">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-03.jpg"
                      alt="layout-3-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Startup Agency</h4>
              <span>[ Demo #3 ]</span>
            </div>
            {/* LAYOUT-4 */}
            <div
              id="l-4"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-4">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-04.jpg"
                      alt="layout-4-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Design Agency</h4>
              <span>[ Demo #4 ]</span>
            </div>
            {/* LAYOUT-5 */}
            <div
              id="l-5"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-5">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-05.jpg"
                      alt="layout-5-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Software 1</h4>
              <span>[ Demo #5 ]</span>
            </div>
            {/* LAYOUT-6 */}
            <div
              id="l-6"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-6">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-06.jpg"
                      alt="layout-6-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>SaaS Service 1</h4>
              <span>[ Demo #6 ]</span>
            </div>
            {/* LAYOUT-7 */}
            <div
              id="l-7"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-7">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-07.jpg"
                      alt="layout-7-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Digital Service 1</h4>
              <span>[ Demo #7 ]</span>
            </div>
            {/* LAYOUT-8 */}
            <div
              id="l-8"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-8">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-08.jpg"
                      alt="layout-8-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Social Media Marketing</h4>
              <span>[ Demo #8 ]</span>
            </div>
            {/* LAYOUT-9 */}
            <div
              id="l-9"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-9">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-09.jpg"
                      alt="layout-9-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Digital Agency</h4>
              <span>[ Demo #9 ]</span>
            </div>
            {/* LAYOUT-10 */}
            <div
              id="l-10"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-10">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-10.jpg"
                      alt="layout-10-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>SaaS Service 2</h4>
              <span>[ Demo #10 ]</span>
            </div>
            {/* LAYOUT-11 */}
            <div
              id="l-11"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-11">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-11.jpg"
                      alt="layout-11-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Desktop Software 1</h4>
              <span>[ Demo #11 ]</span>
            </div>
            {/* LAYOUT-12 */}
            <div
              id="l-12"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-12">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-12.jpg"
                      alt="layout-12-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Digital Service 2</h4>
              <span>[ Demo #12 ]</span>
            </div>
            {/* LAYOUT-13 */}
            <div
              id="l-13"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-13">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-13.jpg"
                      alt="layout-13-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Software SaaS</h4>
              <span>[ Demo #13 ]</span>
            </div>
            {/* LAYOUT-14 */}
            <div
              id="l-14"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-14">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-14.jpg"
                      alt="layout-14-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>App Showcase 2</h4>
              <span>[ Demo #14 ]</span>
            </div>
            {/* LAYOUT-15 */}
            <div
              id="l-15"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-15">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-15.jpg"
                      alt="layout-15-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Software 2</h4>
              <span>[ Demo #15 ]</span>
            </div>
            {/* LAYOUT-16 */}
            <div
              id="l-16"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-16">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-16.jpg"
                      alt="layout-16-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>App Showcase 3</h4>
              <span>[ Demo #16 ]</span>
            </div>
            {/* LAYOUT-17 */}
            <div
              id="l-17"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-17">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-17.jpg"
                      alt="layout-17-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Desktop Software 2</h4>
              <span>[ Demo #17 ]</span>
            </div>
            {/* LAYOUT-18 */}
            <div
              id="l-18"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-18">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-18.jpg"
                      alt="layout-18-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>SEO Company</h4>
              <span>[ Demo #18 ]</span>
            </div>
            {/* LAYOUT-19 */}
            <div
              id="l-19"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-19">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-19.jpg"
                      alt="layout-19-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Digital Marketing</h4>
              <span>[ Demo #19 ]</span>
            </div>
            {/* LAYOUT-20 */}
            <div
              id="l-20"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-20">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-20.jpg"
                      alt="layout-20-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Cyber Security</h4>
              <span>[ Demo #20 ]</span>
            </div>
            {/* LAYOUT-21 */}
            <div
              id="l-21"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-21">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-21.jpg"
                      alt="layout-21-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>SaaS Service 3</h4>
              <span>
                [ Demo #21 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* LAYOUT-22 */}
            <div
              id="l-22"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-22">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-22.jpg"
                      alt="layout-22-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Marketing Agency</h4>
              <span>
                [ Demo #22 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* LAYOUT-23 */}
            <div
              id="l-23"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-23">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-23.jpg"
                      alt="layout-23-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Branding Agency</h4>
              <span>
                [ Demo #23 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* PAGE 404 */}
            <div
              id="p-404"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/404" ti>
                  <a tle target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/404.jpg"
                      alt="layout-24-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Page 404</h4>
              <span>
                [ Demo #24 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* LAYOUT-24 */}
            <div
              id="l-24"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/demo-24">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-24.jpg"
                      alt="layout-24-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>RTL Version #1</h4>
              <span>
                [ Demo #24 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* LAYOUT-25 */}
            <div
              id="l-25"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/demo-25">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-25.jpg"
                      alt="layout-25-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>RTL Version #2</h4>
              <span>
                [ Demo #25 ]<span className="new_demo">NEW</span>
              </span>
            </div>
            {/* LAYOUT-26 */}
            <div
              id="l-26"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/demo-26">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/layout-26.jpg"
                      alt="layout-26-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>RTL Version #3</h4>
              <span>
                [ Demo #26 ]<span className="new_demo">NEW</span>
              </span>
            </div>
          </div>{" "}
          {/* END DEMOS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END SELECT */}
      {/* BANNER-1
			============================================= */}
      <section id="banner-1" className="bg-scroll banner division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="banner-1-txt">
                <h2>Crafted with detail for a great start</h2>
                <p>
                  OLMO includes well designed components which always gives you
                  best results as you wanted. Each content element has been
                  crafted with terrific attention to details and offers multiple
                  options. Combine the content elements to create unique
                  websites in minutes. You are free to move the blocks between
                  demos
                </p>
                <Link href="/demo-1">
                  <a
                    className="btn btn-md btn-theme tra-white-hover"
                    target="_blank"
                  >
                    See All Pages In Action
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-1-img">
                <img
                  className="img-fluid"
                  src="/demo/images/banner-1-img.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END BANNER-1 */}
      {/* INNER PAGES
			============================================= */}
      <section id="i-pages" className="ip-section division">
        <div className="container white-color">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h2>Practical Inner Pages</h2>
              <p>
                OLMO offers a vast number of pre-made inner pages which will
                save your time when building a website. Select a page and check
                it out!
              </p>
            </div>
          </div>
          <div className="row">
            {/* ABOUT PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/about">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/about.jpg"
                      alt="about-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>About Page</h4>
            </div>
            {/* FEATURES PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/features">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/features.jpg"
                      alt="features-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Features Page</h4>
            </div>
            {/* PROJECTS PAGE */}
            <div
              id="pts"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/projects">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/projects.jpg"
                      alt="projects-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Our Projects</h4>
              <span>
                <span className="new_demo">NEW</span>
              </span>
            </div>
            {/* SINGLE PROJECT */}
            <div
              id="pd"
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/projects">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/project-details.jpg"
                      alt="project-details-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Project Details</h4>
              <span>
                <span className="new_demo">NEW</span>
              </span>
            </div>
            {/* PRICING PLANS */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/pricing">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/pricing.jpg"
                      alt="pricing-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Pricing Page</h4>
            </div>
            {/* TEAM PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/team" t>
                  <a itle target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/team.jpg"
                      alt="team-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Team Page</h4>
            </div>
            {/* DOWNLOAD PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/download">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/download.jpg"
                      alt="download-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Download Page</h4>
            </div>
            {/* FAQs PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/faqs" t>
                  <a itle target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/faqs.jpg"
                      alt="faqs-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>FAQs Page</h4>
            </div>
            {/* TERMS & PRIVACY */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/terms">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/terms.jpg"
                      alt="terms-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Terms &amp; Privacy</h4>
            </div>
            {/* BLOG LISTING */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="hover-overlay">
                <Link href="/blog-listing">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/blog-listing.jpg"
                      alt="blog-listing-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Blog Listing</h4>
            </div>
            {/* SINGLE POST */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="hover-overlay">
                <Link href="/single-post">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/single-post.jpg"
                      alt="single-post-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Single Post</h4>
            </div>
            {/* CONTACTS PAGE */}
            <div
              className="col-md-6 col-lg-4 select_link wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="hover-overlay">
                <Link href="/contacts">
                  <a title target="_blank">
                    <img
                      className="img-fluid"
                      src="/demo/images/contacts.jpg"
                      alt="contacts-preview"
                    />
                  </a>
                </Link>
              </div>
              <h4>Contacts Page</h4>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END INNER PAGES */}
      {/* BANNER-2
			============================================= */}
      <section id="banner-2" className="bg-scroll banner-1 division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="banner-2-txt text-center">
                <h2>Create your amazing website with OLMO</h2>
                <p>
                  Mix and match from over 70 exclusive section UI blocks. Create
                  something unique and beautifully tailored to your needs in
                  only a few minutes
                </p>
                <h2 className="tra-title">Creative</h2>
                <a href="#" className="btn btn-md btn-theme tra-theme-hover">
                  Purchase for $15
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      {/* END BANNER-2 */}
      {/* FOOTER
			============================================= */}
      <footer id="footer" className="footer division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p>Designed by JThemes</p>
              <p>
                © 2021 <span>OLMO.</span> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
