const Demo26content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/img-09.png"
                alt="content-image"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Title */}
              <h2 className="h2-xs">مشاركة الملفات والوسائط والمواقع</h2>
              {/* Text */}
              <p className="p-lg">
                العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم
                لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال في أي
                محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.
                على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم،
                أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات
                الفكاهية إليها.
              </p>
              {/* Text */}
              <p className="p-lg">
                لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس
                المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
              </p>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo26content2;
