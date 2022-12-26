import Link from "next/dist/client/link";
import { useEffect } from "react";
import { isotopLayout } from "../../../utils/utils";

const Demo24projects2 = () => {
  useEffect(() => {
    isotopLayout();
  }, []);
  return (
    <section id="projects-2" className="pb-60 projects-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">نحن نهتم بالتفاصيل</h2>
              {/* Text */}
              <p className="p-xl">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس
              </p>
            </div>
          </div>
        </div>
        {/* PROJECTS-2 WRAPPER */}
        <div className="row">
          <div className="col gallery-items-list">
            <div className="masonry-wrap grid-loaded">
              {/* PROJECT #1 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-05.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">تصميم غرافيك</p>
                </div>
              </div>{" "}
              {/* END PROJECT #1 */}
              {/* PROJECT #2 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-02.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">
                    واجهة المستخدم ، تصميم التفاعل
                  </p>
                </div>
              </div>{" "}
              {/* END PROJECT #2 */}
              {/* PROJECT #3 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-04.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">UX ، رسم توضيحي</p>
                </div>
              </div>{" "}
              {/* END PROJECT #3 */}
              {/* PROJECT #4 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-01.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">تصميم المواقع</p>
                </div>
              </div>{" "}
              {/* END PROJECT #4 */}
              {/* PROJECT #5 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-03.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">تصميم المواقع</p>
                </div>
              </div>{" "}
              {/* END PROJECT #5 */}
              {/* PROJECT #6 */}
              <div className="project-details masonry-image">
                {/* Image */}
                <div className="project-preview rel">
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="/images/projects/project-06.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                  </div>
                </div>
                {/* Text */}
                <div className="project-txt">
                  {/* Link */}
                  <h5 className="h5-md">
                    <Link href="/project-details">
                      لوريم إيبسوم لوريم إيبسوم عبارة عن نص زائف لكتاب عينة
                      الطباعة.
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-md grey-color">
                    واجهة المستخدم ، تصميم التفاعل
                  </p>
                </div>
              </div>{" "}
              {/* END PROJECT #6 */}
            </div>
          </div>
        </div>{" "}
        {/* END PROJECTS-1 WRAPPER */}
        {/* MORE PROJECTS */}
        <div className="row">
          <div className="col">
            <div className="more-btn mt-20">
              <Link href="/projects">
                <a className="btn btn-stateblue tra-grey-hover">
                  عرض المزيد من المشاريع
                </a>
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* END DOWNLOAD BUTTON */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo24projects2;
