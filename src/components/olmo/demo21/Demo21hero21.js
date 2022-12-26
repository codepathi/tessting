const Demo21hero21 = () => {
  return (
    <section id="hero-21" className="bg-snow hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-10 offset-md-1">
            <div className="hero-21-txt text-center">
              {/* Title */}
              <h2 className="h2-lg">
                Creativity never goes wrong, all you need is right direction
              </h2>
              {/* Text */}
              <p className="p-xl">
                Mauris donec ociis et magnis sapien sagittis sapien tempor
                gravida and aliquet suscipit in magna dignissim, porttitor
                hendrerit
              </p>
              {/* HERO QUICK FORM */}
              <form
                name="quickform"
                className="quick-form"
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
              {/* Advantages List */}
              <ul className="advantages mt-35">
                <li className="first-li">
                  <p>14 days free trial</p>
                </li>
                <li className="last-li">
                  <p>No credit card</p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo21hero21;
