import Demo22brands1 from "../src/components/olmo/demo22/Demo22brands1";
import Demo22content2 from "../src/components/olmo/demo22/Demo22content2";
import Demo22content3 from "../src/components/olmo/demo22/Demo22content3";
import Demo22content6 from "../src/components/olmo/demo22/Demo22content6";
import Demo22content7 from "../src/components/olmo/demo22/Demo22content7";
import Demo22cta3 from "../src/components/olmo/demo22/Demo22cta3";
import Demo22faqs2 from "../src/components/olmo/demo22/Demo22faqs2";
import Demo22features8 from "../src/components/olmo/demo22/Demo22features8";
import Demo22hero22 from "../src/components/olmo/demo22/Demo22hero22";
import Demo22reviews1 from "../src/components/olmo/demo22/Demo22reviews1";
import Demo22statistic2 from "../src/components/olmo/demo22/Demo22statistic2";
import Layout from "../src/layout/Layout";
const Demo22 = () => {
  return (
    <Layout btnCustomHover="btn-skyblue tra-grey-hover">
      <Demo22hero22 />
      <Demo22brands1 />
      <Demo22features8 />
      <hr className="divider" />
      <Demo22content2 />
      <Demo22content7 />
      <Demo22content3 />
      <Demo22reviews1 />
      <hr className="divider" />
      <Demo22statistic2 />
      <hr className="divider" />
      <Demo22content6 />
      <Demo22faqs2 />
      <Demo22cta3 />
    </Layout>
  );
};

export default Demo22;
