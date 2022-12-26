const Demo2Hero2 = () => {
  return (
    <section id="hero-2" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO IMAGE */}
          <div className="col-md-5 col-lg-6 order-last order-md-2">
            <div className="hero-2-img pc-30 wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-12.png"
                alt="hero-image"
              />
            </div>
          </div>
          {/* HERO TEXT */}
          <div className="col-md-7 col-lg-6 order-first order-md-2">
            <div className="hero-2-txt white-color wow fadeInLeft">
              {/* Title */}
              <h2 className="h2-xl">
                Manage all your media files using only OLMO
              </h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis a ligula sapien mauris an auctor laoreet and
                pretium augue egestas cubilia
              </p>
              {/* STORE BADGES */}
              <div className="stores-badge">
                {/* AppStore */}
                <a href="#" className="store">
                  <img
                    className="appstore"
                    src="/images/appstore.png"
                    alt="appstore-badge"
                  />
                </a>
                {/* Google Play */}
                <a href="#" className="store">
                  <img
                    className="googleplay"
                    src="/images/googleplay.png"
                    alt="googleplay-badge"
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
              </div>
              {/* END STORE BADGES */}
              {/* Advantages List */}
              <ul className="advantages clearfix mt-20">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
          {/* END HERO TEXT */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 285">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo2Hero2;
