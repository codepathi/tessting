import Link from "next/dist/client/link";
import { useEffect } from "react";
import Layout from "../src/layout/Layout";
import { isotopLayout } from "../src/utils/utils";

const Bloglisting = () => {
  useEffect(() => {
    isotopLayout(".masonry-wrap", ".masonry-image");
  }, []);
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="blog-page"
        className="bg-snow wide-50 inner-page-hero blog-page-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-85">
                <h2 className="h2-xs">
                  Relevant news and more for you. Welcome to our blog
                </h2>
              </div>
            </div>
          </div>
          {/* FEATURED POST */}
          <div className="rel blog-post-wide featured-post">
            <div className="row d-flex align-items-center">
              {/* Featured Badge */}
              <div className="featured-badge ico-25 bg-whitesmoke yellow-color">
                <span className="flaticon-star-1" />
              </div>
              {/* BLOG POST IMAGE */}
              <div className="col-lg-7 blog-post-img">
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="/images/blog/featured-post.jpg"
                    alt="blog-post-image"
                  />
                  <div className="item-overlay" />
                </div>
              </div>
              {/* BLOG POST TEXT */}
              <div className="col-lg-5 blog-post-txt">
                {/* Post Tag */}
                <p className="p-md post-tag">OLMO News  |  May 18, 2021</p>
                {/* Post Link */}
                <h5 className="h5-xl">
                  <Link href="/single-post">
                    <a>
                      Tempor sapien donec gravida a suscipit and porta justo
                      vitae
                    </a>
                  </Link>
                </h5>
                {/* Text */}
                <p className="p-lg">
                  Aliqum mullam blandit vitae tempor sapien and donec lipsum
                  gravida and porta undo velna dolor in cubilia...
                </p>
                {/* Post Meta */}
                <div className="post-meta">
                  <p className="p-md">38 Comments</p>
                </div>
              </div>{" "}
              {/* END BLOG POST TEXT */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURED POST */}
          {/* POSTS WRAPPER */}
          <div className="posts-wrapper">
            {/* BLOG POSTS CATEGORY */}
            <div className="row">
              <div className="col-md-12">
                <h5 className="h5-lg posts-category">Latest Articles</h5>
              </div>
            </div>
            {/* BLOG POSTS */}
            <div className="row">
              <div className="col gallery-items-list">
                <div className="masonry-wrap grid-loaded">
                  {/* BLOG POST #1 */}
                  <div className="blog-3-post masonry-image">
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
                      <p className="p-md post-tag">
                        OLMO News  |  JuLy 31, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          <a>
                            A ligula risus auctor and tempus sapien an augue
                            integer turpis
                          </a>
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">9 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #1 */}
                  {/* BLOG POST #2 */}
                  <div className="blog-3-post masonry-image">
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
                      <p className="p-md post-tag">
                        Tutorials  |  JuLy 24, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          <a>
                            Integer urna turpis donec ipsum a porta justo risus
                            auctor mauris augue
                          </a>
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">27 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #2 */}
                  {/* BLOG POST #3 */}
                  <div className="blog-3-post masonry-image">
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
                      <p className="p-md post-tag">
                        Inspiration  |  JuLy 06, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          Donec sapien an augue integer turpis at cursus porta
                          urna mauris
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">21 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #3 */}
                  {/* BLOG POST #4 */}
                  <div className="blog-3-post masonry-image">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="/images/blog/post-6-img.jpg"
                          alt="blog-post-image"
                        />
                        <div className="item-overlay" />
                      </div>
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">
                        OLMO News  |  June 30, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          Mauris donec magnis and sapien ociis etiam sapien
                          congue undo augue
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">32 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #4 */}
                  {/* BLOG POST #5 */}
                  <div className="blog-3-post masonry-image">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="/images/blog/post-7-img.jpg"
                          alt="blog-post-image"
                        />
                        <div className="item-overlay" />
                      </div>
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">
                        Inspiration  |  June 18, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          An augue cubilia laoreet undo magna and suscipit
                          egestas volutpat
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">42 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #5 */}
                  {/* BLOG POST #6 */}
                  <div className="blog-3-post masonry-image">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="/images/blog/post-4-img.jpg"
                          alt="blog-post-image"
                        />
                        <div className="item-overlay" />
                      </div>
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="p-md post-tag">
                        OLMO News  |  June 25, 2021
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md">
                        <Link href="/single-post">
                          Laoreet undo magna at suscipit undo egestas magna
                          ipsum ligula
                        </Link>
                      </h5>
                      {/* Post Meta */}
                      <div className="post-meta">
                        <p className="p-md">27 Comments</p>
                      </div>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>{" "}
                  {/* END BLOG POST #6 */}
                </div>
              </div>
            </div>{" "}
            {/* END BLOG POSTS */}
          </div>{" "}
          {/* END POSTS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END BLOG POSTS LISTING */}
      {/* PAGE PAGINATION
			============================================= */}
      <div className="bg-snow pb-100 page-pagination division">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination ico-20 justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <span className="flaticon-back" />
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span className="flaticon-next" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END PAGE PAGINATION */}
      {/* NEWSLETTER-1
			============================================= */}
      <section
        id="newsletter-1"
        className="bg-snow newsletter-section division"
      >
        <div className="container">
          <div className="newsletter-wrapper bg-white">
            <div className="row d-flex align-items-center row-cols-1 row-cols-lg-2">
              {/* NEWSLETTER TEXT */}
              <div className="col">
                <div className="newsletter-txt pr-20">
                  <h4 className="h4-xl">
                    Stay up to date with our news, ideas and updates
                  </h4>
                </div>
              </div>
              {/* NEWSLETTER FORM */}
              <div className="col">
                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-group">
                    <input
                      type="email"
                      autoComplete="off"
                      className="form-control"
                      placeholder="Your email address"
                      required
                      id="s-email"
                    />
                    <span className="input-group-btn">
                      <button
                        type="submit"
                        className="btn btn-md btn-skyblue tra-grey-hover"
                      >
                        Subscribe Now
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor="s-email" className="form-notification" />
                </form>
              </div>{" "}
              {/* END NEWSLETTER FORM */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End newsletter-wrapper */}
        </div>{" "}
        {/* End container */}
      </section>
    </Layout>
  );
};

export default Bloglisting;
isotopLayout();
