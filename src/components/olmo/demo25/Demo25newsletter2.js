const Demo25newsletter2 = () => {
  return (
    <section
      id="newsletter-2"
      className="pt-60 pb-60 newsletter-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
          {/* NEWSLETTER FORM */}
          <div className="col order-last order-lg-2">
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className="btn btn-violet-red black-hover"
                  >
                    إشترك الآن
                  </button>
                </span>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  placeholder="عنوان بريدك الإلكتروني"
                  required
                  id="s-email"
                />
              </div>
              {/* Newsletter Form Notification */}
              <label htmlFor="s-email" className="form-notification" />
            </form>
          </div>{" "}
          {/* END NEWSLETTER FORM */}
          {/* NEWSLETTER TEXT */}
          <div className="col order-first order-lg-2">
            <div className="newsletter-txt pl-20">
              <h4 className="h4-xl">
                ابق على اطلاع بأخبارنا وأفكارنا وتحديثاتنا
              </h4>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo25newsletter2;
