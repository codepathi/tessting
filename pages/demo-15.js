import Demo15blog1 from "../src/components/olmo/demo15/Demo15blog1";
import Demo15brands1 from "../src/components/olmo/demo15/Demo15brands1";
import Demo15content2 from "../src/components/olmo/demo15/Demo15content2";
import Demo15content3 from "../src/components/olmo/demo15/Demo15content3";
import Demo15content5 from "../src/components/olmo/demo15/Demo15content5";
import Demo15content6 from "../src/components/olmo/demo15/Demo15content6";
import Demo15content9 from "../src/components/olmo/demo15/Demo15content9";
import Demo15cta11 from "../src/components/olmo/demo15/Demo15cta11";
import Demo15faqs2 from "../src/components/olmo/demo15/Demo15faqs2";
import Demo15features5 from "../src/components/olmo/demo15/Demo15features5";
import Demo15features7 from "../src/components/olmo/demo15/Demo15features7";
import Demo15hero15 from "../src/components/olmo/demo15/Demo15hero15";
import Demo15projects2 from "../src/components/olmo/demo15/Demo15projects2";
import Demo15reviews2 from "../src/components/olmo/demo15/Demo15reviews2";
import Demo15statistic2 from "../src/components/olmo/demo15/Demo15statistic2";
import Layout from "../src/layout/Layout";
const Demo15 = () => {
  return (
    <Layout
      btnCustomHover="btn-tra-white orange-red-hover"
      navHoverColor="nav-orange-red-hover"
      whiteLogo
      navLight
    >
      <Demo15hero15 />
      <Demo15features5 />
      <Demo15content2 />
      <Demo15content5 />
      <Demo15content3 />
      <hr className="divider" />
      <Demo15statistic2 />
      <hr className="divider" />
      <Demo15features7 />
      <Demo15projects2 />
      <Demo15content9 />
      <Demo15reviews2 />
      <Demo15brands1 />
      <Demo15faqs2 />
      <Demo15content6 />
      <Demo15blog1 />
      <Demo15cta11 />
    </Layout>
  );
};

export default Demo15;
