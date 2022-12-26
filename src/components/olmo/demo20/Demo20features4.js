import Link from "next/dist/client/link";
const Demo20features4 = () => {
  return (
    <section id="features-4" className="pb-60 features-section division">
      <div className="container">
        {/* FEATURES-4 WRAPPER */}
        <div className="fbox-4-wrapper fbox-4-wide">
          <div className="row row-cols-1 row-cols-md-2">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-shield-2" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Protect Data Traffic</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-fingerprint-scan" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Manage Access</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-smartphone-1" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Protect Every Device</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #4 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-desktop" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Protect Data Everywhere</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #5 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-command-line" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Remote Access</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #6 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65 shape-ico violet-red-color">
                    <img
                      className="ico-bkg"
                      src="/images/ico-bkg.png"
                      alt="ico-bkg"
                    />
                    <span className="flaticon-secure" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Third-party Authentication</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Porta semper lacus cursus feugiat primis ultrice ligula
                    risus auctor tempus feugiat impedit undo auctor felis augue
                    mauris aoreet tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END FEATURES-4 WRAPPER */}
        {/* DOWNLOAD BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-btn mt-25">
              <Link href="/features">
                <a className="btn btn-md btn-tra-grey violet-red-hover">
                  Explore All Services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo20features4;
