import Demo25blog1 from "../src/components/olmo/demo25/Demo25blog1";
import Demo25brands2 from "../src/components/olmo/demo25/Demo25brands2";
import Demo25content2 from "../src/components/olmo/demo25/Demo25content2";
import Demo25content3 from "../src/components/olmo/demo25/Demo25content3";
import Demo25content5 from "../src/components/olmo/demo25/Demo25content5";
import Demo25content6 from "../src/components/olmo/demo25/Demo25content6";
import Demo25content7 from "../src/components/olmo/demo25/Demo25content7";
import Demo25cta11 from "../src/components/olmo/demo25/Demo25cta11";
import Demo25faqs2 from "../src/components/olmo/demo25/Demo25faqs2";
import Demo25features4 from "../src/components/olmo/demo25/Demo25features4";
import Demo25features8 from "../src/components/olmo/demo25/Demo25features8";
import Demo25hero10 from "../src/components/olmo/demo25/Demo25hero10";
import Demo25newsletter2 from "../src/components/olmo/demo25/Demo25newsletter2";
import Demo25reviews4 from "../src/components/olmo/demo25/Demo25reviews4";
import Demo25statistic2 from "../src/components/olmo/demo25/Demo25statistic2";
import RtlLayout from "../src/layout/RtlLayout";

const Demo25 = () => {
  return (
    <RtlLayout
      btnCustomHover="btn btn-tra-black violet-red-hover last-link"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo25hero10 />
      <Demo25features8 />
      <Demo25content5 />
      <Demo25content3 />
      <Demo25content2 />
      <Demo25content7 />
      <Demo25features4 />
      <hr className="divider" />
      <Demo25statistic2 />
      <hr className="divider" />
      <Demo25reviews4 />
      <Demo25brands2 />
      <Demo25content6 />
      <Demo25faqs2 />
      <Demo25cta11 />
      <Demo25blog1 />
      <hr className="divider" />
      <Demo25newsletter2 />
      <hr className="divider" />
    </RtlLayout>
  );
};

export default Demo25;
