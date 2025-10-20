const ProcessAreaHomeOne = () => {
  return (
    <section
      className="uxora-section-padding section py-5"
      style={{
        backgroundImage: 'url(/assets/images/shape/hero-bg20.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center">
        <div
          className="uxora-section-title center max-width-750 mx-auto mb-5"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, { start: 200 });"
        >
          <h2 className="fw-bold mb-3" style={{fontSize: "70px"}}>We offer a seamless setup process</h2>
          <p className="text-muted">
            From setup to ongoing support, we make your transition to Vital Sync smooth and effortless.
          </p>
        </div>

        <div
          className="row justify-content-center g-4"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, { start: 400 });"
        >
          {/* Streamlined Setup */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="card-body d-flex flex-column align-items-center text-center">
                {/* <div className="uxora-process-number">
                  <h3>1</h3>
                </div>
                <div className="uxora-process-shape">
                  <img src="assets/images/shape/shape3.svg" alt="" />
                </div> */}
                <h3
                  className="card-title fw-semibold text-dark mb-3"
                  style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    overflow: 'hidden',
                  }}
                >
                  Streamlined Setup
                </h3>
                <p className="card-text text-muted flex-grow-1">
                  Get started with Vital Sync in no time — our guided onboarding makes setup fast, intuitive, and
                  stress-free, so your team can focus on saving lives, not managing software.
                </p>
              </div>
            </div>
          </div>

          {/* Tailored Training */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="card-body d-flex flex-column align-items-center text-center">
                {/* <div className="uxora-process-number">
                  <h3>2</h3>
                </div>
                <div className="uxora-process-shape">
                  <img src="assets/images/shape/shape2.svg" alt="" />
                </div> */}
                <h3
                  className="card-title fw-semibold text-dark mb-3"
                  style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    overflow: 'hidden',
                  }}
                >
                  Tailored Training
                </h3>
                <p className="card-text text-muted flex-grow-1">
                  We provide hands-on training built around your workflow, ensuring every staff member understands how to
                  use Vital Sync effectively from day one.
                </p>
              </div>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm p-4">
              <div className="card-body d-flex flex-column align-items-center text-center">
                {/* <div className="uxora-process-number">
                  <h3>3</h3>
                </div>
                <div className="uxora-process-shape">
                  <img src="assets/images/shape/shape1.svg" alt="" />
                </div> */}
                <h3
                  className="card-title fw-semibold text-dark mb-3"
                  style={{
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    overflow: 'hidden',
                  }}
                >
                  Ongoing Support
                </h3>
                <p className="card-text text-muted flex-grow-1">
                  Our dedicated support team stays with you beyond launch — offering 24/7 assistance, updates, and
                  troubleshooting to keep your system running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaHomeOne;
