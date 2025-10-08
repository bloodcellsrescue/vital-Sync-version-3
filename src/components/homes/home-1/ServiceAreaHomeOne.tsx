import { Link } from "react-router-dom";
 

const ServiceAreaHomeOne = ({style_2} : any) => {
  return (
    <>
    <section className="uxora-section-padding bg-light d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div
          className="uxora-section-title max-750 text-center mx-auto mb-5"
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
          <h2 className="fw-bold mb-3">Discover Our Essential Features</h2>
          <p className="text-muted">
            Explore the innovative solutions that make Vital Sync the heartbeat of modern blood management.
          </p>
        </div>

        <div className="row justify-content-center g-4">

          {/* Smart Blood Management */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold mb-3">Smart Blood Management</h5>
                <p className="card-text flex-grow-1">
                  Vital Sync automates blood tracking, expiry alerts, and stock updates, helping
                  banks maintain accuracy and reduce waste.
                </p>
                <Link to="/single-service" className="btn btn-outline-danger mt-3 mx-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Hospital & Bank Network */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold mb-3">Hospital & Bank Network</h5>
                <p className="card-text flex-grow-1">
                  Connect seamlessly with hospitals and blood banks for faster, real-time blood
                  requests, matching, and delivery.
                </p>
                <Link to="/single-service" className="btn btn-outline-danger mt-3 mx-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Donor Engagement */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold mb-3">Donor Engagement</h5>
                <p className="card-text flex-grow-1">
                  Empower donors with reminders, easy booking, and personalized dashboards that make
                  every donation journey meaningful.
                </p>
                <Link to="/single-service" className="btn btn-outline-danger mt-3 mx-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Analytics & Insights */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold mb-3">Analytics & Insights</h5>
                <p className="card-text flex-grow-1">
                  Access real-time analytics and trend insights that help hospitals and
                  organizations make data-driven decisions.
                </p>
                <Link to="/single-service" className="btn btn-outline-danger mt-3 mx-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Secure Platform & Compliance */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold mb-3">Secure Platform & Compliance</h5>
                <p className="card-text flex-grow-1">
                  We ensure full compliance with health data standards while protecting donor and
                  patient information using end-to-end encryption.
                </p>
                <Link to="/single-service" className="btn btn-outline-danger mt-3 mx-auto">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  
</>
)
}


export default ServiceAreaHomeOne;