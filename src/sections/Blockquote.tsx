import AOS from 'aos';

AOS.init();


const Blockquote = () => {
  return (
    <div className="section bg-top bg-bottom py-0"
    >
      <div className="py-5 position-relative"
        data-aos="fade"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true">About Me</h2>
              <div className="space-border"
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              ></div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-10 offset-md-1">
              <div className="spacer-double"></div>
              <blockquote className="q-big" style={{ marginRight: 10 }}>
                <i className="d-big icon_quotations"></i>
                <span style={{ marginLeft: 40 }}>I develop end-to-end secure web applications. <br />Specialized in the e-commerce, financial, banking, and fintech sectors.</span>
              </blockquote>
              <div className="spacer-double"></div>
              <div className="spacer-double"></div>
              <div className="spacer-single"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blockquote;