import Blogs from "../src/components/Blogs";
import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo7brands2 from "../src/components/olmo/demo7/Demo7brands2";
import Demo7content1 from "../src/components/olmo/demo7/Demo7content1";
import Demo7content2 from "../src/components/olmo/demo7/Demo7content2";
import Demo7content3 from "../src/components/olmo/demo7/Demo7content3";
import Demo7content6 from "../src/components/olmo/demo7/Demo7content6";
import Demo7content9 from "../src/components/olmo/demo7/Demo7content9";
import Demo7cta11 from "../src/components/olmo/demo7/Demo7cta11";
import Demo7features5 from "../src/components/olmo/demo7/Demo7features5";
import Demo7features6 from "../src/components/olmo/demo7/Demo7features6";
import Demo7hero7 from "../src/components/olmo/demo7/Demo7hero7";
import Demo7newsletter1 from "../src/components/olmo/demo7/Demo7newsletter1";
import Demo7projects2 from "../src/components/olmo/demo7/Demo7projects2";
import Demo7reviews3 from "../src/components/olmo/demo7/Demo7reviews3";
import Price from "../src/components/Price";
import Layout from "../src/layout/Layout";

const Demo7 = () => {
  return (
    <Layout
      navLight
      whiteLogo
      btnCustomHover="btn-pink tra-white-hover"
      navHoverColor="nav-pink-hover"
    >
      <Demo7hero7 />
      <Demo7features5 />
      <Demo7content3 />
      <Features />
      <Demo7content2 />
      <Demo7features6 />
      <Demo7content1 />
      <Demo7projects2 />
      <Demo7reviews3 />
      <Demo7content9 />
      <Demo7brands2 />
      <hr className="divider" />
      <Faq />
      <Price color="pink" />
      <Demo7content6 />
      <Demo7newsletter1 />
      <Blogs />
      <Demo7cta11 />
    </Layout>
  );
};

export default Demo7;
