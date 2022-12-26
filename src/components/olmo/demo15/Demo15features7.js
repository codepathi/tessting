import { BiTable,BiFoodMenu } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
// import {  } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import styles from "./demo15features7.module.css";
import cn from "classnames";
import { TbDeviceAnalytics } from "react-icons/tb";


const Demo15features7 = () => {
  return (
    <section id="features-7" className="wide-70 features-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* FEATURES-7 WRAPPER */}
          <div className="col-lg-7 order-last order-lg-2">
            <div className="fbox-7-wrapper pr-30">
              <div className="row">
                <div className="col-md-6">
                  {/* FEATURE BOX #1 */}
                  <div id="fb-7-1" className="fbox-7 mt-40 mb-30 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-purple purple-color">
                      <span className="flaticon-dashboard" />
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm">Easy to use</h5>
                    {/* Text */}
                    <p className="p-lg">
                    Get registered in just a few minutes and monitor your entire restaurant operation from the app.

                    </p>
                  </div>
                  {/* FEATURE BOX #2 */}
                  <div id="fb-7-2" className="fbox-7 mb-30 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-red red-color">
                      {/* <span className="flaticon-tool" /> */}
                      <BsPersonCheck className={cn(styles.icons)}/>
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm">Staff Management
</h5>
                    {/* Text */}
                    <p className="p-lg">
                    Monitor your employee's performance and track your staff's activity.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* FEATURE BOX #3 */}
                  <div id="fb-7-3" className="fbox-7 mb-30 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-yellow yellow-color">
                      <span className="flaticon-layers" />
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm">Automate Invoices</h5>
                    {/* Text */}
                    <p className="p-lg">
                    Take control of your inventory, automate your invoices, and optimize restaurant operations.
                    </p>
                  </div>
                  {/* FEATURE BOX #4 */}
                  <div id="fb-7-4" className="fbox-7 mb-30 wow fadeInUp">
                    {/* Icon */}
                    <div className="fbox-ico-center ico-rounded-md ico-45 bg-tra-green green-color">
                      {/* <span className="flaticon-arrow" /> */}
                      <TbDeviceAnalytics className={cn(styles.icons)} />
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm">Real-time analytics
</h5>
                    {/* Text */}
                    <p className="p-lg">
                    See your everyday sales and operations of your restaurant wherever you are

                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-7 WRAPPER */}
          {/* TEXT BLOCK */}
          <div className="col-md-12 col-lg-5 order-first order-lg-2">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              {/* <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                Total Control
              </span> */}
              {/* Title */}
              <h2 className="h2-xs">Preparing your restaurant to blend in every situation</h2>
              {/* Text */}
              <p className="p-lg">
              We offer the most exclusive services designed for the convenience of users.
              </p>
              {/* Text */}
              <p className="p-lg">
                {/* Gravida porta velna vitae auctor congue donec nihil impedit
                ligula risus mauris donec ligula */}
              </p>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo15features7;
