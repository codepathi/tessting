import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine} from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faBezierCurve } from "@fortawesome/free-solid-svg-icons";


const Demo4features3 = () => {
  return (
    <section
      id="features-3"
      className="pb-60 features-section division "
      style={{ marginTop: "4rem" }}
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">
                Everything you need to operate in a restaurant
              </h2>
              {/* Text */}
              <p className="p-xl">
                We have everything that needs to be operated in a restaurant.
                Restrox is designed for all restaurant users.
              </p>
            </div>
          </div>
        </div>
        {/* FEATURES-3 WRAPPER */}
        <div className="fbox-3-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-purple purple-color iconCustomDiv">
                  {/* <span className="flaticon-idea" /> */}
                  <FontAwesomeIcon icon={faChartLine} className="customicons" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md"> Track your sales performance</h5>
                  {/* Text */}
                  <p className="p-lg">
                    A system that has an all-in-one solution to your overall
                    transactions of a business that helps to increase the
                    functionality of your restaurant and track real data on your
                    sales performance.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-red red-color">
                  {/* <span className="flaticon-smartphone" /> */}
                  <FontAwesomeIcon icon={faBezierCurve} className="customicons" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md"> Built-in menu templates</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Set your menu digitally with the RestroX menu management
                    option. You can also find a free template for your menu at
                    RestroX. You can also export your menu as PDF.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-skyblue skyblue-color">
                  {/* <span className="flaticon-algorithm" /> */}
                  <span className="flaticon-layers" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Get automated Inventory</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Sync your stocks with your sales channels and get live
                    updates about your stock. RestroX’s automated inventory
                    provides a futuristic notification whenever you are low on
                    stock or stock needs to be refilled.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #4 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-orange orange-color">
                  {/* <span className="flaticon-web-design" /> */}
                  <FontAwesomeIcon icon={faWallet} className="customicons" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md"> Manage your cashflows</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Minimize your mistakes and unnecessary costs, improve your
                    cash flow and customer experience and most of all save your
                    time.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #5 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-yellow yellow-color">
                  {/* <span className="flaticon-layers" /> */}
                  <FontAwesomeIcon icon={faUsers} className="customicons" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Engage with your customers</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Boost your reputation and build your recognition with your
                    customers with the RestroX review management option. You can
                    engage with your customer’s review and respond to feedback.
                  </p>
                </div>
              </div>
            </div>
            {/* FEATURE BOX #6 */}
            <div className="col">
              <div className="fbox-3 pc-15 mb-40 wow fadeInUp">
                <div className="fbox-ico-center ico-rounded-lg ico-45 bg-tra-green green-color">
                  {/* <span className="flaticon-email" /> */}
                  <FontAwesomeIcon icon={faListCheck} className="customicons" />
                </div>
                {/* Text */}
                <div className="fbox-txt-center">
                  {/* Title */}
                  <h5 className="h5-md">Manage your social media platforms</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Plan or manage your social media platforms with our
                    automated posts provided to you. You can also get influencer
                    benefits by sharing or posting photos and videos to your
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END FEATURES-3 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo4features3;
