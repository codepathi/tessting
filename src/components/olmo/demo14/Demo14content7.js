const Demo14content7 = () => {
  return (
    <section
      id="content-7"
      className="content-7 wide-1 content-section division "
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 order-last order-md-2">
            <div className="txt-block left-column wow fadeInLeft">
              {/* Section ID */}
              {/* <span className="section-id txt-upcase">Easiest to use</span> */}
              {/* Title */}
              <h2 className="h2-xs">Be More Efficient With Real-Time Analytics</h2>
              
              {/* Text */}
              <p className="p-lg">
                Get all the that you need to know
                about the functioning of your restaurant in real-time that you can view anywhere,
                at any time by just using an app.
              </p>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Operate your restaurant with less stress</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Keep track of all function and Operations happening at your Restaurant.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Get insights related to your overall sales in real-time, and on a regular basis from anywhere at any time through the app.
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TEXT BOX */}
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-6 order-first order-md-2">
            <div className="content-7-img wow fadeInRight">
              <img
                className="img-fluid"
                // src="/images/dashboard-01 2.png"
                src="/assets/operate-restaurant-restroX.png"
                alt="Operate Your Restaurant with RestroX"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo14content7;
