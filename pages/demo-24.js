import Demo24brands2 from "../src/components/olmo/demo24/Demo24brands2";
import Demo24content10 from "../src/components/olmo/demo24/Demo24content10";
import Demo24content2 from "../src/components/olmo/demo24/Demo24content2";
import Demo24content3 from "../src/components/olmo/demo24/Demo24content3";
import Demo24content6 from "../src/components/olmo/demo24/Demo24content6";
import Demo24content7 from "../src/components/olmo/demo24/Demo24content7";
import Demo24cta11 from "../src/components/olmo/demo24/Demo24cta11";
import Demo24faqs2 from "../src/components/olmo/demo24/Demo24faqs2";
import Demo24features4 from "../src/components/olmo/demo24/Demo24features4";
import Demo24features8 from "../src/components/olmo/demo24/Demo24features8";
import Demo24hero6 from "../src/components/olmo/demo24/Demo24hero6";
import Demo24pricing2 from "../src/components/olmo/demo24/Demo24pricing2";
import Demo24projects2 from "../src/components/olmo/demo24/Demo24projects2";
import Demo24reviews4 from "../src/components/olmo/demo24/Demo24reviews4";
import Demo24statistic1 from "../src/components/olmo/demo24/Demo24statistic1";
import Demo24statistic2 from "../src/components/olmo/demo24/Demo24statistic2";
import RtlLayout from "../src/layout/RtlLayout";
const Demo24 = () => {
  return (
    <RtlLayout>
      <Demo24hero6 />
      <Demo24features8 />
      <Demo24content3 />
      <Demo24content10 />
      <Demo24features4 />
      <Demo24statistic1 />
      <Demo24content6 />
      <Demo24projects2 />
      <hr className="divider" />
      <Demo24statistic2 />
      <hr className="divider" />
      <Demo24content2 />
      <Demo24reviews4 />
      <Demo24brands2 />
      <hr className="divider" />
      <Demo24content7 />
      <Demo24faqs2 />
      <Demo24pricing2 />
      <Demo24cta11 />
    </RtlLayout>
  );
};

export default Demo24;
