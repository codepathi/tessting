import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import Footer from "../src/layout/Footer";
import { NextSeo } from "next-seo";

const terms = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <NextSeo
        title="RestroX | Privacy & Terms"
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
              "login restrox, login restrox app, login restrox nepal, restrox login, sign up restrox, sign in on restrox, restrox sign in, get started on restrox, restrox get started, pos system for restaurant meaning, best pos system for restaurant, cheapest pos system for restaurant, list of restaurant pos systems, pos system for restaurant cost, best pos system for restaurant and bar, pos system for restaurant, restaurant software in nepal, restaurant management system price, pos system in nepal, billing software in nepal, billing software price in nepal, Restaurant operating system, restaurant management system, An app to manage restaurant, App for restaurants, App for restaurants in nepal, App that manages restaurants billing, Easy to use app for restaurant, top restaurant management system, top restaurant operating system, best restaurant operating system, what is restrox?, what is restaurant operating system, about restaurant, inventory management, account management system, best for operation of restaurant, best system to manage a restaurant, examples of restaurant system software, examples of restaurant system, examples of restaurant software, what can we use to operate the restaurant management system?, restaurant, ",
          },
        ]}
      />
      <section
        id="terms-page"
        className="bg-snow wide-70 inner-page-hero terms-section division"
      >
        <div className="container">
          {/* TERMS CONTENT */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* TERMS TITLE */}
              <div
                className="terms-title text-center"
                //  style={{marginTop:"8rem"}}
              >
                {/* Title */}
                {/* <h2 className="h2-md">Our Terms &amp; Privacy</h2> */}
                <h2 className="h2-md">Terms &amp; Privacy</h2>

                {/* Text */}
                <p className="p-xl grey-color">Last Modified: Jan 01, 2022</p>
              </div>
              {/* DIVIDER LINE */}
              <hr className="divider" />
              {/* TERMS BOX */}
              <div className="terms-box mt-60">
                {/* Text */}
                <p className="p-lg">
                  {/* Donec sodales, nibh vel (the{" "} */}
                  {/* <span className="txt-500">{`"Terms"`}</span>)  */}
                  Please read Privacy Policy
                </p>
                {/* Text */}
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                {/* <h5 className="h5-xl">Reservation of Rights</h5> */}
                {/* Text */}
                <p className="p-lg">
                  At RestroX, accessible from www.restrox.co, one of our main
                  priorities is the privacy of our visitors. This Privacy Policy
                  document contains types of information that is collected and
                  recorded by RestroX and how we use it. <br></br>
                  <br></br>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                  <br></br>
                  <br></br>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in RestroX. This
                  policy is not applicable to any information collected offline
                  or via channels other than this website.
                </p>
                {/* Text */}
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Consent</h5>
                {/* Text */}

                <p className="p-lg">
                  By using our website, you hereby consent to our Privacy Policy
                  and agree to its terms.
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Information we collect</h5>
                {/* Text */}

                <p className="p-lg">
                  The personal information that you are asked to provide, and
                  the reasons why you are asked to provide it, will be made
                  clear to you at the point we ask you to provide your personal
                  information.
                  <br></br>
                  <br></br>
                  If you contact us directly, we may receive additional
                  information about you such as your name, email address, phone
                  number, the contents of the message and/or attachments you may
                  send us, and any other information you may choose to provide.
                  <br></br>
                  <br></br>
                  When you register for an Account, we may ask for your contact
                  information, including items such as name, Restaurant name,
                  address, email address, and telephone number.
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #3 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">How we use your information</h5>
                {/* Text */}
                <p className="p-lg">
                  We use the information we collect in various ways, including
                  to:
                </p>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Provide, operate, and maintain our website.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Improve, personalize, and expand our website.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Understand and analyze how you use our website.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Develop new products, services, features, and
                      functionality.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Communicate with you, either directly or through one of
                      our partners, including for customer service, to provide
                      you with updates and other information relating to the
                      website, and for marketing and promotional purposes.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">Send you emails.</p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">Find and prevent fraud.</p>
                  </li>
                </ul>
                {/* Text */}
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Log Files</h5>
                {/* Text */}
                <p className="p-lg">
                  RestroX follows a standard procedure of using log files. These
                  files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information.
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Cookies and Web Beacons</h5>
                {/* Text */}
                <p className="p-lg">
                  Like any other website, RestroX uses 'cookies'. These cookies
                  are used to store information including visitors' preferences,
                  and the pages on the website that the visitor accessed or
                  visited. The information is used to optimize the users'
                  experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Advertising Partners Privacy Policies</h5>
                {/* Text */}
                <p className="p-lg">
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of RestroX.
                  <br></br>
                  <br></br>
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on RestroX,
                  which is sent directly to users' browser. They automatically
                  receive your IP address when this occurs. These technologies
                  are used to measure the effectiveness of their advertising
                  campaigns and/or to personalize the advertising content that
                  you see on websites that you visit.
                  <br></br>
                  <br></br>
                  Note that RestroX has no access to or control over these
                  cookies that are used by third-party advertisers.
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Third Party Privacy Policies</h5>
                {/* Text */}
                <p className="p-lg">
                  RestroX | Restaurant Operating system's Privacy Policy does
                  not apply to other advertisers or websites. Thus, we are
                  advising you to consult the respective Privacy Policies of
                  these third-party ad servers for more detailed information. It
                  may include their practices and instructions about how to
                  opt-out of certain options.
                  <br></br>
                  <br></br>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites.
                  <br></br>
                  <br></br>
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Children's Information</h5>
                {/* Text */}
                <p className="p-lg">
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                  <br></br>
                  <br></br>
                  RestroX does not knowingly collect any Personal Identifiable
                  Information from children under the age of 16. If you think
                  that your child provided this kind of information on our
                  website, we strongly encourage you to contact us immediately
                  and we will do our best efforts to promptly remove such
                  information from our records.
                </p>
              </div>{" "}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">GDPR Data Protection Rights</h5>
                {/* Text */}
                <p className="p-lg">
                  We would like to make sure you are fully aware of all of your
                  data protection rights. Every user is entitled to the
                  following:
                </p>
                <br></br>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      The right to access – You have the right to request copies
                      of your personal data. We may charge you a small fee for
                      this service.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      The right to rectification – You have the right to request
                      that we correct any information you believe is inaccurate.
                      You also have the right to request that we complete the
                      information you believe is incomplete.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      The right to erasure – You have the right to request that
                      we erase your personal data, under certain conditions.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      The right to restrict processing – You have the right to
                      request that we restrict the processing of your personal
                      data, under certain conditions.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      The right to object to processing – You have the right to
                      object to our processing of your personal data, under
                      certain conditions.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      The right to data portability – You have the right to
                      request that we transfer the data that we have collected
                      to another organization, or directly to you, under certain
                      conditions.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      If you make a request, we have one month to respond to
                      you. If you would like to exercise any of these rights,
                      please contact us.
                    </p>
                  </li>
                </ul>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}

                {/* List */}
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #5 */}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">{/* Title */}</div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              {/* END TERMS BOX */}
              {/* TERMS BOX #9 */}
              {/* END TERMS BOX */}
            </div>{" "}
            {/* END TERMS CONTENT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END TERMS & PRIVACY */}
      {/* CALL TO ACTION-1
			============================================= */}

      {/* <section id="cta-1" className="bg-snow cta-section division">
        <div className="container">
          <div className="rel bg-white cta-1-wrapper">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <div className="cta-1-txt">
                  <h4 className="h4-xl">
                    Try RestroX free for 14 days. Start your trial now and pick
                    a plan later
                  </h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="cta-1-btn text-center">
                    <Link href="https://app.restrox.co/register">
                      <a
                        className="btn btn-skyblue tra-grey-hover"
                        target="_blank"
                      >
                        Get Started Now
                      </a>
                    </Link>
                    <p>
                      <a href="/faqs" target="_blank">
                        Read The FAQs
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </Layout>
  );
};

export default terms;
