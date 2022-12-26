import Demo12blog1 from "../src/components/olmo/demo12/Demo12blog1";
import Demo12brands2 from "../src/components/olmo/demo12/Demo12brands2";
import Demo12content1 from "../src/components/olmo/demo12/Demo12content1";
import Demo12content2a from "../src/components/olmo/demo12/Demo12content2a";
import Demo12content3 from "../src/components/olmo/demo12/Demo12content3";
import Demo12content6 from "../src/components/olmo/demo12/Demo12content6";
import Demo12content7 from "../src/components/olmo/demo12/Demo12content7";
import Demo12cta11 from "../src/components/olmo/demo12/Demo12cta11";
import Demo12faqs2 from "../src/components/olmo/demo12/Demo12faqs2";
import Demo12features4 from "../src/components/olmo/demo12/Demo12features4";
import Demo12features8 from "../src/components/olmo/demo12/Demo12features8";
import Demo12hero12 from "../src/components/olmo/demo12/Demo12hero12";
import Demo12newsletter2 from "../src/components/olmo/demo12/Demo12newsletter2";
import Demo12projects2 from "../src/components/olmo/demo12/Demo12projects2";
import Demo12reviews1 from "../src/components/olmo/demo12/Demo12reviews1";
import Demo12statistic2 from "../src/components/olmo/demo12/Demo12statistic2";
import Layout from "../src/layout/Layout";
const Demo12 = () => {
  return (
    <Layout
      btnCustomHover="btn-violet-red tra-grey-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo12hero12 />
      <Demo12features4 />
      <Demo12content3 />
      <Demo12projects2 />
      <Demo12content1 />
      <Demo12features8 />
      <Demo12content7 />
      <Demo12content2a />
      <hr className="divider" />
      <Demo12statistic2 />
      <hr className="divider" />
      <Demo12content6 />
      <Demo12brands2 />
      <Demo12reviews1 />
      <Demo12faqs2 />
      <hr className="divider" />
      <Demo12newsletter2 />
      <hr className="divider" />
      <Demo12blog1 />
      <Demo12cta11 />
    </Layout>
  );
};

export default Demo12;
