import Demo23brands2 from "../src/components/olmo/demo23/Demo23brands2";
import Demo23content2a from "../src/components/olmo/demo23/Demo23content2a";
import Demo23content3 from "../src/components/olmo/demo23/Demo23content3";
import Demo23content6 from "../src/components/olmo/demo23/Demo23content6";
import Demo23content7 from "../src/components/olmo/demo23/Demo23content7";
import Demo23cta11 from "../src/components/olmo/demo23/Demo23cta11";
import Demo23faqs2 from "../src/components/olmo/demo23/Demo23faqs2";
import Demo23features8 from "../src/components/olmo/demo23/Demo23features8";
import Demo23hero23 from "../src/components/olmo/demo23/Demo23hero23";
import Demo23projects2 from "../src/components/olmo/demo23/Demo23projects2";
import Demo23reviews1 from "../src/components/olmo/demo23/Demo23reviews1";
import Demo23statistic3 from "../src/components/olmo/demo23/Demo23statistic3";
import Demo23statistic4 from "../src/components/olmo/demo23/Demo23statistic4";
import Layout from "../src/layout/Layout";
const Demo23 = () => {
  return (
    <Layout
      btnCustomHover="btn-tra-white violet-red-hover"
      navHoverColor="nav-violet-red-hover"
      navLight
    >
      <Demo23hero23 />
      <Demo23statistic4 />
      <hr className="divider" />
      <Demo23content3 />
      <Demo23features8 />
      <Demo23content2a />
      <Demo23content6 />
      <Demo23projects2 />
      <Demo23brands2 />
      <Demo23content7 />
      <Demo23reviews1 />
      <Demo23statistic3 />
      <Demo23faqs2 />
      <Demo23cta11 />
    </Layout>
  );
};

export default Demo23;
