import styles from "./demo10content5.module.css"
import cn from "classnames";
const Demo10content5 = () => {
  return (
    <section
      id="content-5"
      className="content-5 ws-wrapper content-section division"
    >
      <div className="container">
        {/* <div className="content-5-wrapper bg-whitesmoke"> */}
        <div className="content-5-wrapper">          
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block left-column wow fadeInRight">
                {/* Section ID */}
                {/* <span className="section-id purple-color txt-upcase">
                  Fast Performance
                </span> */}
                {/* Title */}
                <h2 className="h2-xs">Work Smarter With Powerful Features</h2>
                {/* <h2 className={styles.headings}>Work Smarter With Powerful Features</h2> */}

                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg ">
                    {/* <p className={styles.pTag}> */}

                    Trust your account with us. Access your entire transaction history with confidence knowing you’re protected by first-class payment security.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                    {/* <p className={styles.pTag} > */}
                    Tailored perfectly for your every need. You can manage your customer's order sources in one system compatible with cross-platform use.
                      
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                    {/* <p className={styles.pTag}> */}
                    Order from your phone, customize your menu. Enhance your guest experience with digital menu or QR Menu solutions to satisfy your guests with an excellent and always up-to-date menu.

                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  // className="assets/powerful-features.png"

                  // src="/images/img-13.png"
                  // src="RestroxNewImages/contentimage.png"
                  // src="/assets/medias/powerful-features-restrox.png"
                  src="/assets/powerful-features-restroX.png"
                  // src="contentimage.png"
                  alt="powerful-features-restroX"
                />
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

export default Demo10content5;
