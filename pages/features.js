import Fcontent1 from "../src/components/features/Fcontent1";
import Fcontent2 from "../src/components/features/Fcontent2";
import Fcontent3 from "../src/components/features/Fcontent3";
import Ffeatures8 from "../src/components/features/Ffeatures8";
import Freviews1 from "../src/components/features/Freviews1";
import Fstatistic2 from "../src/components/features/Fstatistic2";
import Ftabs2 from "../src/components/features/Ftabs2";
import Fcta3 from "../src/components/features/Fcta3";
import FfeatresSetllem from "../src/components/features/FfeaturesSettlem";

import Fcontent7 from "../src/components/features/Fcontent7";
import Fcontent2a from "../src/components/features/Fcontent2a";

import Layout from "../src/layout/Layout";
import Footer from "../src/layout/Footer";
import { NextSeo } from "next-seo";
import Demo7hero7 from "../src/components/olmo/demo7/Demo7hero7";
import Fbrands1 from "../src/components/features/Fbrands1";
import Demo5cta11 from "../src/components/olmo/demo5/Demo5cta11";

const features = () => {
  return (
    <Layout
      // btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      btnCustomHover="btn btn-tra-white orange-red-hover last-link"
      singlePage
    >
      <NextSeo
        title="RestroX | Features"
        description="description"
        additionalMetaTags={[
          {
            property: "",
            content: " ",
          },
          {
            property: "keywords",
            content: "Keyword",
            content: "",
          },
        ]}
      />
      <Demo7hero7 />
      <Fcontent3 />
      <Fcontent1 />
      
      <Ffeatures8 />
      {/* <Fcontent2 /> */}

      {/* <Fcontent10 /> */}
      {/* <Ffeatures4 /> */}
      <hr className="divider" />
      {/* <Fstatistic2 /> */}

      {/* dont' settle */}
      <FfeatresSetllem />

      <hr className="divider" />
      {/* statistics */}
      <Fstatistic2 />
      <hr className="divider" />
      {/* <Fbrands1 /> */}
      {/* pos */}
      <Ftabs2 />
      {/* reivew */}
      {/* <Freviews1 /> */}
      {/* <Fcontent2a /> */}
      {/* <Fcontent7 /> */}
      {/* <Fcontent7/> */}

      {/* <Ffaqs2 /> */}
      {/* <Fcta3 /> */}
      <Demo5cta11 />

      <Footer />
    </Layout>
  );
};

export default features;
