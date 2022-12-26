const Demo6hero6 = () => {
  return (
    <section id="hero-6" className="hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            <div className="hero-6-txt">
              {/* Title */}
              <h2 className="h2-md">
                Fresh Ideas. Thoughtful Design. Measurable Results
              </h2>
              {/* Text */}
              <p className="p-lg">
                Feugiat primis ligula risus auctor egestas and augue viverra
                mauri tortor in iaculis magna a feugiat mauris ipsum and
                placerat viverra tortor gravida purus
              </p>
              {/* HERO QUICK FORM */}
              <form
                name="quickform"
                className="quick-form shadow-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Inputs */}
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Your email address"
                    autoComplete="off"
                    required
                  />
                  <span className="input-group-btn form-btn">
                    <button
                      type="submit"
                      className="btn btn-md btn-stateblue black-hover submit"
                    >
                      Get Started
                    </button>
                  </span>
                </div>
                {/* Form Message */}
                <div className="quick-form-msg">
                  <span className="loading" />
                </div>
              </form>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6">
            <div className="hero-6-img text-center">
              <img
                className="img-fluid"
                src="/images/img-06.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 215">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo6hero6;
