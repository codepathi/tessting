import { useState } from "react";
import cn from "classnames";

const Ftabs2 = () => {
  //   let i, tabContent, tabName;
  // function openTab(event, tanName)
  // {
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }
  // }
  const [activeTab, setActiveTab] = useState("tab1");
  
  return (
    // <section id="tabs-2" className="wide-60 tabs-section division">
    <section id="tabs-2" className=" tabs-section division">

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          {/* TABS NAVIGATION */}
          <div className="col">
            <div className="tabs-nav clearfix">
              <ul className="tabs-1">
                {/* TAB-1 LINK */}

                <li
                  // className={cn({ "tab-link current": activeTab === "tab1" })}
                  className={activeTab === "tab1" ? "tab-link current" : ""}
                  data-tab="tab-1"
                  onClick={() => setActiveTab("tab1")}
                >
                  <h5 className="h5-md">Point Of Sales (POS)</h5>
                  <p className="p-lg">
                    Manage your entire restaurant operation from the front of
                    the house to the backend of the house.
                  </p>
                </li>

                {/* TAB-2 LINK */}
                <li
                  // className={cn({ "tab-link current": activeTab === "tab2" })}
                  className={activeTab === "tab2" ? "tab-link current" : ""}
                  data-tab="tab-2"
                  onClick={() => setActiveTab("tab2")}
                >
                  <h5 className="h5-md">Contactless QR Code</h5>
                  <p className="p-lg">
                    Show your menu digitally in the most possible way. Create
                    unique QR codes with easy checkout.
                  </p>
                </li>
                {/* TAB-3 LINK */}
                <li
                  // className={cn({ "tab-link current": activeTab === "tab3" })}
                  className={activeTab === "tab3" ? "tab-link current" : ""}
                  data-tab="tab-3"
                  onClick={() => setActiveTab("tab3")}
                >
                  <h5 className="h5-md">Inventory Management</h5>
                  <p className="p-lg">
                    It’s easier to manage and restock your items. Get to know
                    your stock quantity and your suppliers.
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* END TABS NAVIGATION */}
          {/* IMAGE BLOCK */}
          <div className="col">
            <div className="img-block right-column wow fadeInLeft">
              <div className="tabs-content">
                {/* TAB #1 IMAGE */}
                {activeTab === "tab1" ? (
                  <div id="tab-1">
                    {" "}
                    <img
                      className="img-fluid"
                      // src="/images/img-06.png"
                      // src="/RestroXNewImages/pngfile/restro-2-copy-sample.png"
                      src="/assets/work-smarter-restrox.png"

                      alt="Point of Sales"
                    />{" "}
                  </div>
                ) : activeTab === "tab2" ? (
                  <div id="tab-2">
                    <img
                      className="img-fluid"
                      // src="/images/img-06.png"
                      // src="/images/img-10.png"
                      // src="/RestroXNewImages/pngfile/restro-1.png"
                      // src="/RestroXNewImages/pngfile/restro-1.png"
                      src="/assets/Qr-code-restroX.png"
                      alt="QR Code RestroX"
                    />
                  </div>
                ) : (
                  <div id="tab-3">
                    <img
                      className="img-fluid"
                      // src="/images/img-14.png"
                      // src="/images/img-06.png"
                      // src="/RestroXNewImages/pngfile/image5.png"
                      src="/assets/inventory-management.png"

                     
                      alt="Inventory Management"
                    />
                  </div>
                )}

                {/* TAB #2 IMAGE */}

                {/* TAB #3 IMAGE */}
              </div>
            </div>
          </div>{" "}
          {/* END IMAGE BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Ftabs2;
