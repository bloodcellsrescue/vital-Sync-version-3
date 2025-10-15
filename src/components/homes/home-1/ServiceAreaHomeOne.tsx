import { Link } from "react-router-dom";
 

const ServiceAreaHomeOne = ({style_2} : any) => {
  return (
    <>
    <section className="uxora-section-padding bg-light d-flex align-items-center justify-content-center min-vh-100">
      <div className="container">
        <div
          className="uxora-section-title max-750 text-center mx-auto mb-3 "
          data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
        >
          <h2 className="fw-bold mb-3">Discover Our Essential Features</h2>
          <p className="text-muted">
            Explore the innovative solutions that make Vital Sync the heartbeat of modern blood management.
          </p>
        </div>

        <div className="container py-4 mb-3">
        <div className="uxora-content01" >
          <div className="row g-5" >
            <div className="col-lg-6">
              <div className="uxora-about-us-thumb">
                <img className="w-100" src="assets/images/service/s1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <h3 className="fs-1 !important">Donor Recruitment & Management</h3>
                <p>Vital Sync simplifies the donor experience from sign-up to donation. Automated reminders, personalized messages, and easy digital registration keep donors informed, connected, and motivated to give regularly.</p>
                <p>The system securely manages donor data and tracks eligibility, ensuring compliance while building a lasting relationship between donors and blood centers. It’s recruitment and retention made effortless.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 my-3">
        <div className="uxora-content01" >
          <div className="row g-5" >
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <h3 className="fs-1 !important">Blood Bank Inventory</h3>
                <p>Managing blood supply effectively means saving lives faster — and Vital Sync empowers teams to do just that. Our system provides real-time visibility into available blood types, quantities, and expiration dates, ensuring that nothing goes unnoticed or to waste.</p>
                <p>Automated alerts and seamless coordination between hospitals and blood banks ensure quick response times and efficient blood utilization, especially during critical moments.</p>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="uxora-about-us-thumb w-100">
                <img  className="w-100" src="assets/images/service/s3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container py-4 mb-3">
        <div className="uxora-content01" >
          <div className="row g-5" >
            <div className="col-lg-6">
              <div className="uxora-about-us-thumb">
                <img className="w-100" src="assets/images/service/s2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content">
                <h3 className="fs-1 !important">Insights & Analytics</h3>
                <p>Vital Sync transforms raw data into meaningful insights through real-time dashboards and smart reports. Blood banks and hospitals can easily track trends, monitor inventory, and predict demand. Every metric becomes a tool for smarter, faster decision-making.</p>
                <p>Our analytics enhance planning, coordination, and resource allocation, ensuring every drop is efficiently managed and every life-saving opportunity is maximized.</p>
                
              </div>
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