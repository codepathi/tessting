import Link from "next/dist/client/link";
const Demo24cta11 = () => {
  return (
    <section id="cta-11" className="cta-section division">
      <div className="container">
        <div className="bg-tra-purple cta-11-wrapper">
          <div className="row d-flex align-items-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7">
              <div className="cta-11-txt">
                {/* Title */}
                <h2 className="h2-xs">هل أنت جاهز للانضمام إلى OLMO؟</h2>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
                {/* Button */}
                <Link href="/pricing">
                  <a className="btn btn-stateblue tra-stateblue-hover">
                    نبدأ الآن
                  </a>
                </Link>
              </div>
            </div>
            {/* CALL TO ACTION BUTTON */}
            <div className="col-lg-5">
              <div className="text-end">
                <div className="cta-11-img text-center">
                  <img
                    className="img-fluid"
                    src="/images/img-25.png"
                    alt="cta-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo24cta11;
