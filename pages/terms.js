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
        title="RestroX | Terms & Privacy"
        description="description"
        additionalMetaTags={[
          {
            property: "description",
            content:
""          },
          {
            property: "keywords",
            content: "Keyword",
            content:
              " ",
          },
        ]}
      />
      
      <section
        id="terms-page"
       
        className="bg-snow wide-70 inner-page-hero terms-section division"
      >
        <div className="container" >
          {/* TERMS CONTENT */}
          <div className="row justify-content-center"
          //  style={{marginTop:"8rem"}}
           >
            <div className="col-lg-10">
              {/* TERMS TITLE */}
              <div className="terms-title text-center"  >
                {/* Title */}
                <h2 className="h2-md">Our Terms &amp; Privacy</h2>
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
                  Welcome to RestroX!
                </p>
                {/* Text */}
                <p className="p-lg">
                  {/* Sagittis congue augue egestas volutpat egestas magna suscipit
                  egestas magna ipsum vitae purus efficitur and ipsum primis in
                  cubilia laoreet augue egestas luctus donec diam. Libero
                  curabitur dapibus quisque tristique neque blandit tristique
                  justo aliquam. Aliquam{" "}
                  <a href="#" className="skyblue-color">
                    molestie nunc sapien justo
                  </a>
                  , aliquet non molestie sed, venenatis nec purus. Aliquam eget
                  lacinia elit. Vestibulum tincidunt tincidunt massa, et
                  porttitor justo suscipit */}
                  These terms and conditions outline the rules and regulations
                  for the use of RestroX's Website, located at restrox.co.
                  <br></br>
                  <br></br>
                  By accessing this website we assume you accept these terms and
                  conditions. Do not continue to use RestroX if you do not agree
                  to take all of the terms and conditions stated on this page.
                  <br></br>
                  <br></br>
                  The following terminology applies to these Terms and
                  Conditions, Privacy Statement and Disclaimer Notice and all
                  Agreements: "Client", "You" and "Your" refers to you, the
                  person log on this website and compliant to the Company’s
                  terms and conditions. "The Company", "Ourselves", "We", "Our"
                  and "Us", refers to our Company. "Party", "Parties", or "Us",
                  refers to both the Client and ourselves. All terms refer to
                  the offer, acceptance, and consideration of payment necessary
                  to undertake the process of our assistance to the Client in
                  the most appropriate manner for the express purpose of meeting
                  the Client’s needs in respect of the provision of the
                  Company’s stated services, in accordance with and subject to,
                  prevailing law of Netherlands. Any use of the above
                  terminology or other words in the singular, plural,
                  capitalization, and/or he/she or they, are taken as
                  interchangeable and therefore as referring to the same.
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">License</h5>
                {/* Text */}
                <p className="p-lg">
                  Unless otherwise stated, RestroX and/or its licensors own the
                  intellectual property rights for all material on RestroX. All
                  intellectual property rights are reserved. You may access this
                  from RestroX for your own personal use subjected to
                  restrictions set in these terms and conditions.
                </p>
                {/* Text */}
                <p className="p-lg">You must not:</p>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      Republish material from RestroX
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      Sell, rent, or sub-license material from RestroX
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      Reproduce, duplicate or copy material from RestroX
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      Redistribute content from RestroX
                    </p>
                  </li>
                </ul>
                {/* Text */}
                <p className="p-lg">
                  This Agreement shall begin on the date hereof.
                  <br></br>
                  <br></br>
                  Parts of this website offer an opportunity for users to post
                  and exchange opinions and information in certain areas of the
                  website. RestroX does not filter, edit, publish or review
                  Comments prior to their presence on the website. Comments do
                  not reflect the views and opinions of RestroX, its agents,
                  and/or affiliates. Comments reflect the views and opinions of
                  the person who posts their views and opinions. To the extent
                  permitted by applicable laws, RestroX shall not be liable for
                  the Comments or for any liability, damages, or expenses caused
                  and/or suffered as a result of any use of and/or posting of
                  and/or appearance of the Comments on this website.
                  <br></br>
                  <br></br>
                  RestroX reserves the right to monitor all Comments and to
                  remove any Comments which can be considered inappropriate,
                  offensive, or cause a breach of these Terms and Conditions.
                </p>
                <p className="p-lg">You warrant and represent that:</p>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      You are entitled to post the Comments on our website and
                      have all necessary licenses and consents to do so;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      The Comments do not invade any intellectual property
                      right, including without limitation copyright, patent or
                      trademark of any third party;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      The Comments do not contain any defamatory, libelous,
                      offensive, indecent or otherwise unlawful material which
                      is an invasion of privacy
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      The Comments will not be used to solicit or promote
                      business or custom or present commercial activities or
                      unlawful activity.
                    </p>
                  </li>
                </ul>
                <p className="p-lg">
                  You hereby grant RestroX a non-exclusive license to use,
                  reproduce, edit and authorize others to use, reproduce and
                  edit any of your Comments in any and all forms, formats or
                  media.
                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Hyperlinking to our Content</h5>
                {/* Text */}
                <p className="p-lg">
                  The following organizations may link to our Website without
                  prior written approval:
                </p>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      Government agencies;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      Search engines;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      News organizations;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      Online directory distributors may link to our Website in
                      the same manner as they hyperlink to the Websites of other
                      listed businesses; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      System-wide Accredited Businesses except soliciting
                      non-profit organizations, charity shopping malls, and
                      charity fundraising groups which may not hyperlink to our
                      Website.
                    </p>
                  </li>
                </ul>

                <p className="p-lg">
                  These organizations may link to our home page, to publications
                  or to other Website information so long as the link: (a) is
                  not in any way deceptive; (b) does not falsely imply
                  sponsorship, endorsement or approval of the linking party and
                  its products and/or services; and (c) fits within the context
                  of the linking party’s site.
                </p>
                <p className="p-lg">
                  We may consider and approve other link requests from the
                  following types of organizations:
                </p>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      commonly-known consumer and/or business information
                      sources;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      dot.co community sites;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      associations or other groups representing charities;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      online directory distributors;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      internet portals;
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      accounting, law and consulting firms; and
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      {/* <span className="txt-500">Payment data</span> vitae auctor */}
                      educational institutions and trade associations.
                    </p>
                  </li>
                </ul>

                <p className="p-lg">
                  We will approve link requests from these organizations if we
                  decide that: (a) the link would not make us look unfavorably
                  to ourselves or to our accredited businesses; (b) the
                  organization does not have any negative records with us; (c)
                  the benefit to us from the visibility of the hyperlink
                  compensates the absence of RestroX; and (d) the link is in the
                  context of general resource information.
                </p>
                <br></br>
                <br></br>

                <p className="p-lg">
                  These organizations may link to our home page so long as the
                  link: (a) is not in any way deceptive; (b) does not falsely
                  imply sponsorship, endorsement or approval of the linking
                  party and its products or services; and (c) fits within the
                  context of the linking party’s site.
                </p>
                <br></br>
                <br></br>

                <p className="p-lg">
                  If you are one of the organizations listed in paragraph 2
                  above and are interested in linking to our website, you must
                  inform us by sending an email to RestroX. Please include your
                  name, your organization name, contact information as well as
                  the URL of your site, a list of any URLs from which you intend
                  to link to our Website, and a list of the URLs on our site to
                  which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <br></br>
                <br></br>

                <p className="p-lg">
                  Approved organizations may hyperlink to our Website as
                  follows:
                </p>
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      By use of our corporate name; or
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      By use of the uniform resource locator being linked to; or
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-md">
                      {/* <span className="txt-500">Email address</span> euismod */}
                      By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
                    </p>
                  </li>
                </ul>
                <p className="p-lg">
                No use of RestroX's logo or other artwork will be allowed for linking absent a trademark license agreement.

                </p>
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #3 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">
                  iFrames
                </h5>
                {/* Text */}
                <p className="p-lg">
                Without prior approval and written permission, you may not create frames around our Web Pages that alter in any way the visual presentation or appearance of our Website.
                  {/* <a href="#" className="skyblue-color">
                    {" "}
                    Mauris nec consequat tortor.
                  </a>{" "}
                  Duis fermentum a massa in convallis quisque eu interdum augue. */}
                </p>
                {/* Text */}
                
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Content Liability</h5>
                {/* Text */}
                <p className="p-lg">
                We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                  {/* <a href="#" className="skyblue-color">
                    molestie nunc sapien justo
                  </a>
                  , aliquet non molestie sed, venenatis nec purus. Aliquam eget
                  lacinia elit. Vestibulum tincidunt tincidunt massa, et
                  porttitor justo. */}
                </p>
                {/* List */}
                
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX #5 */}
              <div className="terms-box">
                {/* Title */}
                <h5 className="h5-xl">Changes about terms</h5>
                {/* Text */}
                <p className="p-lg">
                If we change our terms of use we will post those changes on this page. Registered users will be sent an email that outlines changes made to the terms of use.
                </p>
                {/* List */}
                {/* <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Donec dolor magna, suscipit in magna dignissim, porttitor
                      hendrerit diam. Nunc gravida ultrices felis eget faucibus.
                      Praesent aliquet tempus, blandit posuere ligula varius
                      congue cursus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Aliquam varius neque commodo purus vulputate pharetra
                      bibendum in ante ornare metus
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Morbi dui lectus, lobortis sit amet felis nec, suscipit
                      imperdiet sapien semper ultrices
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Nulla tincidunt volutpat tincidunt. Pellentesque habitant
                      morbi tristique senectus et netus and famesa malesuada
                      augue suscipit, luctus neque purus ipsum neque dolor
                      primis
                    </p>
                  </li>
                </ul> */}
              </div>{" "}
              {/* END TERMS BOX */}
              {/* TERMS BOX */}
              <div className="terms-box">
                {/* Title */}
                
              </div>{" "}
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
      <section id="cta-1" className="bg-snow cta-section division">
        <div className="container">
          <div className="rel bg-white cta-1-wrapper">
            <div className="row d-flex align-items-center">
              {/* CALL TO ACTION TEXT */}
              <div className="col-lg-8">
                <div className="cta-1-txt">
                  <h4 className="h4-xl">
                    Try RestroX free for 14 days. Start your trial now and pick a
                    plan later
                  </h4>
                </div>
              </div>
              {/* CALL TO ACTION BUTTON */}
              <div className="col-lg-4">
                <div className="text-end">
                  <div className="cta-1-btn text-center">
                    <Link href="/pricing">
                      <a className="btn btn-skyblue tra-grey-hover">
                        Get Started Now
                      </a>
                    </Link>
                    <p>
                      <a href="/faqs" target="_blank">Read The FAQs</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
<Footer/>
    </Layout>
  );
};

export default terms;
