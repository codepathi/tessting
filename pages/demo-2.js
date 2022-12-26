import Blogs from "../src/components/Blogs";
import CustomersReviews from "../src/components/CustomersReviews";
import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo2brands2 from "../src/components/olmo/demo2/Demo2brands2";
import Demo2content1 from "../src/components/olmo/demo2/Demo2content1";
import Demo2content10 from "../src/components/olmo/demo2/Demo2content10";
import Demo2content3 from "../src/components/olmo/demo2/Demo2content3";
import Demo2content4 from "../src/components/olmo/demo2/Demo2content4";
import Demo2content5 from "../src/components/olmo/demo2/Demo2content5";
import Demo2content6 from "../src/components/olmo/demo2/Demo2content6";
import Demo2faqs2 from "../src/components/olmo/demo2/Demo2faqs2";
import Demo2features4 from "../src/components/olmo/demo2/Demo2features4";
import Demo2Hero2 from "../src/components/olmo/demo2/Demo2Hero2";
import Demo2newsletter2 from "../src/components/olmo/demo2/Demo2newsletter2";
import ShareFiles from "../src/components/ShareFiles";
import Layout from "../src/layout/Layout";

const Demo2 = () => {
  return (
    <Layout navLight whiteLogo navHoverColor="nav-violet-red-hover">
      <Demo2Hero2 />
      <Demo2features4 />
      <Demo2content5 />
      <ShareFiles flexible />
      <hr className="divider" />
      <Faq />
      <hr className="divider" />
      <Demo2content3 />
      <Demo2content10 />
      <Demo2content1 />
      <CustomersReviews />
      <Demo2brands2 />
      <hr className="divider" />
      <Demo2content6 />
      <Features />
      <Demo2faqs2 />
      <Demo2content4 />
      <Blogs />
      <hr className="divider" />
      <Demo2newsletter2 />
      <hr className="divider" />
    </Layout>
  );
};

export default Demo2;
