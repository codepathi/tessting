
import { BiTable,BiFoodMenu } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
// import {  } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import styles from "./demo11features4.module.css";
import cn from "classnames";



{/* <section className={ cn(styles.main, "contact")} ></section> */}
const Demo11features4 = () => {
  return (
    // <section id="features-4" className="wide-60 features-section division">
    <section id="features-4" className="wide-22 features-section division">

      <div className="container" >
        {/* FEATURES-4 WRAPPER */}
        <div className="fbox-4-wrapper fbox-4-wide">
          {/* <div className="row row-cols-1 row-cols-md-2"> */}
          <div className={cn(styles.digitalMenuDiv,"row row-cols-1 row-cols-md-2")}>

            {/* FEATURE BOX #1 */}
            <div className="col" >
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-fingerprint-scan" /> */}
                    {/* <span className="flaticon-menu" /> */}
                    {/* <BiFoodMenu  style={{width:"80%",height:"100%"}} /> */}
                    <BiFoodMenu  className={cn(styles.icons)}/>
                    {/* <span className="fbox-ico-center ico-65"> <FaBookOpen  style={{width:"80%",backgroundColor:"pink",height:"100%"}} /> </span> */}

                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  {/* <h5 className="h5-md">Digital Menu</h5> */}
                  <h5 className="h5-md">Digital Menu</h5>

                  {/* <BiFoodMenu /> */}
               
                  {/* Text */}
                  <p className="p-lg">
               
                    Manage your menu and orders through QR code and scanners. A
                    digitized version of a restaurant menu is available to your
                    customers via QR codes.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-analytics" /> */}
                    {/* <MdOutlineAccountBalance className={cn(styles.icons)}/> */}
                    {/* <MdOutlineManageAccounts className={cn(styles.icons)} /> */}
                    <TbReport className={cn(styles.icons)} />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Account Management</h5>
                  {/* Text */}
                  <p className="p-lg">
                 
                    Keep track of your financial transactions and cash flow
                    management. Manage your sales reporting and customer
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-user" /> */}
                    <BsPersonCheck className={cn(styles.icons)}/>
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Staff Management</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Manage your staff profile and their roles. Invite your staff
                    and simplify your day-to-day work with a single platform.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #4 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-resize" /> */}
                    <BiTable className={cn(styles.icons)}/>
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Table Management</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Manage tables according to your floor plans. You can create
                    space on the basis of your restaurant structure and view.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #5 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-share" /> */}
                    <IoRestaurantOutline  className={cn(styles.icons)} />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Multiple Restaurant Management</h5>
                  {/* Text */}
                  <p className="p-lg">
                    You can manage many restaurants and own complete control
                    over the operations of the restaurant from anywhere and from
                    any device.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #6 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="fbox-ico-center ico-65">
                    {/* <span className="flaticon-layers" /> */}
                    <MdOutlineInventory className={cn(styles.icons)} />
                    
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  {/* <h5 className="h5-md">Extensions &amp; Addons</h5> */}
                  <h5 className="h5-md">Inventory Management</h5>

                  {/* Text */}
                  <p className="p-lg">
                    Setting up and managing your inventory is easier than ever.
                    Manage your stocks. Keep track of your purchase invoice and
                    suppliers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* END FEATURES-4 WRAPPER */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo11features4;
