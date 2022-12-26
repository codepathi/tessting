import About2 from "../src/components/about/About2";
import Aboutbrands2 from "../src/components/about/Aboutbrands2";
import Aboutcontent3 from "../src/components/about/Aboutcontent3";
import Aboutcontent5 from "../src/components/about/Aboutcontent5";
import Aboutcta5 from "../src/components/about/Aboutcta5";
import Aboutfeatures4 from "../src/components/about/Aboutfeatures4";
import Aboutfeatures8 from "../src/components/about/Aboutfeatures8";
import Aboutreviews1 from "../src/components/about/Aboutreviews1";
import Aboutstatistic4 from "../src/components/about/Aboutstatistic4";
import Aboutteam1 from "../src/components/about/Aboutteam1";
import Demo3content2 from "../src/components/olmo/demo3/Demo3content2";
import Demo3features4 from "../src/components/olmo/demo3/Demo3features4";
import Demo3hero3 from "../src/components/olmo/demo3/Demo3hero3";
// import Demo19content5 from "../src/components/olmo/demo3/Demo19";\
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import Demo15features7 from "../src/components/olmo/demo15/Demo15features7";
import Demo4content7 from "../src/components/olmo/demo4/Demo4content7";
// import Demo4content33 from "../src/components/olmo/demo1/Demo4content7";
// import Demo1content33 from "../src/components/olmo/demo1/Demo1content33";
import Demo9brands2 from "../src/components/olmo/demo9/Demo9brands2";
import Footer from "../src/layout/Footer";
import HowItWorks from "../src/components/HowItWorks";
import { NextSeo } from "next-seo";


const about = () => {
  return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
       <NextSeo
        title="RestroX | About Us"
        description="description"
        additionalMetaTags={[
          {
            property: "description",
            content:
""          },
          {
            property: "keywords",
            content: "Keyword",
            content:
              " ",
          },
        ]}
      />
      {/* <Header/> */}
      <Demo3hero3 />
      {/* <HowItWorks /> */}
      {/* it works perfectly */}
      <Demo3features4 />
      <Aboutcontent3 />
      <Demo15features7 />
      {/* <Demo4content7 /> */}
      {/* <Demo1content33 /> */}
      {/* <Aboutreviews1 /> */}
      {/* <Demo9brands2 /> */}
      <Aboutcta5 />
      <Footer />
    </Layout>
  );
};

export default about;
