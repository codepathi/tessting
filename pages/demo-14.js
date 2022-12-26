import Demo14brands2 from "../src/components/olmo/demo14/Demo14brands2";
import Demo14content1 from "../src/components/olmo/demo14/Demo14content1";
import Demo14content10 from "../src/components/olmo/demo14/Demo14content10";
import Demo14content2 from "../src/components/olmo/demo14/Demo14content2";
import Demo14content3 from "../src/components/olmo/demo14/Demo14content3";
import Demo14content4 from "../src/components/olmo/demo14/Demo14content4";
import Demo14content6 from "../src/components/olmo/demo14/Demo14content6";
import Demo14content7 from "../src/components/olmo/demo14/Demo14content7";
import Demo14faqs2 from "../src/components/olmo/demo14/Demo14faqs2";
import Demo14features4 from "../src/components/olmo/demo14/Demo14features4";
import Demo14features8 from "../src/components/olmo/demo14/Demo14features8";
import Demo14hero14 from "../src/components/olmo/demo14/Demo14hero14";
import Demo14pricing1 from "../src/components/olmo/demo14/Demo14pricing1";
import Demo14reviews1 from "../src/components/olmo/demo14/Demo14reviews1";
import Demo14statistic2 from "../src/components/olmo/demo14/Demo14statistic2";
import Layout from "../src/layout/Layout";
const Demo14 = () => {
  return (
    <Layout
      btnCustomHover="btn-violet-red tra-violet-red-hover"
      navHoverColor="nav-violet-red-hover"
      whiteLogo
      navLight
    >
      <Demo14hero14 />
      <Demo14brands2 />
      <Demo14features8 />
      <Demo14content6 />
      <hr className="divider" />
      <Demo14features4 />
      <Demo14content3 />
      <Demo14content2 />
      <hr className="divider" />
      <Demo14statistic2 />
      <hr className="divider" />
      <Demo14content7 />
      <Demo14reviews1 />
      <Demo14content1 />
      <Demo14content10 />
      <Demo14pricing1 />
      <Demo14faqs2 />
      <Demo14content4 />
    </Layout>
  );
};

export default Demo14;
