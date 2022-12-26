import Demo13brands2 from "../src/components/olmo/demo13/Demo13brands2";
import Demo13content2 from "../src/components/olmo/demo13/Demo13content2";
import Demo13content3 from "../src/components/olmo/demo13/Demo13content3";
import Demo13content5 from "../src/components/olmo/demo13/Demo13content5";
import Demo13content6 from "../src/components/olmo/demo13/Demo13content6";
import Demo13content9 from "../src/components/olmo/demo13/Demo13content9";
import Demo13cta6 from "../src/components/olmo/demo13/Demo13cta6";
import Demo13faqs2 from "../src/components/olmo/demo13/Demo13faqs2";
import Demo13features1 from "../src/components/olmo/demo13/Demo13features1";
import Demo13features4 from "../src/components/olmo/demo13/Demo13features4";
import Demo13features8 from "../src/components/olmo/demo13/Demo13features8";
import Demo13hero13 from "../src/components/olmo/demo13/Demo13hero13";
import Demo13pricing3 from "../src/components/olmo/demo13/Demo13pricing3";
import Demo13projects2 from "../src/components/olmo/demo13/Demo13projects2";
import Demo13reviews1 from "../src/components/olmo/demo13/Demo13reviews1";
import Demo13statistic1 from "../src/components/olmo/demo13/Demo13statistic1";
import Demo13statistic2 from "../src/components/olmo/demo13/Demo13statistic2";
import Layout from "../src/layout/Layout";
const Demo13 = () => {
  return (
    <Layout
      btnCustomHover="btn-violet-red tra-violet-red-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo13hero13 />
      <Demo13features1 />
      <Demo13content2 />
      <Demo13features8 />
      <hr className="divider" />
      <Demo13statistic2 />
      <hr className="divider" />
      <Demo13content6 />
      <Demo13content9 />
      <Demo13features4 />
      <Demo13content5 />
      <Demo13content3 />
      <Demo13projects2 />
      <Demo13statistic1 />
      <Demo13reviews1 />
      <Demo13brands2 />
      <Demo13pricing3 />
      <Demo13faqs2 />
      <Demo13cta6 />
    </Layout>
  );
};

export default Demo13;
