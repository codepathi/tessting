import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo1content3_about from "../src/components/olmo/demo1/Demo1content3_about";
import Demo1content3_about_2 from "../src/components/olmo/demo1/Demo1content3_about_2";
import Demo10blog1 from "../src/components/olmo/demo10/Demo10blog1";
import Demo10brands2 from "../src/components/olmo/demo10/Demo10brands2";
import Demo10content2 from "../src/components/olmo/demo10/Demo10content2";
import Demo10content3 from "../src/components/olmo/demo10/Demo10content3";
import Demo10content5 from "../src/components/olmo/demo10/Demo10content5";
import Demo10content6 from "../src/components/olmo/demo10/Demo10content6";
import Demo10content7 from "../src/components/olmo/demo10/Demo10content7";
import Demo10cta11 from "../src/components/olmo/demo10/Demo10cta11";
import Demo10features4 from "../src/components/olmo/demo10/Demo10features4";
import Demo15features7 from "../src/components/olmo/demo15/Demo15features7";
import Demo10hero10 from "../src/components/olmo/demo10/Demo10hero10";
import Demo10newsletter2 from "../src/components/olmo/demo10/Demo10newsletter2";
import Demo10reviews4 from "../src/components/olmo/demo10/Demo10reviews4";
import Demo10statistic2 from "../src/components/olmo/demo10/Demo10statistic2";
import Demo2content5_3 from "../src/components/olmo/demo2/Demo2content5_3";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
const Demo10 = () => {
  return (
    <Layout
      btnCustomHover="btn-tra-black violet-red-hover"
      navHoverColor="nav-violet-red-hover"
    >
      <Demo10hero10 />
      <Features />
      {/*<Demo10content5 />
      <Demo10content3 />
       <Demo10content2 />
      <Demo10content7 /> */}
      <Demo10features4 />
      <Demo2content5_3 />
      <Demo1content3_about />
      <Demo15features7 />  
      
      {/* <Demo10content6 /> */}
      {/* <Faq /> */}
      <Demo10cta11 />
      {/* <Demo10blog1 /> */}
      
      <hr className="divider" />
      <Footer />
    </Layout>
  );
};

export default Demo10;
