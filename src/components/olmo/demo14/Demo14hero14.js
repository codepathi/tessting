const Demo14hero14 = () => {
  return (
    <section id="hero-14" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-sm-9 col-md-7 col-lg-5">
            <div className="hero-14-txt white-color wow fadeInRight">
              {/* Section ID */}
              <span className="section-id txt-upcase">
                Secure Every Transaction
              </span>
              {/* Title */}
              <h2 className="h2-xl">Smart &amp; Secure Mobile Banking</h2>
              {/* Text */}
              <p className="p-xl">
                Feugiat primis a ligula auctor mauris auctor laoreet and pretium
                augue an egestas
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
              </div>{" "}
              {/* END STORE BADGES */}
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

export default Demo14hero14;
