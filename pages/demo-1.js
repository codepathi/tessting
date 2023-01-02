import Demo1Hero1 from "../src/components/olmo/demo1/Demo1Hero1";
import Layout from "../src/layout/Layout";

const Demo1 = ({country}) => {
  return (
    // <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
    <Layout navLight navHoverColor="nav-orange-red-hover">
      <Demo1Hero1 country={country}/>
    </Layout>
  );
};

export default Demo1;
