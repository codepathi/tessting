import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import Footer from "../src/layout/Footer";
import { NextSeo } from "next-seo";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const contacts = () => {
  const optionRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ok3wwkn",
        "template_o04p0ad",
        e.target,
        "YBYYXMiNXMQ2VWiu7"
      )
      .then(
        (result) => {
          console.log(result.text);
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          optionRef.current.value = null;

          // Display toast message
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout
      btnCustomHover="btn btn-tra-white orange-red-hover last-link"
      singlePage
    >
      <NextSeo
        title="RestroX | Contact us"
        description="description"
        additionalMetaTags={[
          {
            property: "description",
            content:
              "RestroX is an ultimate combination of restaurant operating systems gathered with high-end features compacted all in one app. ",
          },
          {
            property: "keywords",
            content: "Keyword",
            content:
              "software in one app, restaurant operating system, all in one app, pos system for restaurant meaning, restaurant pos systems, best pos system for restaurant, a cheapest pos system for restaurant, list of restaurant pos systems, pos system for restaurant cost, best pos system for restaurant and bar, pos system for restaurant, about restaurant operating system, about a restaurant, restaurant operating system about, what is restaurant operating system, what is restrox?, what is restaurant operating system, restaurant operating system, about restaurant, about restrox, restaurant operating system, restaurant, different varieties of restaurant, different types of systems, type of system for managing restaurant, best system to manage restaurant, top system for managing a restaurant, App that manages restaurants billing system, social media management ",
          },
        ]}
      />
      <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
        // className="bg-snow  inner-page-hero contacts-section division"
      >
        <div
          className="container"
          //  style={{ marginTop: "8rem" }}
        >
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                {/* Title */}
                <h2 className="h2-xs">
                  {` Need help? It’s easy to get started.`}
                </h2>
                {/* Text */}
                <p className="p-xl">
                  What makes us the best? It’s the support we provide.
                  <br /> Let’s get in touch now.
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="form-holder">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={sendEmail}
                >
                  {/* Form Select */}
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">This question is about: </p>
                    <span>
                      Choose a topic, so we know who to send your request to:{" "}
                    </span>

                    <select
                      ref={optionRef}
                      className="form-select subject"
                      aria-label="Default select example"
                      required
                    >
                      {/* <option>This question is about...</option> */}
                      <option selected>Registration</option>
                      <option>Add Restaurant</option>
                      <option>Staff Management</option>
                      <option>QR Request/Scan</option>
                      <option>Account</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Contact Form Input */}
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    <span>Please enter your real name: </span>
                    <input
                      ref={nameRef}
                      type="text"
                      className="form-control name"
                      placeholder="Your Name*"
                      name="user_first_name"
                      required
                      minLength="3"
                      maxLength="40"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    <span>
                      Please carefully check your email address for accuracy
                    </span>
                    <input
                      ref={emailRef}
                      className="form-control email"
                      placeholder="Email Address*"
                      name="user_email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>
                    {/* <span>
                      Your OS version, OLMO version &amp; build, steps you did.
                      Be VERY precise!
                    </span> */}
                    <textarea
                      ref={messageRef}
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="I want to know..."
                      defaultValue={""}
                      required
                      type="text"
                      minLength="20"
                      maxLength="200"
                    />
                  </div>
                  {/* Contact Form Button */}
                  {/* <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-skyblue tra-grey-hover submit"
                    >
                      Submit Request
                    </button>
                  </div> */}
                  {/* m adding same button*/}
                  <div className="btns-group mb-30 wow fadeInUp">
                    {/* <a
                     
                      target="_blank"
                      className="btn btn-green tra-white-hover mr-15"
                    >
                      Submit
                    </a> */}
                    <button className="btn btn-green tra-white-hover mr-15">
                      Submit
                    </button>
                    <ToastContainer
                      hideProgressBar={true}
                      style={{ zIndex: "1000", marginTop: "5rem" }}
                    />
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* END CONTACT FORM */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END CONTACTS-2 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      {/* CALL TO ACTION-8
			============================================= */}
      <section id="cta-8" className="bg-snow wide-100 cta-section division">
        <div className="container">
          <div className="cta-8-wrapper pc-25">
            <div className="row row-cols-1 row-cols-md-2">
              {/* BOX #1 */}
              <div className="col">
                <Link href="/pricing">
                  <a>
                    {/* <div className="cta-box cta-top-box bg-white wow fadeInUp"> */}
                    <div className="cta-box cta-top-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-wallet" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        {/* <h5 className="h5-md">View Pricing</h5> */}
                        <Link href="/pricing">
                          <h5>View Pricing</h5>
                        </Link>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #1 */}
              {/* BOX #2 */}
              <div className="col">
                <Link href="/faqs">
                  <a>
                    <div className="cta-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-help" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">Read the FAQs</h5>
                        {/* Text */}
                        {/* <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p> */}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #2 */}
            </div>{" "}
            {/* End cta-8-wrapper */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END CALL TO ACTION-8 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      <Footer />
    </Layout>
  );
};

export default contacts;
