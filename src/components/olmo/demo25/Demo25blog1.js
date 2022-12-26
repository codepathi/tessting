import Link from "next/dist/client/link";
const Demo25blog1 = () => {
  return (
    <section id="blog-1" className="wide-60 blog-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">قصصنا وآخر الأخبار</h2>
              {/* Text */}
              <p className="p-xl">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس
              </p>
            </div>
          </div>
        </div>
        {/* BLOG POSTS */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {/* BLOG POST #1 */}
          <div className="col">
            <div id="bp-1-1" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-1-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">أخبار OLMO  |  12 يونيو 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولك
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">9 تعليقات</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #1 */}
          {/* BLOG POST #2 */}
          <div className="col">
            <div id="bp-1-2" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-5-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">دروس  |  3 يونيو 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولك
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">12 تعليقات</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #2 */}
          {/* BLOG POST #3 */}
          <div className="col">
            <div id="bp-1-3" className="blog-1-post mb-40 wow fadeInUp">
              {/* BLOG POST IMAGE */}
              <div className="blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/post-2-img.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">إلهام  |  18 مايو 2021</p>
                {/* Post Link */}
                <h5 className="h5-md">
                  <Link href="/single-post">
                    هناك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولك
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
                  الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات
                  العشوائية إلى النص.
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">4 تعليقات</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>
          </div>{" "}
          {/* END  BLOG POST #3 */}
        </div>{" "}
        {/* END BLOG POSTS */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo25blog1;
