import CustomersReviews from "../src/components/CustomersReviews";
import Features from "../src/components/Features";
import Demo3brands1 from "../src/components/olmo/demo3/Demo3brands1";
import Demo3content1 from "../src/components/olmo/demo3/Demo3content1";
import Demo3content10 from "../src/components/olmo/demo3/Demo3content10";
import Demo3content2 from "../src/components/olmo/demo3/Demo3content2";
import Demo3content2a from "../src/components/olmo/demo3/Demo3content2a";
import Demo3content3 from "../src/components/olmo/demo3/Demo3content3";
import Demo3content6 from "../src/components/olmo/demo3/Demo3content6";
import Demo3content7 from "../src/components/olmo/demo3/Demo3content7";
import Demo3cta4 from "../src/components/olmo/demo3/Demo3cta4";
import Demo3faqs2 from "../src/components/olmo/demo3/Demo3faqs2";
import Demo3features4 from "../src/components/olmo/demo3/Demo3features4";
import Demo3hero3 from "../src/components/olmo/demo3/Demo3hero3";
import Demo3statistic3 from "../src/components/olmo/demo3/Demo3statistic3";
import Demo3statistic4 from "../src/components/olmo/demo3/Demo3statistic4";
import Price from "../src/components/Price";
import Layout from "../src/layout/Layout";

const Demo3 = () => {
  return (
    <Layout navLight navHoverColor="nav-green-hover">
      <Demo3hero3 />
      <Demo3brands1 />
      <Demo3content2 />
      <Features />
      <Demo3content7 />
      <Demo3content3 />
      <Demo3features4 />
      <Demo3content2a />
      <Demo3content10 />
      <hr className="divider" />
      <Demo3statistic4 />
      <hr className="divider" />
      <Demo3content6 />
      <CustomersReviews />
      <Demo3content1 />
      <Demo3statistic3 />
      <Demo3faqs2 />
      <Price />
      <Demo3cta4 />
    </Layout>
  );
};

export default Demo3;
