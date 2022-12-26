const Demo9hero9 = () => {
  return (
    <section id="hero-9" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO REQUEST FORM */}
          <div className="col-md-7 offset-md-5 col-lg-5 offset-lg-7">
            <div id="hero-9-form">
              {/* Title */}
              <h4 className="h4-xs">Create the effect of presence with OLMO</h4>
              {/* Text */}
              <p className="p-md">
                Feugiat primis ligula risus auctor purus laoreet augue mauris
                viverra tortor
              </p>
              {/* Form */}
              <form
                name="requestForm"
                className="row request-form"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control name"
                    placeholder="Enter Your Name*"
                    autoComplete="off"
                    required
                  />
                </div>
                {/* Form Input */}
                <div className="col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control email"
                    placeholder="Enter Your Email*"
                    autoComplete="off"
                    required
                  />
                </div>
                {/* Form Button */}
                <div className="col-md-12 form-btn mt-5">
                  <button
                    type="submit"
                    className="btn btn-md btn-skyblue tra-grey-hover submit"
                  >
                    Get Started Now
                  </button>
                </div>
                {/* Form Message */}
                <div className="col-md-12 request-form-msg text-center">
                  <span className="loading" />
                </div>
              </form>
            </div>{" "}
            {/* END FORM */}
          </div>{" "}
          {/* END HERO REQUEST FORM */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,96L120,106.7C240,117,480,139,720,138.7C960,139,1200,117,1320,106.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo9hero9;
