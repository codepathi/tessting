import { VideoImage } from "../../VideoContent";

// import styles from "./fontsize.css"
const Demo11content9 = () => {
  return (
    <section
      id="content-9"
      // className="content-9 bg-04 pt-100 content-section division"
      className="content-9  pt-100 content-section division" style={{backgroundColor:"#FBFBFD"}}

      // className="content-9  pt-100 content-section division"
      // style={{backgroundColor:"#da0819"}}

    >
      <div className="container white-color">


        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          {/* <div className="col-md-10 col-lg-8"> */}
          <div className="col-md-10 col-lg-8 " >

            <div className="section-title title-02 mb-60">
        
              {/* Section ID */}
              {/* <span className="section-id rounded-id bg-tra-white white-color txt-upcase">
                Extremely Flexible
              </span> */}
              {/* Title */}
             
              <h2 className="h2-xs" style={{color: "rgba(37, 39, 41, 0.6)"}}>
              Let Your Restaurant Be More Than <br></br> Just A  <span style={{color:"#da0819"}}>Restaurant</span>

              </h2>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="content-9-img video-preview wow fadeInUp">
            {/* <div className=" video-preview wow fadeInUp"> */}
              <VideoImage extraClass="video-btn video-btn-xl bg-pink ico-90"  />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo11content9;
