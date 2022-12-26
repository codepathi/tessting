import Link from "next/dist/client/link";
import Layout from "../src/layout/Layout";
import Footer from "../src/layout/Footer";
// import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { Accordion, Card } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { useState } from "react";
import { NextSeo } from "next-seo";
// import Accordion from "react-bootstrap/Accordion";

const faqs = () => {
  const [plus, SetPlus] = useState("-");
  const [plusOne, SetPlusOne] = useState("-");
  const [plusTwo, SetPlusTwo] = useState("-");
  const [plusThree, setPlusThree] = useState("-");
  const [plusFour, setPlusFour] = useState("-");
  const [plusFive, setPlusFive] = useState("-");
  const [plusSix, setPlusSix] = useState("-");
  const [plusSeven, setPlusSeven] = useState("-");
  const [plusEight, setPlusEight] = useState("-");
  const [plusNine, setPlusNine] = useState("-");
  const [plusTen, setPlusTen] = useState("-");
  const [plusEleven, setPlusEleven] = useState("-");
  const [plusTweleve, setPlusFTweleve] = useState("-");
  const [plusThirteen, setPlusThirteen] = useState("-");
  const [plusFourteen, setPlusFourteen] = useState("-");

  const changeSign = () => {
    // plus = "-";
    // SetPlus(plus);
    console.log("hello");
    if (plus === "+") {
      SetPlus("-");
    } else {
      SetPlus("+");
    }
  };
  const changeSignOne = () => {
    console.log("hello One");
    if (plusOne === "+") {
      SetPlusOne("-");
    } else {
      SetPlusOne("+");
    }
  };

  const changeSignTwo = () => {
    console.log("hello One");
    if (plusTwo === "+") {
      SetPlusTwo("-");
    } else {
      SetPlusTwo("+");
    }
  };
  const changeSignThree = () => {
    plusThree === "+" ? setPlusThree("-") : setPlusThree("+");
  };
  const changeSignFour = () => {
    plusFour === "+" ? setPlusFour("-") : setPlusFour("+");
  };
  const changeSignFive = () => {
    plusFive === "+" ? setPlusFive("-") : setPlusFive("+");
  };
  const changeSignSix = () => {
    plusSix === "+" ? setPlusSix("-") : setPlusSix("+");
  };

  const changeSignSeven = () => {
    plusSeven === "+" ? setPlusSeven("-") : setPlusSeven("+");
  };
  const changeSignEight = () => {
    plusEight === "+" ? setPlusEight("-") : setPlusEight("+");
  };
  const changeSignNine = () => {
    plusNine === "+" ? setPlusNine("-") : setPlusNine("+");
  };
  const changeSignTen = () => {
    plusTen === "+" ? setPlusTen("-") : setPlusTen("+");
  };
  const changeSignEleven = () => {
    plusEleven === "+" ? setPlusEleven("-") : setPlusEleven("+");
  };
  const changeSignTweleve = () => {
    plusTweleve === "+" ? setPlusFTweleve("-") : setPlusFTweleve("+");
  };
  const changeSignThirteen = () => {
    plusThirteen === "+" ? setPlusThirteen("-") : setPlusThirteen("+");
  };
  const changeSignFourteen = () => {
    plusFourteen === "+" ? setPlusFourteen("-") : setPlusFourteen("+");
  };

  return (
    <Layout
      navLight
      whiteLogo
      btnCustomHover="btn btn-skyblue tra-white-hover last-link"
      singlePage
    >
      <NextSeo
        title="RestroX | FAQs | How can we help you?"
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
              "faqs meaning, faqs of a restaurant, restaurant faq page, faq of restrox, restrox faq, restrox.co faq page, restrox,co faq, faqs in restaurant, what is faq of restrox, frequent questions of restaurant, frequently asked questions about restaurants software, frequently asked questions about restrox, questions in restaurant system, faqs for restaurant website, faqs covid restaurant, faq coronavirus restaurant, restaurant revitalization faqs, restrox revitalization faqs, how to login on restrox?, get started on restrox, software in one app, restaurant operating system, pos system for restaurant meaning, restaurant pos systems, best pos system for restaurant, a cheapest pos system for restaurant, list of restaurant pos systems, pos system for restaurant cost, best pos system for restaurant and bar, about a restaurant, restaurant operating system about, what is restaurant operating system, what is restrox?, what is restaurant operating system, restaurant operating system, about restaurant, restaurant, different varieties of restaurant, different types of systems, type of system for managing restaurant, best system to manage restaurant, top system for managing a restaurant, App that manages restaurants billing system, social media management ",
          },
        ]}
      />
      <div id="faqs-page" className="page-hero-section division">
        {/* <div className="page-hero-overlay division"> */}
        <div className="division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                {/* <div className="hero-txt text-center white-color"> */}
                <div className="hero-txt text-center">
                  {/* Title */}
                  {/* <h2 className="h2-xs" style={{backgroundColor:"red"}}>Frequently Asked Questions</h2> */}
                  <h2 className="h2-xs">Frequently Asked Questions</h2>

                  {/* <h2 className="h2-xs h5-md" style={{backgroundColor:"red"}}>Frequently Asked Questions</h2> */}

                  {/* Text */}
                  {/* <p className="p-xl" >
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit and cursus varius
                  </p> */}
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End hero-overlay */}
        {/* WAVE SHAPE BOTTOM */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path
              fill="#ffffff"
              fillOpacity={1}
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>{" "}
      {/* END PAGE HERO */}
      {/* FAQs-2
			============================================= */}
      <section
        id="faqs-2"
        // className="wide-60 faqs-section division"
        className="wide-11 faqs-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="more-questionsM">
                {/* <h5 className="h5-sm"> */}
                <h5 className="h5-md">
                  {/* Have more questions?{" "} */}
                  General{" "}
                  {/* <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link> */}
                </h5>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  <div className="question wow fadeInUp">
                    {/* <h5 className="h5-md">What is RestroX?</h5>

                    <p className="p-lg">
                     
                      provide all of these features in one single app or system.
                    </p> */}
                  </div>
                  <div className="question wow fadeInUp">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <div
                            onClick={changeSign}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            <h5 className="h5-md">What is RestroX?</h5>
                            {/* <p className="h5-md">-</p> */}
                            <p className="h5-md">{plus}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            {" "}
                            RestroX is an ultimate restaurant operating system
                            gathered with high-end features compacted all in one
                            app. It brings together a varied range of services
                            from integrated online ordering to tracking of
                            inventory, managing your staff and business reports,
                            automated inventory, and a cloud-based system. Most
                            businesses use a computer terminal, coupled with the
                            POS software, in order to ease the process of
                            managing everyday operations and sales transactions,
                            and RestroX is the system that will provide all of
                            these features in one single app or system.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>

                  {/* QUESTION #2 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    {/* <h5 className="h5-md">How does RestroX work?</h5>
                    <p className="p-lg">
                      secure? Haven’t got your answer
                    </p> */}
                  </div>
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="1">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            onClick={changeSignOne}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              How does RestroX works? second question
                            </h5>
                            {/* <p>-</p> */}
                            <p>{plusOne} </p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Once you have registered and successfully signed in,
                            it will create your restaurant’s domain where you
                            can operate your entire restaurant’s operations. You
                            can manage your tasks, staff, order management,
                            assign tasks, manage inventory, manage your social
                            media management.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>

                  {/* QUESTION #3 */}
                  <div className="question wow fadeInUp"></div>
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                            
                            <h5 className="h5-md">
                              How does RestroX works? third question{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Once you have registered and successfully signed in,
                            it will create your restaurant’s domain where you
                            can operate your entire restaurant’s operations. You
                            can manage your tasks, staff, order management,
                            assign tasks, manage inventory, manage your social
                            media management.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    {/* <h5 className="h5-md">Is RestroX secure?</h5> */}
                    {/* Answer */}
                    {/* <p className="p-lg">
                      
                      update your security settings at any time.
                    </p> */}
                  </div>
                  <div className="question wow fadeInUp">
                    <Accordion defaultActiveKey="2">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          <div
                            onClick={changeSignTwo}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            <h5 className="h5-md">
                              How does RestroX works? third question{" "}
                            </h5>
                            <p>{plusTwo}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            Once you have registered and successfully signed in,
                            it will create your restaurant’s domain where you
                            can operate your entire restaurant’s operations. You
                            can manage your tasks, staff, order management,
                            assign tasks, manage inventory, manage your social
                            media management.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #5 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    {/* <h5 className="h5-md">How does OLMO handle my privacy?</h5> */}
                    {/* Answer */}
                    {/* <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p> */}
                    {/* Answer */}
                  </div>
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                           
                            <h5 className="h5-md">
                              How does RestroX works? third question{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Once you have registered and successfully signed in,
                            it will create your restaurant’s domain where you
                            can operate your entire restaurant’s operations. You
                            can manage your tasks, staff, order management,
                            assign tasks, manage inventory, manage your social
                            media management.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                  {/* QUESTION #6 */}
                  {/* <div className="question wow fadeInUp">
                    
                    <h5 className="h5-md">I have an issue with my account</h5>
                  
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
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          {/* <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  Accounts{" "}
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* second par */}
      <section
        id="faqs-2"
        className="wide-11 faqs-section division"
        // style={{ marginTop: "-8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="more-questionsM">
                <h5 className="h5-md">
                  {/* Have more questions?{" "} */}
                  Accounts{" "}
                  {/* <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link> */}
                </h5>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  {/* <div className="question wow fadeInUp">
                    <h5 className="h5-md">
                      Can I get access to my financial report?
                    </h5>
                    <p className="p-lg">
                      Yes, you can access your financial report according to our
                      features used. For premium and above users, you can get
                      your annual reports and logs in our system. For more
                      information you can visit our pricing page.
                    </p>
                  </div> */}

                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="3">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                          <div
                            onClick={changeSignThree}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>{plusThree}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #2 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">How to recover my password?</h5>
                  
                    <p className="p-lg">
                      You can recover your password by clicking on the forgot
                      password button. A password reset link will be sent to
                      your email that you have used while registering. Once you
                      click or verify that link you can reset your password by
                      typing a new password. What happens after I download
                      RestroX app?
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="4">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                          <div
                            onClick={changeSignFour}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              How to recover my password?{" "}
                            </h5>

                            <p>{plusFour}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            You can recover your password by clicking on the
                            forgot password button. A password reset link will
                            be sent to your email that you have used while
                            registering. Once you click or verify that link you
                            can reset your password by typing a new password.
                            What happens after I download RestroX app?
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #3 */}
                  {/* <div className="question wow fadeInUp">
                    <h5 className="h5-md">
                      What happens after I download RestroX app?
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
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                          
                            <h5 className="h5-md">
                            What happens after I download RestroX app?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          After downloading the RestroX app, you will be required to sign up to RestroX if you are a new user. If you are already a user on RestroX then you can simply log in to your RestroX account.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  {/* <div className="question wow fadeInUp">
                    <h5 className="h5-md">
                      What happens after I download RestroX app?
                    </h5>

                    <p className="p-lg">
                      After downloading the RestroX app, you will be required to
                      sign up to RestroX if you are a new user. If you are
                      already a user on RestroX then you can simply log in to
                      your RestroX account.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="5">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                          <div
                            onClick={changeSignFive}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              What happens after I download RestroX app?{" "}
                            </h5>

                            <p>{plusFive}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="5">
                          <Card.Body>
                            After downloading the RestroX app, you will be
                            required to sign up to RestroX if you are a new
                            user. If you are already a user on RestroX then you
                            can simply log in to your RestroX account.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #5 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                   
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                  
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                           
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                  {/* QUESTION #6 */}
                  {/* <div className="question wow fadeInUp">
                    <h5 className="h5-md">I have an issue with my account</h5>

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
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          {/* <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  Sign In/ Log In?{" "}
                  
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* Third Sign In and Log IN  */}
      <section
        id="faqs-2"
        // className="wide-60 faqs-section division"

        className="wide-11 faqs-section division"
        // style={{ marginTop: "-8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="more-questionsM">
                <h5 className="h5-md">
                  {/* Have more questions?{" "} */}
                  Sign In/ Log In{" "}
                  {/* <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link> */}
                </h5>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">How to get started?</h5>
                  
                    <p className="p-lg">
                      You can get started by registering on RestroX sign-up
                      page.You can either click on the get started button or
                      click the https:/app.restrox.co/register to get started.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="6">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                          <div
                            onClick={changeSignSix}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">How to get started? </h5>
                            <p>{plusSix}</p>
                          </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                          <Card.Body>
                            You can get started by registering on RestroX
                            sign-up page. You can either click on the{" "}
                            <a
                              href="https://app.restrox.co/register"
                              target="_blank"
                              style={{ color: "#da0819" }}
                            >
                              Get Started{" "}
                            </a>
                            button or click the{" "}
                            <a
                              href="https://app.restrox.co/register"
                              target="_blank"
                              style={{ color: "#da0819" }}
                            >
                              https://app.restrox.co/register{" "}
                            </a>
                            to get started.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #2 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">
                      How long will it take to register/sign in?
                    </h5>
                  
                    <p className="p-lg">
                      Registering or signing in to RestroX is just easy as a
                      pie. It will take just five minutes to register or sign in
                      to RestroX.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="7">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                          <div
                            onClick={changeSignSeven}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              How long will it take to register/sign in?{" "}
                            </h5>

                            <p>{plusSeven}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="7">
                          <Card.Body>
                            Registering or signing in to RestroX is just easy as
                            a pie. It will take just five minutes to register or
                            sign in to RestroX.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #3 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">What can I access when I login?</h5>
                
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          For basic users: You can access the most basic
                          features of RestroX like orders, inventory, digital
                          menu, accounting system, complete POS, and many more.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          For premium users: You can access the basic features
                          as well as additional management options with
                          unlimited options.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Enterprise users: You can access all the features of
                          basic users and premium users along with custom
                          options.
                        </p>
                      </li>
                    </ul>
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                           
                            <h5 className="h5-md">
                            What can I access when I login?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                          <p className="p-lg">
                          Different types of visitors have different levels of access to our features. l
                        </p>
                          <ul className="simple-list">

                      <li className="list-item">
                        <p className="p-lg">
                          For basic users: You can access the most basic
                          features of RestroX like orders, inventory, digital
                          menu, accounting system, complete POS, and many more.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          For premium users: You can access the basic features
                          as well as additional management options with
                          unlimited options.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Enterprise users: You can access all the features of
                          basic users and premium users along with custom
                          options.
                        </p>
                      </li>
                    </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">Is RestroX secure?</h5>
                    
                    <p className="p-lg">
                      RestroX guarantees and ensures that their customers data
                      and privacy are all secured and well protected. We offer
                      several security features to help you add an extra layer
                      of protection to your account. You can also review and
                      update your security settings at any time.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="8">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                          <div
                            onClick={changeSignEight}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            <h5 className="h5-md">
                              What can I access when I login?{" "}
                            </h5>

                            <p>{plusEight}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="8">
                          <Card.Body>
                            <p className="p-lg">
                              Different types of visitors have different levels
                              of access to our features.
                            </p>
                            <ul className="simple-list">
                              <li className="list-item">
                                <p className="p-lg">
                                  For basic users: You can access the most basic
                                  features of RestroX like orders, inventory,
                                  digital menu, accounting system, complete POS,
                                  and many more.
                                </p>
                              </li>
                              <li className="list-item">
                                <p className="p-lg">
                                  For premium users: You can access the basic
                                  features as well as additional management
                                  options with unlimited options.
                                </p>
                              </li>
                              <li className="list-item">
                                <p className="p-lg">
                                  Enterprise users: You can access all the
                                  features of basic users and premium users
                                  along with custom options.
                                </p>
                              </li>
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>

                  {/* QUESTION #5 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                  
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                   
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                  {/* QUESTION #6 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">I have an issue with my account</h5>
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
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          {/* <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  Sales?{" "}
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* Fourth Sales */}
      <section
        id="faqs-2"
        className="wide-11 faqs-section division"
        // style={{ marginTop: "-8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="more-questionsM">
                <h5 className="h5-md">
                  {/* Have more questions?{" "} */}
                  Sales{""}
                  {/* <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link> */}
                </h5>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">What is RestroX?</h5>
                   
                    <p className="p-lg">
                      RestroX is an ultimate restaurant operating system
                      gathered with high-end features compacted all in one app.
                      It brings together a varied range of services from
                      integrated online ordering to tracking of inventory,
                      managing your staff and business reports, automated
                      inventory, and a cloud-based system. Most businesses use a
                      computer terminal, coupled with the POS software, in order
                      to ease the process of managing everyday operations and
                      sales transactions, and RestroX is the system that will
                      provide all of these features in one single app or system.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="9">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                          <div
                            onClick={changeSignNine}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              How can my restaurant benefit from RestroX?{" "}
                            </h5>

                            <p>{plusNine}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="9">
                          <Card.Body>
                            You can get started by registering on RestroX
                            sign-up page. You can either click on the get
                            started button or click the about us to get started.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #2 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">How does RestroX work?</h5>
                   
                    <p className="p-lg">
                      Once you have registered and successfully signed in, it
                      will create your restaurant’s domain where you can operate
                      your entire restaurant’s operations. You can manage your
                      tasks, staff, order management, assign tasks, manage
                      inventory, manage your social media management. Is RestroX
                      secure? Haven’t got your answer
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="10">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="10">
                          <div
                            onClick={changeSignTen}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              I already have a restaurant's private website. Why
                              do I need RestroX?{" "}
                            </h5>

                            <p>{plusTen}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="10">
                          <Card.Body>
                            To run a restaurant smoothly requires different
                            areas of operations. With RestroX you can access all
                            of your restaurant's operations in a single system.
                            To know more about RestroX you can visit our about
                            us page or click here.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #3 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">
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
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                            <p  className="h5-md">What is RestroX?</p>
                            <h5 className="h5-md">
                              Is RestroX suitable for my business?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Absolutely. One of the most exclusive features that
                            RestroX has is it’s specifically designed and made
                            for restaurants to handle the overall operations of
                            a restaurant's business. Along with that, it is easy
                            to boost up your social media presence as it also
                            has an option for social media management. Overall
                            you can look at more exciting features and services
                            that we provide by clicking here.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  {/* <div className="question wow fadeInUp">
                
                    <h5 className="h5-md">Is RestroX secure?</h5>
                  
                    <p className="p-lg">
                      RestroX guarantees and ensures that their customers data
                      and privacy are all secured and well protected. We offer
                      several security features to help you add an extra layer
                      of protection to your account. You can also review and
                      update your security settings at any time.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="11">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="11">
                          <div
                            onClick={changeSignEleven}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              Is RestroX suitable for my business?{" "}
                            </h5>

                            <p>{plusEleven}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="11">
                          <Card.Body>
                            Absolutely. One of the most exclusive features that
                            RestroX has is it’s specifically designed and made
                            for restaurants to handle the overall operations of
                            a restaurant's business. Along with that, it is easy
                            to boost up your social media presence as it also
                            has an option for social media management. Overall
                            you can look at more exciting features and services
                            that we provide by clicking here.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #5 */}
                  {/* <div className="question wow fadeInUp">
                  
                    <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                 
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                   
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                            
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                  {/* QUESTION #6 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">I have an issue with my account</h5>
                  
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
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          {/* <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  Support?{" "}
                  <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div> */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* Support */}
      <section
        id="faqs-2"
        className="wide-11 faqs-section division"
        // style={{ marginTop: "-8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="more-questionsM">
                <h5 className="h5-md">
                  {/* Have more questions?{" "} */}
                  Suppport{" "}
                  {/* <Link href="/contacts">
                    <a>Ask your question here</a>
                  </Link> */}
                </h5>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">What is RestroX?</h5>
                    
                    <p className="p-lg">
                      RestroX is an ultimate restaurant operating system
                      gathered with high-end features compacted all in one app.
                      It brings together a varied range of services from
                      integrated online ordering to tracking of inventory,
                      managing your staff and business reports, automated
                      inventory, and a cloud-based system. Most businesses use a
                      computer terminal, coupled with the POS software, in order
                      to ease the process of managing everyday operations and
                      sales transactions, and RestroX is the system that will
                      provide all of these features in one single app or system.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="12">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="12">
                          <div
                            onClick={changeSignTweleve}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              My restaurant uses the free version of this app.
                              Can I get full support through chat whenever we
                              have some system queries?{" "}
                            </h5>

                            <p>{plusTweleve}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="12">
                          <Card.Body>
                            Yes, we provide 24/7 chat support for the user's
                            convenience.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #2 */}
                  {/* <div className="question wow fadeInUp">
                 
                    <h5 className="h5-md">How does RestroX work?</h5>
                    
                    <p className="p-lg">
                      Once you have registered and successfully signed in, it
                      will create your restaurant’s domain where you can operate
                      your entire restaurant’s operations. You can manage your
                      tasks, staff, order management, assign tasks, manage
                      inventory, manage your social media management. Is RestroX
                      secure? Haven’t got your answer
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="13">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="13">
                          <div
                            onClick={changeSignThirteen}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              Is there any service where you provide us with
                              pieces of training on how to use the system?{" "}
                            </h5>

                            <p>{plusThirteen}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="13">
                          <Card.Body>
                            Yes, we do have a step-by-step tutorial on how to
                            use our system. We also provide a dedicated customer
                            care service for more user flexibility and
                            understanding.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #3 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">
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
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                           
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  {/* <div className="question wow fadeInUp">
                   
                    <h5 className="h5-md">Is RestroX secure?</h5>
                   
                    <p className="p-lg">
                      RestroX guarantees and ensures that their customers data
                      and privacy are all secured and well protected. We offer
                      several security features to help you add an extra layer
                      of protection to your account. You can also review and
                      update your security settings at any time.
                    </p>
                  </div> */}
                  <div
                    style={{ marginTop: "20px" }}
                    className="question wow fadeInUp"
                  >
                    <Accordion defaultActiveKey="14">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="14">
                          <div
                            onClick={changeSignFourteen}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                              cursor: "pointer",
                            }}
                          >
                            {/* <p  className="h5-md">What is RestroX?</p> */}
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>{plusFourteen}</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="14">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  {/* QUESTION #5 */}
                  {/* <div className="question wow fadeInUp">
                    
                    <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                   
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                    
                  </div> */}
                  {/* <div style={{ backgroundColor: "pink", marginTop: "20px" }}>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "end",
                            }}
                          >
                            
                            <h5 className="h5-md">
                              Can I get access to my financial report?{" "}
                            </h5>

                            <p>-</p>
                          </div>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Yes, you can access your financial report according
                            to our features used. For premium and above users,
                            you can get your annual reports and logs in our
                            system. For more information you can visit our
                            pricing page.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div> */}
                  {/* QUESTION #6 */}
                  {/* <div className="question wow fadeInUp">
                  fav
                    <h5 className="h5-md">I have an issue with my account</h5>
                   
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
                  </div> */}
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
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
        {/* End container */}
      </section>
      {/* END FAQs-2 */}
      {/* CALL TO ACTION-7
			============================================= */}
      <div id="cta-7" className="cta-section division">
        <div className="container">
          <div className="cta-7-wrapper bg-snow">
            <div className="row d-flex align-items-center">
              {/* TEXT */}
              <div className="col-lg-9">
                <div className="cta-7-txt">
                  <p className="p-xl">
                    {`Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems`}
                  </p>
                </div>
              </div>
              {/* BUTTON */}
              <div className="col-lg-3 text-end">
                {/* <div className="cta-7-btn"> */}
                {/* <Link href="/contacts"> */}
                {/* <a className="btn btn-skyblue tra-grey-hover" style={{backgroundColor:"da0819"}}>Contact Us</a> */}
                {/* <a
                      className="btn btn-skyblue tra-grey-hover"
                      style={{ backgroundColor: "da0819" }}
                    >
                      Contact Us
                    </a> */}
                {/* </Link> */}
                {/* </div> */}

                <div className="btns-group mb-30 wow fadeInUp">
                  <a
                    href="/contacts"
                    target="_blank"
                    className="btn btn-green tra-white-hover mr-15"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End cta-7-wrapper */}
        </div>{" "}
        {/* End container */}
      </div>
      <Footer />
    </Layout>
  );
};

export default faqs;
