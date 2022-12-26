import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo6brands2 from "../src/components/olmo/demo6/Demo6brands2";
import Demo6content2 from "../src/components/olmo/demo6/Demo6content-2";
import Demo6content10 from "../src/components/olmo/demo6/Demo6content10";
import Demo6content3 from "../src/components/olmo/demo6/Demo6content3";
import Demo6content6 from "../src/components/olmo/demo6/Demo6content6";
import Demo6content7 from "../src/components/olmo/demo6/Demo6content7";
import Demo6cta11 from "../src/components/olmo/demo6/Demo6cta11";
import Demo6features4 from "../src/components/olmo/demo6/Demo6features4";
import Demo6hero6 from "../src/components/olmo/demo6/Demo6hero6";
import Demo6Price from "../src/components/olmo/demo6/Demo6Price";
import Demo6projects2 from "../src/components/olmo/demo6/Demo6projects2";
import Demo6reviews4 from "../src/components/olmo/demo6/Demo6reviews4";
import Demo6statistic1 from "../src/components/olmo/demo6/Demo6statistic1";
import Demostatistic2 from "../src/components/olmo/demo6/Demostatistic2";
import Layout from "../src/layout/Layout";

const Demo6 = () => {
  return (
    <Layout
      btnCustomHover="btn-stateblue tra-grey-hover"
      navHoverColor="nav-stateblue-hover"
    >
      <Demo6hero6 />
      <Features />
      <Demo6content3 />
      <Demo6content10 />
      <Demo6features4 />
      <Demo6statistic1 />
      <Demo6content6 />
      <Demo6projects2 />
      <hr className="divider" />
      <Demostatistic2 />
      <hr className="divider" />
      <Demo6content2 />
      <Demo6reviews4 />
      <Demo6brands2 />
      <hr className="divider" />
      <Demo6content7 />
      <Faq />
      <Demo6Price />
      <Demo6cta11 />
    </Layout>
  );
};

export default Demo6;
