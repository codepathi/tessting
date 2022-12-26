import Demo17brands1 from "../src/components/olmo/demo17/Demo17brands1";
import Demo17content10 from "../src/components/olmo/demo17/Demo17content10";
import Demo17content2 from "../src/components/olmo/demo17/Demo17content2";
import Demo17content2a from "../src/components/olmo/demo17/Demo17content2a";
import Demo17content3 from "../src/components/olmo/demo17/Demo17content3";
import Demo17content9 from "../src/components/olmo/demo17/Demo17content9";
import Demo17cta9 from "../src/components/olmo/demo17/Demo17cta9";
import Demo17faqs2 from "../src/components/olmo/demo17/Demo17faqs2";
import Demo17features8 from "../src/components/olmo/demo17/Demo17features8";
import Demo17hero17 from "../src/components/olmo/demo17/Demo17hero17";
import Demo17reviews1 from "../src/components/olmo/demo17/Demo17reviews1";
import Demo17statistic2 from "../src/components/olmo/demo17/Demo17statistic2";
import Layout from "../src/layout/Layout";
const Demo17 = () => {
  return (
    <Layout navLight whiteLogo>
      <Demo17hero17 />
      <Demo17brands1 />
      <Demo17content2 />
      <Demo17features8 />
      <Demo17content9 />
      <Demo17statistic2 />
      <hr className="divider" />
      <Demo17content3 />
      <Demo17reviews1 />
      <Demo17content10 />
      <Demo17content2a />
      <Demo17faqs2 />
      <Demo17cta9 />
    </Layout>
  );
};

export default Demo17;
