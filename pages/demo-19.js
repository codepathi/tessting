import Demo19brands1 from "../src/components/olmo/demo19/Demo19brands1";
import Demo19content1 from "../src/components/olmo/demo19/Demo19content1";
import Demo19content10 from "../src/components/olmo/demo19/Demo19content10";
import Demo19content2 from "../src/components/olmo/demo19/Demo19content2";
import Demo19content2a from "../src/components/olmo/demo19/Demo19content2a";
import Demo19content3 from "../src/components/olmo/demo19/Demo19content3";
import Demo19content5 from "../src/components/olmo/demo19/Demo19content5";
import Demo19content6 from "../src/components/olmo/demo19/Demo19content6";
import Demo19cta3 from "../src/components/olmo/demo19/Demo19cta3";
import Demo19faqs2 from "../src/components/olmo/demo19/Demo19faqs2";
import Demo19features4 from "../src/components/olmo/demo19/Demo19features4";
import Demo19features8 from "../src/components/olmo/demo19/Demo19features8";
import Demo19hero19 from "../src/components/olmo/demo19/Demo19hero19";
import Demo19reviews1 from "../src/components/olmo/demo19/Demo19reviews1";
import Demo19statistic3 from "../src/components/olmo/demo19/Demo19statistic3";
import Layout from "../src/layout/Layout";
const Demo19 = () => {
  return (
    <Layout btnCustomHover="btn-skyblue tra-grey-hover" navLight>
      <Demo19hero19 />
      <Demo19brands1 />
      <Demo19content2 />
      <Demo19content5 />
      <Demo19content3 />
      <Demo19content2a />
      <Demo19features8 />
      <hr className="divider" />
      <Demo19content1 />
      <Demo19statistic3 />
      <Demo19content10 />
      <Demo19features4 />
      <Demo19reviews1 />
      <Demo19content6 />
      <Demo19faqs2 />
      <Demo19cta3 />
    </Layout>
  );
};

export default Demo19;
