import styles from "./image.module.css";

const Demo16hero16 = () => {
  return (
    <section id="hero-16" className="hero-section division " >
      <div className="container">
        <div className="row d-flex align-items-center " >
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6 order-last order-md-2">
            <div className="hero-16-img pc-25 text-center wow  fadeInRight">
        
              {/* <img style={{width:"45rem",height:"45rem"}} */}
              <img 
                className={`img-fluid ${styles.imageSuraj}`}
                // src="/images/img-02.png"
                // src="/HomePageImages/image_home_page.png"
                // src="/RestroXNewImages/pngfile/image_home_page.png"
                src="/assets/restrox-available-android-ios.png"
                alt="RestroX Availabe on Both Android and IOS"
              />
            </div>

          </div>
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6 order-first order-md-2">
            <div className="hero-16-txt wow fadeInLeft">
              {/* Title */}
              <h2 className="h2-sm">Let’s get going, app for every platform</h2>
              {/* Text */}
              <p className="p-xl">
                RestroX app is available both on the play store and app store.
                Download now!
              </p>
              {/* STORE BADGES */}
              <div className="stores-badge mb-25">
                {/* AppStore */}
                <a
                  href="https://apps.apple.com/np/app/restrox-restaurant-system/id1611549881?fbclid=IwAR0aotUMW7J8E9viX2YDejzRdh5Qm9vXonujwNBB5jJaia2VkVPzDc-u4CM"
                  target="_blank"
                  className="store"
                >
                  <img
                    className="appstore"
                    src="/images/appstore.png"
                    alt="Restrox on Apple Store"
                  />
                </a>
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=co.restrox.app"
                  target="_blank"
                  className="store"
                >
                  <img
                    className="googleplay"
                    src="/images/googleplay.png"
                    alt="RestroX on Google Play"
                  />
                </a>
                {/* Aamazon Market 
									<a href="#" class="store">
										<img class="amazon" src="/images/amazon.png" alt="amazon-badge" />
									</a>  */}
                {/* Mac AppStore 
									<a href="#" class="store">
										<img class="mac-appstore" src="/images/macstore.png" alt="macstore-badge" />
									</a> */}
                {/* Microsoft Store  
									<a href="#" class="store">
										<img class="microsoft" src="/images/microsoft.png" alt="microsoft-badge" />
									</a> */}
              </div>{" "}
              {/* END STORE BADGES */}
              {/* Advantages List */}
              <ul className="advantages">
                {/* <li className="first-li">
                  <p>Current version 1.0 (Beta)</p>
                </li> */}
                {/* <li className="last-li">
                  <p>Free Forever</p>
                </li> */}
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

export default Demo16hero16;
