import Link from "next/dist/client/link";
import { VideoImage } from "../src/components/VideoContent";
import Layout from "../src/layout/Layout";

const singlepost = () => {
  return (
    <Layout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="single-post"
        className="wide-100 inner-page-hero single-post-section division"
      >
        <div className="container">
          {/* SINGLE POST CONTENT */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="single-post-wrapper">
                {/* SINGLE POST TITLE */}
                <div className="single-post-title">
                  {/* CATEGORY */}
                  <p className="p-sm post-tag txt-500 txt-upcase">OLMO News</p>
                  {/* TITLE */}
                  <h2 className="h2-md">
                    Augue OLMO, luctus neque purus and ipsum neque libero
                  </h2>
                  {/* POST DATA */}
                  <div className="post-data clearfix">
                    {/* Author Avatar */}
                    <div className="post-author-avatar">
                      <img
                        src="/images/review-author-7.jpg"
                        alt="author-avatar"
                      />
                    </div>
                    {/* Author Data */}
                    <div className="post-author">
                      <h6 className="h6-xl">Matthew Anderson</h6>
                      <p className="p-md">
                        Posted on June 22, 2021 - 4 comments
                      </p>
                    </div>
                  </div>{" "}
                  {/* END POST DATA */}
                </div>{" "}
                {/* END SINGLE POST TITLE */}
                {/* BLOG POST TEXT */}
                <div className="single-post-txt">
                  {/* Text */}
                  <p className="p-lg">
                    Mauris donec ociis et magnis sapien etiam sapien sem
                    sagittis congue tempor gravida donec and ipsum aporta justo
                    integer at odio velna. Maecenas gravida porttitor nunc
                    vehicula magna luctus tempor. Quisque vel laoreet turpis. An
                    augue viverra a augue eget, dictum tempor pulvinar donec
                    ociis et magnis sapien imperdiet dui varius placerat
                    imperdiet ipsum varius viverra augue egestas luctus donec
                    purus and blandit impedit ligula risus. Mauris donec
                  </p>
                </div>{" "}
                {/* END BLOG POST TEXT */}
                {/* BLOG POST INNER IMAGE */}
                <div className="post-inner-img">
                  <img
                    className="img-fluid"
                    src="/images/blog/inner-img-1.png"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TEXT */}
                <div className="single-post-txt">
                  {/* Title */}
                  <h4 className="h4-lg">
                    We focus on technologies that, along with a
                    build-measure-lean process, allow us to deliver high
                    performing, less error prone and intelligible code
                  </h4>
                  {/* Text */}
                  <p className="p-lg">
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae auctor massa congue magna nihil
                    impedit ligula risus. Mauris donec ociis and magnis sapien
                    etiam sapien sagittis congue tempor a gravida donec enim
                    ipsum porta justo integer undo odio velna. Maecenas gravida
                    porttitor nunc, quis vehicula magna at luctus tempor.
                    Quisque vel laoreet turpis. Urna augue, viverra a augue
                    eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel
                    imperdiet dui varius viverra. Pellentesque ac massa lorem
                    fusce eu tempor gravida porttitor cursus fusce ugue egestas
                    cursus magna nihil impedit
                  </p>
                  {/* Digit List */}
                  <ol className="digit-list">
                    <li>
                      <p className="p-lg">
                        Donec dolor suscipit magna vehicula impedit ligula
                        risus. Mauris donec ociis magnis sapien etiam and sapien
                        sem sagittis congue tempor gravida porttitor nunc, quis
                        vehicula magna
                      </p>
                    </li>
                    <li>
                      <p className="p-lg">
                        Placerat imperdiet dui varius consectetur nibh, vel
                        imperdiet dui varius viverra donec
                      </p>
                    </li>
                    <li>
                      <p className="p-lg">
                        Cubilia laoreet augue egestas cursus magna nihil impedit
                        ligula risus. Mauris donec et magnis sapien etiam sapien
                        rutrum tempor mullam blandit tempor sapien and gravida
                      </p>
                    </li>
                  </ol>
                  {/* Small Title */}
                  <h5 className="h5-md mt-50">
                    Praesent aliquet tempus
                    <br />
                    (tempor gravida ipsum as an example)
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    Magna suscipit egestas magna ipsum vitae purus efficitur
                    ipsum primis in cubilia laoreet augue egestas luctus donec
                    diam. Curabitur dapibus libero. Mauris donec ociis a neque.
                    Phasellus blandit tristique justo and aliquam vitae molestie
                    nunc sapien justo, aliquet non molestie augue
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Donec dolor magna, suscipit in magna dignissim,
                        porttitor hendrerit diam. Nunc gravida ultrices felis
                        eget faucibus. Praesent aliquet tempus, blandit posuere
                        ligula varius
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien undo euismod purus blandit velna
                        vitae auctor a congue magna tempor sapien eget gravida
                        laoreet turpis urna augue, viverra a augue eget, dictum
                        tempor diam pulvinar consectetur purus efficitur ipsum
                        primis in cubilia laoreet augue donec
                      </p>
                    </li>
                  </ul>
                  {/* Text */}
                  <p className="p-lg">
                    Sagittis congue augue egestas volutpat egestas magna
                    suscipit egestas magna ipsum vitae purus efficitur ipsum
                    primis in cubilia laoreet augue egestas luctus donec diam.
                    Curabitur dapibus libero. Mauris donec ociis a neque.
                    Phasellus blandit tristique justo and aliquam vitae molestie
                    nunc sapien justo, aliquet non molestie augue, venenatis nec
                    purus aliquam eget lacinia elit tincidunt
                  </p>
                  {/* BLOG POST INNER IMAGES */}
                  <div className="post-inner-img">
                    <div className="row">
                      {/* Inner Image #1 */}
                      <div className="col-md-6 top-img blog-post-img">
                        {/* Image */}
                        <img
                          className="img-fluid"
                          src="/images/blog/post-6-img.jpg"
                          alt="blog-post-image"
                        />
                        {/* Text */}
                        <p>Maecenas gravida CPU porttitor magna</p>
                      </div>
                      {/* Inner Image #2 */}
                      <div className="col-md-6 blog-post-img">
                        <div className="video-preview">
                          <VideoImage
                            img="images/blog/post-5-img.jpg"
                            extraClass="video-btn video-btn-lg bg-pink ico-75"
                          />
                        </div>
                        {/* Text */}
                        <p>Gravida porttitor nunc, quis vehicula tempor</p>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END INNER IMAGES */}
                  {/* Text */}
                  <p className="p-lg">
                    Nulla tincidunt volutpat tincidunt. Pellentesque habitant
                    morbi tristique senectus and netus laoreet malesuada famesa
                    augue suscipit, luctus at neque purus neque dolor primis.
                    Nemo sodales ipsam egestas volute turpis a dolores aliquam
                    quaerat sodales sapien congue augue eget gravida laoreet
                    turpis urna augue, viverra a augue eget, dictum dictum
                    tempor diam pulvinar consectetur
                  </p>
                  {/* QUOTE */}
                  <div className="quote mt-30 mb-35">
                    {/* Quote Text */}
                    <p className="p-xl">
                      {`"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean magna ligula eget dolor suscipit egestas viverra
                      dolor iaculis luctus magna suscipit egestas suscipit in
                      magna dignissim, porttitor hendrerit diam. Nunc gravida
                      ultrices felis eget faucibus. Praesent aliquet tempus,
                      blandit posuere ligula varius"`}
                    </p>
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                    Nullam non scelerisque lectus. In at mauris vel nisl
                    convallis porta at vitae dui. Nam lacus vulputate ligula
                    molestie bibendum quis, aliquet elementum massa. Vestibulum
                    ut sagittis purus massa lorem. Fusce eu cursus est. Fusce
                    non nulla vitae massa placerat vulputate purus. Aliqum
                    mullam a blandit tempor posuere ligula varius congue cursus
                    congue magna impedit ligula
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Donec dolor magna, suscipit in magna dignissim,
                        porttitor hendrerit diam. Nunc gravida ultrices felis
                        eget faucibus. Praesent aliquet tempus, blandit posuere
                        ligula varius
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus nec, luctus mauris orci auctor euismod
                        purus pretium at purus pretium ligula rutrum tempor
                        mullam blandit tempor sapien and gravida donec ipsum at
                        justo
                      </p>
                    </li>
                  </ul>
                  {/* Small Title */}
                  <h5 className="h5-md">Egestas volutpat egestas</h5>
                  {/* Text */}
                  <p className="p-lg">
                    In at mauris vel nisl convallis porta at vitae dui. Nam
                    lacus ligula, vulputate molestie bibendum quis, aliquet
                    elementum massa. Vestibulum ut sagittis odio. Ac massa
                    lorem. Fusce eu cursus est. Fusce non nulla vitae massa
                    placerat vulputate vel a purus aliqum mullam blandit
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                    Maecenas gravida porttitor nunc, quis vehicula magna luctus
                    tempor. Quisque laoreet a turpis urna augue, viverra a augue
                    eget, dictum tempor diam. Sed pulvinar nibh, vel imperdiet
                    congue varius viverra. Sapien justo massa lorem. Fusce eu
                    cursus non nulla vitae massa placerat purus. Sagittis congue
                    augue egestas volutpat egestas magna suscipit egestas magna
                    ipsum vitae purus efficitur ipsum primis in cubilia laoreet
                    augue egestas luctus donec
                  </p>
                  {/* BLOG POST INNER IMAGE */}
                  <div className="post-inner-img">
                    <img
                      className="img-fluid"
                      src="/images/img-19.png"
                      alt="blog-post-image"
                    />
                  </div>
                  {/* Small Title */}
                  <h5 className="h5-md">Vitae massa placerat vulputate</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Nullam non scelerisque lectus. In at mauris vel nisl
                    convallis porta at vitae dui. Nam lacus vulputate ligula
                    molestie bibendum quis, aliquet elementum massa. Vestibulum
                    ut sagittis purus massa lorem. Fusce eu cursus est. Fusce
                    non nulla vitae massa placerat vulputate purus. Aliqum
                    mullam a blandit tempor posuere ligula varius congue cursus
                    congue magna impedit ligula
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                    <span className="txt-600">
                      Aliqum mullam blandit tempor sapien gravida donec ipsum
                    </span>
                    , at porta justo. Velna vitae and auctor congue magna
                    impedit ligula risus. Mauris donec ociis magnis sapien etiam
                    sapien sagittis congue posuere ligula varius congue cursus
                    tempor gravida donec integer
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md">Cursus non nulla vitae massa</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Donec dolor magna, suscipit and magna dignissim,
                        porttitor hendrerit diam. Gravida ultrices turpis and
                        faucibus aliquet undo tempus, blandit posuere ligula
                        varius congue cursus nulla vitae massa
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Aliquam varius neque commodo purus tempor sapien gravida
                        vulputate pharetra bibendum
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Morbi lectus, lobortis felis nec, suscipit imperdiet
                        sapien semper ultrices. Nulla tincidunt at volutpat and
                        tincidunt. Habitant morbi tristique senectus et netus
                        malesuada famesa augue suscipit, luctus neque purus
                        ipsum bibendum quis, aliquet elementum
                      </p>
                    </li>
                  </ul>
                  {/* Text */}
                  <p className="p-lg">
                    Curabitur ac dapibus libero quisque eu tristique neque
                    sellus blandit tristique justo aliquam. Aliquam vitae at
                    molestie nunc sapien justo, aliquet non molestie sed,
                    venenatis nec purus. Aliquam lacinia at tincidunt massa
                    justo. Quisque vel laoreet turpis. Urna augue, viverra a
                    augue eget, dictum tempor diam. Sed pulvinar consectetur
                    nibh imperdiet varius viverra. Pellentesque ac massa lorem.
                    Fusce eu cursus est. Fusce non nulla vitae massa placerat
                    bulum tincidunt tincidunt massa porttitor
                  </p>
                </div>{" "}
                {/* END BLOG POST TEXT */}
                {/* SINGLE POST SHARE LINKS */}
                <div className="row post-share-links d-flex align-items-center">
                  {/* POST TAGS */}
                  <div className="col-md-9 col-xl-8 post-tags-list">
                    <span>
                      <a href="#">Life</a>
                    </span>
                    <span>
                      <a href="#">Ideas</a>
                    </span>
                    <span>
                      <a href="#">Story</a>
                    </span>
                    <span>
                      <a href="#">Web Design</a>
                    </span>
                  </div>
                  {/* POST SHARE ICONS */}
                  <div className="col-md-3 col-xl-4 post-share-list text-end">
                    <ul className="share-social-icons ico-25 text-center clearfix">
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="share-ico">
                          <span className="flaticon-bookmark" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END SINGLE POST SHARE */}
              </div>
            </div>
          </div>{" "}
          {/* END SINGLE POST CONTENT */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END SINGLE POST */}
      {/* ABOUT POST AUTHOR
			============================================= */}
      <div className="about-post-author bg-snow division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="author-senoff">
                {/* Avatar */}
                <img src="/images/review-author-7.jpg" alt="author-avatar" />
                {/* Text */}
                <div className="author-senoff-txt">
                  {/* Title */}
                  <h5 className="h5-xs">Published by</h5>
                  <h5 className="h5-md">Matthew Anderson</h5>
                  <p className="p-md">
                    Lorem ipsum dolor sit amet, consectetur elit eiusmod tempor
                    sapien dolore incidide ut labore dolore incididunt ut labore
                    turpis vitae raesent varius consectetur purus efficitur
                    ipsum primis in cubilia laoreet augue donec
                  </p>
                  {/* Link */}
                  <p className="author-link">
                    All stories by <a href="#">Matthew Anderson</a>
                  </p>
                  {/* Follow Button */}
                  <div className="author-follow-btn">
                    <a href="#">Follow</a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END ABOUT POST AUTHOR */}
      {/* POST COMMENTS
			============================================= */}
      <section id="post-comments" className="wide-80 post-comments division">
        <div className="container">
          <div className="row">
            {/* COMMENTS WRAPPER */}
            <div className="col-lg-10 offset-lg-1">
              <div className="comments-wrapper">
                {/* Title */}
                <h5 className="h5-lg">4 Comments</h5>
                {/* COMMENT #1 */}
                <div className="comment d-flex">
                  {/* Comment-1 Avatar */}
                  <img src="/images/review-author-2.jpg" alt="comment-avatar" />
                  {/* Comment-Body */}
                  <div className="comment-body">
                    {/* Comment-1 Meta */}
                    <div className="comment-meta">
                      <h6 className="h6-xl">Jamie</h6>
                      <span className="comment-date">5 days ago - </span>
                      <span className="btn-reply ico-20">
                        <a href="#leave-comment">
                          <span className="flaticon-reply-arrow" /> Reply
                        </a>
                      </span>
                    </div>
                    {/* Comment-1 Text */}
                    <p className="p-md mb-40">
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque undo viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum aenean
                      primis in augue luctus neque purus ipsum neque dolor
                      primis purus efficitur an ipsum primis in cubilia laoreet
                      augue
                    </p>
                    <hr />
                    {/* Nested Comment */}
                    <div className="comment d-flex">
                      {/* Nested Avatar */}
                      <a href="#" className="pr-3">
                        <img
                          src="/images/review-author-6.jpg"
                          alt="comment-avatar"
                        />
                      </a>
                      <div className="comment-body">
                        {/* Comment-2 Meta */}
                        <div className="comment-meta">
                          <h6 className="h6-xl">Matthew Clark</h6>
                          <span className="comment-date">6 days ago - </span>
                          <span className="btn-reply ico-20">
                            <a href="#leave-comment">
                              <span className="flaticon-reply-arrow" /> Reply
                            </a>
                          </span>
                        </div>
                        {/* Comment-2 Text */}
                        <p className="p-md">
                          Etiam sapien magna at vitae pulvinar congue egestas a
                          pretium neque viverra suscipit porta ratione, mollis
                          risus lectus porta aliquet lorem puruss mollis
                        </p>
                      </div>
                    </div>{" "}
                    {/* End Nested Comment */}
                  </div>
                </div>{" "}
                {/* END COMMENT #1 */}
                <hr />
                {/* COMMENT #3 */}
                <div className="comment d-flex">
                  {/* Comment Avatar */}
                  <img src="/images/review-author-8.jpg" alt="comment-avatar" />
                  {/* Comment Body */}
                  <div className="comment-body">
                    {/* Comment Meta */}
                    <div className="comment-meta">
                      <h6 className="h6-xl">Olivia Steiner</h6>
                      <span className="comment-date">13 days ago - </span>
                      <span className="btn-reply ico-20">
                        <a href="#leave-comment">
                          <span className="flaticon-reply-arrow" /> Reply
                        </a>
                      </span>
                    </div>
                    {/* Comment Text */}
                    <p className="p-md">
                      Porta ratione, mollis risus lectus porta rutrum arcu
                      aenean primis in augue luctus and neque purus ipsum neque
                      dolor primis libero tempus, tempor posuere ligula varius
                      an impedit enim tempor vitae pulvinar at congue augue
                      egestas praesent aliquet
                    </p>
                  </div>{" "}
                  {/* End Comment Body */}
                </div>{" "}
                {/* END COMMENT #3 */}
                <hr />
                {/* COMMENT #4 */}
                <div className="comment d-flex">
                  {/* Comment Avatar */}
                  <img src="/images/review-author-3.jpg" alt="comment-avatar" />
                  {/* Comment Body */}
                  <div className="comment-body">
                    {/* Comment Meta */}
                    <div className="comment-meta">
                      <h6 className="h6-xl">C. Johnson</h6>
                      <span className="comment-date">42 days ago - </span>
                      <span className="btn-reply ico-20">
                        <a href="#leave-comment">
                          <span className="flaticon-reply-arrow" /> Reply
                        </a>
                      </span>
                    </div>
                    {/* Comment Text */}
                    <p className="p-md">
                      Etiam sapien sem magna at vitae pulvinar congue augue
                      egestas pretium neque undo viverra suscipit egestas magna
                      porta ratione, mollis risus lectus porta rutrum arcu
                    </p>
                  </div>{" "}
                  {/* End Comment Body */}
                </div>{" "}
                {/* END COMMENT #4 */}
                <hr />
                {/* COMMENT FORM */}
                <div id="leave-comment">
                  {/* Title */}
                  <h5 className="h5-lg">Leave a Comment</h5>
                  {/* Text */}
                  <p className="p-md">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <form
                    name="commentForm"
                    className="row comment-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="col-md-12 input-message">
                      <p>Add Comment *</p>
                      <textarea
                        className="form-control message"
                        name="message"
                        rows={6}
                        placeholder="Enter Your Comment Here* ..."
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12">
                      <p>Name*</p>
                      <input
                        type="text"
                        name="name"
                        className="form-control name"
                        placeholder="Enter Your Name*"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <p>Email*</p>
                      <input
                        type="email"
                        name="email"
                        className="form-control email"
                        placeholder="Enter Your Email*"
                        required
                      />
                    </div>
                    {/* Contact Form Button */}
                    <div className="col-lg-12 form-btn">
                      <button
                        type="submit"
                        className="btn btn-skyblue tra-skyblue-hover submit"
                      >
                        Post Comment
                      </button>
                    </div>
                    {/* Contact Form Message */}
                    <div className="col-md-12 comment-form-msg text-center">
                      <div className="sending-msg">
                        <span className="loading" />
                      </div>
                    </div>
                  </form>
                </div>{" "}
                {/* END COMMENT FORM */}
              </div>
            </div>{" "}
            {/* END COMMENTS WRAPPER */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      {/* END POST COMMENTS */}
      {/* BLOG-1
			============================================= */}
      <section
        id="blog-1"
        className="bg-whitesmoke-gradient wide-60 blog-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                <h2 className="h2-md">Keep Reading...</h2>
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
                  <p className="p-md post-tag">OLMO News  |  June 12, 2021</p>
                  {/* Post Link */}
                  <h5 className="h5-md">
                    <Link href="/single-post">
                      Integer urna turpis donec ipsum a porta justo auctor
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    Donec sapien augue integer turpis urna cursus porta, mauris
                    augue...
                  </p>
                  {/* Post Meta */}
                  <div className="post-meta">
                    <p className="p-md">9 Comments</p>
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
                  <p className="p-md post-tag">Tutorials  |  June 3, 2021</p>
                  {/* Post Link */}
                  <h5 className="h5-md">
                    <Link href="/single-post">
                      A ligula risus auctor tempus
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    Donec sapien augue integer turpis urna cursus porta a mauris
                    dolor...
                  </p>
                  {/* Post Meta */}
                  <div className="post-meta">
                    <p className="p-md">12 Comments</p>
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
                  <p className="p-md post-tag">Inspiration  |  May 18, 2021</p>
                  {/* Post Link */}
                  <h5 className="h5-md">
                    <Link href="/single-post">
                      Donec sapien augue integer turpis at cursus porta mauris
                    </Link>
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                    Donec sapien augue integer turpis urna cursus porta, mauris
                    augue...
                  </p>
                  {/* Post Meta */}
                  <div className="post-meta">
                    <p className="p-md">3 Comments</p>
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
      {/* END BLOG-1 */}
      {/* NEWSLETTER-1
			============================================= */}
      <section id="newsletter-1" className="newsletter-section division">
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

export default singlepost;
