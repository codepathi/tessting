import Faq from "../src/components/Faq";
import Demo8brands2 from "../src/components/olmo/demo8/Demo8brands2";
import Demo8content1 from "../src/components/olmo/demo8/Demo8content1";
import Demo8content10 from "../src/components/olmo/demo8/Demo8content10";
import Demo8content2 from "../src/components/olmo/demo8/Demo8content2";
import Demo8content2a from "../src/components/olmo/demo8/Demo8content2a";
import Demo8content3 from "../src/components/olmo/demo8/Demo8content3";
import Demo8content5 from "../src/components/olmo/demo8/Demo8content5";
import Demo8cta3 from "../src/components/olmo/demo8/Demo8cta3";
import Demo8features4 from "../src/components/olmo/demo8/Demo8features4";
import Demo8features5 from "../src/components/olmo/demo8/Demo8features5";
import Demo8Hero from "../src/components/olmo/demo8/Demo8Hero";
import Demo8pricing3 from "../src/components/olmo/demo8/Demo8pricing3";
import Demo8reviews1 from "../src/components/olmo/demo8/Demo8reviews1";
import Demo8statistic4 from "../src/components/olmo/demo8/Demo8statistic4";
import Democontent6 from "../src/components/olmo/demo8/Democontent6";
import Layout from "../src/layout/Layout";

const Demo8 = () => {
  return (
    <Layout btnCustomHover="btn-skyblue tra-skyblue-hover">
      <Demo8Hero />
      <Demo8features5 />
      <Democontent6 />
      <Demo8content2 />
      <Demo8content5 />
      <Demo8features4 />
      <hr className="divider" />
      <Demo8content3 />
      <Demo8reviews1 />
      <Demo8content2a />
      <hr className="divider" />
      <Demo8statistic4 />
      <hr className="divider" />
      <Demo8content10 />
      <Demo8brands2 />
      <Demo8pricing3 />
      <Demo8content1 />
      <Faq />
      <Demo8cta3 />
    </Layout>
  );
};

export default Demo8;
