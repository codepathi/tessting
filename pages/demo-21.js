import Demo21blog1 from "../src/components/olmo/demo21/Demo21blog1";
import Demo21brands1 from "../src/components/olmo/demo21/Demo21brands1";
import Demo21content2 from "../src/components/olmo/demo21/Demo21content2";
import Demo21content2a from "../src/components/olmo/demo21/Demo21content2a";
import Demo21content5 from "../src/components/olmo/demo21/Demo21content5";
import Demo21content7 from "../src/components/olmo/demo21/Demo21content7";
import Demo21content9 from "../src/components/olmo/demo21/Demo21content9";
import Demo21cta11 from "../src/components/olmo/demo21/Demo21cta11";
import Demo21faqs2 from "../src/components/olmo/demo21/Demo21faqs2";
import Demo21features8 from "../src/components/olmo/demo21/Demo21features8";
import Demo21hero21 from "../src/components/olmo/demo21/Demo21hero21";
import Demo21newsletter2 from "../src/components/olmo/demo21/Demo21newsletter2";
import Demo21projects2 from "../src/components/olmo/demo21/Demo21projects2";
import Demo21reviews1 from "../src/components/olmo/demo21/Demo21reviews1";
import Demo21statistic1 from "../src/components/olmo/demo21/Demo21statistic1";
import Demo21tabs2 from "../src/components/olmo/demo21/Demo21tabs2";
import Layout from "../src/layout/Layout";
const Demo21 = () => {
  return (
    <Layout
      btnCustomHover="btn-tra-grey stateblue-hover"
      navHoverColor="nav-stateblue-hover"
    >
      <Demo21hero21 />
      <Demo21content9 />
      <Demo21brands1 />
      <Demo21content2 />
      <Demo21features8 />
      <Demo21content5 />
      <Demo21content2a />
      <Demo21content7 />
      <Demo21projects2 />
      <Demo21statistic1 />
      <Demo21tabs2 />
      <Demo21reviews1 />
      <Demo21faqs2 />
      <Demo21cta11 />
      <Demo21blog1 />
      <hr className="divider" />
      <Demo21newsletter2 />
      <hr className="divider" />
    </Layout>
  );
};

export default Demo21;
