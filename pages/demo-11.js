import Faq from "../src/components/Faq";
import Demo11brands2 from "../src/components/olmo/demo11/Demo11brands2";
import Demo11content3 from "../src/components/olmo/demo11/Demo11content3";
import Demo11content5 from "../src/components/olmo/demo11/Demo11content5";
import Demo11content7 from "../src/components/olmo/demo11/Demo11content7";
import Demo11content9 from "../src/components/olmo/demo11/Demo11content9";
import Demo11cta9 from "../src/components/olmo/demo11/Demo11cta9";
import Demo11features4 from "../src/components/olmo/demo11/Demo11features4";
import Demo11features8 from "../src/components/olmo/demo11/Demo11features8";
import Demo11hero11 from "../src/components/olmo/demo11/Demo11hero11";
import Demo11reviews1 from "../src/components/olmo/demo11/Demo11reviews1";
import Demo11statistic2 from "../src/components/olmo/demo11/Demo11statistic2";
import Layout from "../src/layout/Layout";

const Demo11 = () => {
  return (
    <Layout
      btnCustomHover="btn-pink tra-grey-hover"
      navHoverColor="nav-pink-hover"
    >
      {/* <Demo11hero11 />
      <Demo11content3 /> */}
      <Demo11content9 />
      <Demo11features4 />
      <Demo11content5 />
      <Demo11features8 />
      <Demo11reviews1 />
      <Demo11brands2 />
      <hr className="divider" />
      <Demo11content7 />
      <hr className="divider" />
      <Demo11statistic2 />
      <hr className="divider" />
      <Faq />
      <Demo11cta9 />
    </Layout>
  );
};

export default Demo11;
