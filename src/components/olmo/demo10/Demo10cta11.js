import Link from "next/dist/client/link";
const Demo10cta11 = () => {
  return (
    <section id="cta-11" className="bg-snow cta-section division">
      <div className="container">
        <div className="bg-tra-lightgrey cta-11-wrapper">
          <div className="row d-flex align-items-center justify-content-center">
            {/* CALL TO ACTION TEXT */}
            <div className="col-lg-7 col-lg-7 text-center">
              <div className="cta-11-txt">
                {/* Title */}
                <h3 style={{fontWeight: "200"}} className="h2-xs">It's easy to get started.</h3>
                {/* Text */}
                <p className="p-lg">
                What makes us the best? It's the support we provide. Let's get in touch now.
                </p>
                {/* Button */}
                <Link href="/pricing">
                  <a className="btn btn-violet-red tra-violet-red-hover">
                    Contact us
                  </a>
                </Link>
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

export default Demo10cta11;
