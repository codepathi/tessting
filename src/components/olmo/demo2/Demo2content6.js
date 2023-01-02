const Demo2content6 = () => {
  return (
    <section
      id="content-6"
      className="content-6 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 col-lg-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* TEXT BOX */}
              <div className="txt-box mb-30">
                {/* Title */}
                <h5 className="h5-lg">Manage and create your digital menu</h5>
                {/* Text */}
                <p className="p-lg">
                Enhance your customer experience with QR and digital menu solutions. Get built-in menu templates and customize your menus according to your specials. Take orders, make reservations and manage your menu.
                </p>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Increase your restaurant's efficiency with a Digital menu</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                    Get to know where your guests are ordering from when they scan the QR code.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                    Get digitized with your menu. No need for a printed or physical menu as it is easy to just scan the QR code.
                    </p>
                  </li>
                </ul>
              </div>
              {/* END TEXT BOX */}
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-7">
            <div className="img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-20.png"
                alt="content-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2content6;
