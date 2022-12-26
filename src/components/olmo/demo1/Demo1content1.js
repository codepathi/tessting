import Counter from "../../Counter";

const Demo1content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 bg-snow wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="txt-block slim-column left-column wow fadeInRight">
              {/* Title */}
              <h2 className="h2-xs">Keep your favourite people close to you</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                    Fringilla risus, luctus mauris orci auctor euismod iaculis
                    luctus magna purus pretium ligula purus undo quaerat tempor
                    sapien rutrum mauris quaerat ultrice
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Quaerat sodales sapien euismod purus blandit
                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                    Nemo ipsam egestas volute turpis dolores undo ultrice
                    aliquam quaerat at sodales sapien purus
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* CB WRAPPER */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="cb-wrapper">
              {/* CB HOLDER */}
              <div className="cb-holder wow fadeInLeft">
                {/* CB BOX #1 */}
                <div className="cb-single-box">
                  <p className="p-lg cb-header">Tempor Euismod</p>
                  <h2 className="h2-title-xs statistic-number">
                    <sup>+</sup>
                    <Counter end={784} />
                  </h2>
                  <p className="p-md mt-5 ico-10">
                    <span className="violet-red-color">
                      <span className="flaticon-" /> 4.6%
                    </span>
                    vs last 7 days
                  </p>
                </div>
                <hr className="divider" />
                {/* CB BOX #2 */}
                <div className="cb-single-box">
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-md">
                        Fringilla risus luctus mauris auctor and purus euismod
                        purus
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-md">
                        Nemo ipsam volute turpis dolores ut quaerat sodales
                        sapien
                      </p>
                    </li>
                  </ul>
                </div>
                {/* CB BOX #3 */}
                <div className="cb-single-box cb-box-rounded bg-violet-red white-color mt-25">
                  <h4 className="h4-lg">98.245</h4>
                  <p className="p-lg">Ligula risus auctor tempus</p>
                </div>
              </div>
              {/* END CB HOLDER */}
              {/* CB SHAPE */}
              <div className="cb-shape-1">
                <img
                  className="img-fluid"
                  src="/images/bg-shape-1.png"
                  alt="content-image"
                />
              </div>
              {/* CB SHAPE */}
              <div className="cb-shape-2">
                <img
                  className="img-fluid"
                  src="/images/bg-shape-2.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>
          {/* END CB WRAPPER */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo1content1;
