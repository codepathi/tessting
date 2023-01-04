import Link from "next/dist/client/link";
import Slider from "react-slick";
import Layout from "../src/layout/Layout";
import Footer from "../src/layout/Footer";
import { NextSeo } from "next-seo";
import { countryContext } from "../src/context/countryContext";
import { useContext, useState } from "react";

const pricing = () => {

  // Importing context with true value if Nepal
  const {isNepal} = useContext(countryContext)
  const [pricing, setPricing] = useState(undefined)

  const changePricing = () => {
    setPricing(!pricing)
  }

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Layout
      // btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      btnCustomHover=" btn btn-tra-white orange-red-hover last-link"
      singlePage
    >
      <NextSeo
        title="RestroX | Pricing | We’ve got the most flexible plan for you"
        description="description"
        additionalMetaTags={[
          {
            property: "description",
            content:
              "An ultimate combination of restaurant operating systems gathered with high-end features compacted all in one app. An app for restaurants of all ranges. An advanced restaurant management system binding all the actions required while operating a restaurant effortlessly. It aims to please all the restaurant’s stakeholders and their beloved customers.",
          },
          {
            property: "keywords",
            content: "Keyword",
            content:
              "How much does a system software cost?, price of restaurant system, system pricing, restaurant system pricing, pricing lists in system software, pricing meaning, what is the pricing of a restaurant management software, restrox pricing, pricing system of a restaurant, amount for restrox, restaurant management system cost, costs of restrox system, restrox software cost, price of restrox system, price of a restrox software, restaurant software cost, what is the price of a restaurant management system, what is the price of a restaurant operating system, software in one app, restaurant operating system, pos system for restaurant, restaurant pos systems, best pos system for restaurant, a cheapest pos system for restaurant, pos system for restaurant cost, best pos system for restaurant and bar, about restaurant operating system, about a restaurant, what is restaurant operating system, what is restrox?, what is restaurant operating system, restaurant operating system, about restaurant, about restrox, restaurant operating system, restaurant, different varieties of restaurant, different types of systems, type of system for managing restaurant, best system to manage restaurant, top system for managing a restaurant, App that manages restaurants billing system ",
          },
        ]}
      />
      <section
        id="pricing-2"
        className="bg-snow pb-60 inner-page-hero pricing-section division"
      >
        <div className="container" 
        // style={{ marginTop: "8rem" }}
        >
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
                {/* Title */}
                <h2 className="h2-md">Simple And Flexible <span style={{textDecoration: "Underline", color: "rgb(226, 20, 20)"}}>Pricing</span> </h2>
                <h4 style={{color: "grey", margin: "20px 0"}} className="h4-md">No credit card required. Change or cancel your plan anytime.</h4>
                {/* Text */}
                
                  <div className="productFeatures">
                  <span> <span className="tick">&#10003;</span> Get started in minutes </span> 
                  <span><span className="tick">&#10003;</span> No credit card required </span> 
                  <span><span className="tick">&#10003;</span> Free on-boarding support </span> 
                  </div>
                
                
                <div className="pricingcontainer">
                <div className="pricing">
                <span onClick={changePricing} className={pricing ? "selected" : ("unselected")}>Anuual</span>
                <span onClick={changePricing} className={pricing ? "unselected" : ("selected")}>Monthly</span>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRICING TABLES */}
          <div className="pricing-2-row pc-25">
            <div className="row row-cols-1 row-cols-md-3">
              {/* BASIC PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price */}
                  <div className="pricing-plan">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      <h5 className="h5-xs">Basic</h5>
                      {/* <h6 className="h6-sm bg-lightgrey">Save 30%</h6> */}
                    </div>
                    {/* Price */}
                    {/* <sup className="dark-color">$</sup> */}
                    <span className="dark-color">Free </span>
                    <sup className="validity dark-color">
                      {/* <span>.99</span> / month */}
                      {/* <span></span>   */}
                      Forever
                    </sup>
                    {/* <p className="p-md">Billed as $96 per year</p> */}
                  </div>
                  {/* Plan Features  */}

                  <ul className="features">
                    <li>
                      <p className="p-md">Unlimited orders</p>
                    </li>
                    <li>
                      <p className="p-md">Unlimited Tables</p>
                    </li>
                    <li>
                      <p className="p-md">Digital menu with unlimited dishes</p>
                    </li>
                    <li>
                      <p className="p-md">Single owner</p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="https://app.restrox.co/register"
                    target="_blank"
                    // className="btn btn-sm btn-tra-grey tra-skyblue-hover"
                    className=" btn btn-sm btn-skyblue tra-grey-hover"
                  >
                    Get Started
                  </a>
                </div>
              </div>{" "}
              {/* END BASIC PLAN */}
              {/* AGENCY PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price */}
                  <div className="pricing-plan">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      {/* <h5 className="h5-xs">Agency</h5> */}
                      <h5 className="h5-xs">Premium</h5>
                    </div>
                    {/* Price */}

                    {/* If nepal is set show pricing in Rs  */}
                    {isNepal ? 
                    <>
                    {pricing ? 
                    <>
                    <sup className="dark-color">Rs</sup>
                    <span className="dark-color">15,000</span>
                    <sup className="validity dark-color">
                      {/* <span>.25</span> */}/ year
                    </sup>
                    </>
                    :
                    (<>
                    <sup className="dark-color">Rs</sup>
                    <span className="dark-color">5,000</span>
                    <sup className="validity dark-color">
                      {/* <span>.25</span> */}/ month
                    </sup>
                    </>)}
                    
                    </> :

                    (<>
                    {pricing ? <>
                      <sup className="dark-color">$</sup>
                    <span className="dark-color">2,000</span>
                    <sup className="validity dark-color">
                      {/* <span>.25</span> */}/ year
                    </sup>
                    </> :
                     (<>
                     <sup className="dark-color">$</sup>
                    <span className="dark-color">500</span>
                    <sup className="validity dark-color">
                      {/* <span>.25</span> */}/ monthly
                    </sup>
                     </>) }
                    </>)}
                    
                    {/* <p className="p-md">Billed as $135 per year</p> */}
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">Everything in Basic and FREE</p>
                    </li>
                    <li>
                      <p className="p-md">Unlimited space</p>
                    </li>
                    <li>
                      <p className="p-md">Unlimited Menus</p>
                    </li>
                    <li>
                      <p className="p-md">Multiple Owner</p>
                    </li>
                    {/* <li>
                      <p className="p-md">Separate Admin Login</p>
                    </li>
                    <li>
                      <p className="p-md">Branch Integration</p>
                    </li>
                    <li>
                      <p className="p-md">Annual reports and logs</p>
                    </li>
                    <li>
                      <p className="p-md">Automatic Inventory Valuation</p>
                    </li>
                    <li>
                      <p className="p-md">Premium social posts</p>
                    </li> */}
                  </ul>
                  {/* Pricing Plan Button */}
                  <a style={{cursor:"default"}}
                    href="#"
                    // className="btn btn-sm btn-tra-grey tra-skyblue-hover"
                    className=" btn btn-sm btn-skyblue tra-grey-hover"
                  >
                    Select Plan
                  </a>
                  <p className="hide" style={{display:"none"}}></p>
                </div>
              </div>{" "}
              {/* END AGENCY PLAN  */}
              {/* ADVANCED PLAN */}
              <div className="col">
                <div className="pricing-2-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price  */}
                  <div className="pricing-plan highlight">
                    {/* Plan Title */}
                    <div className="pricing-plan-title">
                      <h5 className="h5-xs">Enterprise</h5>
                      {/* <h6 className="h6-sm bg-skyblue white-color">Popular</h6> */}
                    </div>
                    {/* Price */}
                    {/* <sup className="dark-color">$</sup>
                    <span className="dark-color">15</span>
                    <sup className="validity dark-color">
                      <span>.99</span> / month
                    </sup> */}
                    <img
                      src="Pricing/corporate.jpeg"
                      layout="fixed"
                      width={50}
                      height={58}
                      alt="corporate image"
                    ></img>
                    {/*   height={60} <p className="p-md">Billed as $199 per year</p> */}
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">Everything in premium  </p>
                    </li>

                    <li>
                      <p className="p-md">
                        Annual Reports and Logs
                        {/* in play store and app store */}
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Customisation and Premium Support
                        {/* in play store and app store */}
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        Automatic Inventory
                        {/* in play store and app store */}
                      </p>
                    </li>
                    {/* <li>
                      <p className="p-md">Enterprise API</p>
                    </li>
                    <li>
                      <p className="p-md">Unlimited customization</p>
                    </li>
                    <li>
                      <p className="p-md">Custom Apps</p>
                    </li>
                    <li>
                      <p className="p-md">Additional Data Storage</p>
                    </li>
                    <li>
                      <p className="p-md">Dedicated server</p>
                    </li>
                    <li>
                      <p className="p-md">Customizable dashboard</p>
                    </li>
                    <li>
                      <p className="p-md">Custom capacity in workload</p>
                    </li>
                    <li>
                      <p className="p-md">Custom Website</p>
                    </li>
                    <li>
                      <p className="p-md">Customization and premium support</p>
                    </li>
                    <li>
                      <p className="p-md">Own delivery system</p>
                    </li>
                    <li>
                      <p className="p-md">Personalized admin training</p>
                    </li> */}
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="/contacts"
                    className="btn btn-sm btn-skyblue tra-grey-hover"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>{" "}
              {/* END ADVANCED PLAN */}
            </div>
          </div>{" "}
          {/* END PRICING TABLES */}
          {/* PRICING COMPARE */}
          <div className="pricing-compare pc-40">
            <div className="row">
              <div className="col">
                <h3 className="h3-sm text-center">Compare Pricing Packages</h3>
                <div className="table-responsive">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th style={{ width: "34%" }} />
                        <th style={{ width: "22%" }}>Basic</th>
                        <th style={{ width: "22%" }}>Premium</th>
                        {/* <th style={{ width: "22%" }}>Advanced</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited orders
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Complete POS
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Digital menu with unlimited dishes
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited Tables
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited members
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Income and expenses report
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Daybook
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Department
                        </th>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Multiple Restaurants
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel" style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Inventory System
                        </th>
                        {/* <td className="ico-10 disabled-option" style={{colro:"#da0819"}}> */}
                        <td className="ico-10 disabled-option" >

                          <span className="flaticon-cancel" style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited menus
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel" style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">
                          Unlimited space
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel" style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>

                      <tr>
                        <th scope="row" className="text-start">
                          Own delivery system
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel" style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>

                      <tr>
                        <th scope="row" className="text-start">
                          Reservation
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel "  style={{color:"#da0819"}}/>
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>

                      <tr>
                        <th scope="row" className="text-start">
                          Custom Role
                        </th>
                        <td className="ico-10 disabled-option">
                          <span className="flaticon-cancel"style={{color:"#da0819"}} />
                        </td>
                        <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td>
                        {/* <td className="ico-15 green-color">
                          <span className="flaticon-check" />
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
              </div>
            </div>
          </div>{" "}
          {/* END PRICING COMPARE */}
          {/* PRICING NOTICE TEXT */}
          {/* <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="pricing-notice text-center mb-40">
                <p className="p-md">
                  The above prices do not include applicable taxes based on your
                  billing address. The final price will be displayed on the
                  checkout page, before the payment is completed
                </p>
              </div>
            </div>
          </div> */}
          {/* PAYMENT METHODS */}
          {/* <div className="payment-methods pc-30">
            <div className="row row-cols-1 row-cols-md-3">
           
              <div className="col col-lg-5">
                <div className="pbox mb-40">
                
                  <h6 className="h6-md">Accepted Payment Methods</h6>
                 
                  <ul className="payment-icons ico-50">
                    <li>
                      <img
                        src="/images/png-icons/visa.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/png-icons/am.png" alt="payment-icon" />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/discover.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/paypal.png"
                        alt="payment-icon"
                      />
                    </li>
                    <li>
                      <img src="/images/png-icons/jcb.png" alt="payment-icon" />
                    </li>
                    <li>
                      <img
                        src="/images/png-icons/shopify.png"
                        alt="payment-icon"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            
              <div className="col col-lg-4">
                <div className="pbox mb-40">
                 
                  <h6 className="h6-md">Money Back Guarantee</h6>
               
                  <p>
                    Explore OLMO Premium for 14 days. If it’s not a perfect fit,
                    receive a full refund.
                  </p>
                </div>
              </div>
              <div className="col col-lg-3">
                <div className="pbox mb-40">
                
                  <h6 className="h6-md">SSL Encrypted Payment</h6>
                
                  <p>
                    Your information is protected by 256-bit SSL encryption.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
           */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END PRICING-2 */}
      {/* CALL TO ACTION-4
			============================================= */}
      <section id="cta-4" className="cta-section division">
        <div className="cta-4-holder bg-snow">
          <div className="container">
            <div className="bg-white cta-4-wrapper">
              <div className="row d-flex align-items-center">
                {/* CALL TO ACTION TEXT */}
                <div className="col-lg-7 col-lg-8">
                  <div className="cta-4-txt">
                    <h4 className="h4-xl">
                      RestroX is available for free . Download and get started
                      now.
                    </h4>
                  </div>
                </div>
                {/* CALL TO ACTION BUTTON */}
                <div className="col-lg-4">
                  <div className="text-end">
                    {/* <div className="cta-4-btn text-center"> */}
                    <div style={{margniTop:"12rem !important"}}>

                      {/* <Link href="/pricing">
                        <a
                          className="btn btn-skyblue tra-grey-hover"
                          target="_blank"
                        >
                          Get Started
                        </a>
                      </Link>
                      <p>
                        <Link href="/faqs">
                          <a>Download Now</a>
                        </Link>
                      </p> */}
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
                       
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>
      </section>
      {/* END CALL TO ACTION-4 */}
      {/* FAQs-2
			============================================= */}
      {/* <section id="faqs-2" className="wide-60 faqs-section division">
        <div className="container">
        
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
              
                <h2 className="h2-md">Got Questions? Look Here</h2>
                
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
         
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
           
              <div className="col">
                <div className="questions-holder pr-15">
               
                  <div className="question wow fadeInUp">
                  
                    <h5 className="h5-sm">
                      Can I see OLMO in action before purchasing?
                    </h5>
                    <p className="p-lg">
                      Etiam amet mauris suscipit in odio integer congue metus
                      vitae arcu mollis blandit ultrice ligula egestas and magna
                      suscipit lectus magna suscipit luctus blandit vitae
                    </p>
                  </div>
                  <div className="question wow fadeInUp">
                    <h5 className="h5-sm">
                      What are the requirements for using OLMO?
                    </h5>
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida a donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium
                    </p>
                  </div>
                  <div className="question wow fadeInUp">
                    <h5 className="h5-sm">
                      Can I use OLMO on different devices?
                    </h5>
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                          ligula euismod pretium purus pretium rutrum tempor
                          sapien
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium a purus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              <div className="col">
                <div className="questions-holder pl-15">
                  <div className="question wow fadeInUp">
                    <h5 className="h5-sm">Do you have a free trial?</h5>
                    <p className="p-lg">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque. Blandit justo aliquam molestie nunc sapien
                    </p>
                  </div>
                  <div className="question wow fadeInUp">
                    <h5 className="h5-sm">How does OLMO handle my privacy?</h5>
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div>
                  <div className="question wow fadeInUp">
                    <h5 className="h5-sm">I have an issue with my account</h5>
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Quaerat sodales sapien euismod blandit purus and ipsum
                          primis in cubilia laoreet augue luctus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>{" "}
      </section> */}
      {/* END FAQs-2 */}
      {/* TESTIMONIALS-1
			============================================= */}
      {/* <section
        id="reviews-1"
        className="bg-whitesmoke-gradient pt-100 reviews-section division slickmargin"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                <h2 className="h2-md">Stories From Our Customers</h2>
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Slider
                {...settings}
                className="owl-carousel owl-theme reviews-1-wrapper"
              >
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-1.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Scott Boxer</h6>
                        <p className="p-md">@scott_boxer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      At sagittis congue augue and egestas magna ipsum vitae a
                      purus ipsum primis in cubilia laoreet augue egestas luctus
                      and donec diam ultrice ligula magna suscipit lectus gestas
                      augue into cubilia
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-2.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Joel Peterson</h6>
                        <p className="p-md">Internet Surfer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      Mauris donec magnis sapien etiam sapien congue augue
                      egestas et ultrice vitae purus diam integer a congue magna
                      ligula undo egestas magna at suscipit feugiat primis
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-3.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Marisol19</h6>
                        <p className="p-md">@marisol19</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      Mauris donec a magnis sapien etiam sapien congue augue
                      pretium ligula lectus aenean a magna undo mauris lectus
                      laoreet tempor egestas
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-4.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Leslie D.</h6>
                        <p className="p-md">Web Developer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      An augue cubilia laoreet magna suscipit egestas and ipsum
                      a lectus purus ipsum primis and augue ultrice ligula and
                      egestas a suscipit lectus gestas undo auctor tempus
                      feugiat impedit
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-5.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Jennifer Harper</h6>
                        <p className="p-md">App Developer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      An augue cubilia laoreet undo magna ipsum semper suscipit
                      egestas magna ipsum ligula a vitae purus and ipsum primis
                      cubilia magna suscipit
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-6.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Jonathan Barnes</h6>
                        <p className="p-md">jQuery Programmer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      Augue egestas diam tempus volutpat egestas augue in
                      cubilia laoreet magna suscipit luctus dolor and blandit
                      vitae purus diam tempus an aliquet porta rutrum gestas
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-7.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Mike Harris</h6>
                        <p className="p-md">Graphic Designer</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="review-1">
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  <div className="review-1-txt">
                    <p className="p-lg">
                      Augue at vitae purus tempus egestas volutpat augue undo
                      cubilia laoreet magna suscipit luctus dolor blandit at
                      purus tempus feugiat impedit
                    </p>
                    <div className="author-data clearfix">
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-8.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      <div className="review-author">
                        <h6 className="h6-xl">Evelyn Martinez</h6>
                        <p className="p-md">WordPress Consultant</p>
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </Slider>
            </div>
          </div>{" "}
        </div>{" "}
      </section> */}
      <Footer />
    </Layout>
  );
};

export default pricing;
