import Demo1 from "./demo-1";
import Features from "../src/components/Features";
import Demo1content3 from "../src/components/olmo/demo1/Demo1content3";
import Demo1content33a from "../src/components/olmo/demo1/Demo1content33a";
import Demo1content33b from "../src/components/olmo/demo1/Demo1content33b";
import Demo11content9 from "../src/components/olmo/demo11/Demo11content9";
import Demo11features4 from "../src/components/olmo/demo11/Demo11features4";
import Demo14content7 from "../src/components/olmo/demo14/Demo14content7";
import Footer from "../src/layout/Footer";
import { NextSeo } from "next-seo";
import CustomersReviews from "../src/components/CustomersReviews"
import Demo2features4 from "../src/components/olmo/demo2/Demo2features4";
import Demo2content5 from "../src/components/olmo/demo2/Demo2content5";
import Demo2content6 from "../src/components/olmo/demo2/Demo2content6";
import Demo2content5_2 from "../src/components/olmo/demo2/Demo2content5_2";
import { useState, useContext } from "react";


const Index = () => {


  return (
    <div className="" style={{ width: "100%", overflow: "hidden" }}>
      
      <NextSeo
        title="RestroX | Restaurant Operating System | ALL IN ONE  App"
        description="description"
        additionalMetaTags={[
          {
            property: "description",
            content:
              "An ultimate combination of restaurant operating systems gathered with high-end features compacted all in one app. An app for restaurants of all ranges. An advanced restaurant management system binding all the actions required while operating a restaurant effortlessly. It aims to please all the restaurant’s stakeholders and their beloved customers.",
          },

          {
            property: "keywords",
            content: "Keyword",
            content:
              "Restrox sign in,get started on restrox, pos system for restaurant meaning,list of restaurant pos systems,  pos system for restaurant cost, best pos system for restaurant and bar, restaurant software in Nepal, restaurant management system price, pos system in nepal, billing software in nepal,Restaurant Operating System, restaurant manage software, App for restaurants in Nepal,App that manages restaurants billing,top restaurant operating system,what is restrox?, what is restaurant operating system, about restaurant, inventory management, account management system, best for operation of restaurant, best system to manage a restaurant, examples of restaurant system software, examples of restaurant system",
          },
        ]}
      />
      <Demo1/>
      
      <Demo2features4 />

      <Features />

      <Demo2content5 />

      <hr className="divider" />
      {/* video  */}
      <Demo11content9 />


      {/* digital menu */}
      <Demo11features4 />

      {/* solid user friendly */}
      <Demo1content3 />

      {/* Get registered */}
      <Demo1content33a />

      {/* be more efficient */}
      <Demo14content7 />

      {/* easily monitor */}
      <Demo1content33b />

      {/* <Demo10content5 />   */}

      {/* Customer reviews  */}
      <CustomersReviews />


      <Demo2content6 />

      {/* <Demo2content6 /> 
      change your restaurant
      <Demo4cta10 />
      <Demo16hero16 />
      <Demo5cta11 /> */}

      <Demo2content5_2 />
  

      <Footer />
    </div>
  );
};

export default Index;
