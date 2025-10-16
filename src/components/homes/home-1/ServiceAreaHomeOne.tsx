import ServiceItem from "./service-item";

const ServiceAreaHomeOne = () => {
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
              Explore the innovative solutions that make Vital Sync the
              heartbeat of modern blood management.
            </p>
          </div>

          <div className="container">
            <ServiceItem
              title="Donor Recruitment & Management"
              description="Vital Sync simplifies the donor experience from sign-up to donation. Automated reminders, personalized messages, and easy digital registration keep donors informed, connected, and motivated to give regularly. The system securely manages donor data and tracks eligibility, ensuring compliance while building a lasting relationship between donors and blood centers. It’s recruitment and retention made effortless."
              image="assets/images/service/s1.jpg"
              link="/register"
            />
            <ServiceItem
              title="Blood Bank Inventory"
              description="Vital Sync transforms raw data into meaningful insights through real-time dashboards and smart reports. Blood banks and hospitals can easily track trends, monitor inventory, and predict demand. Every metric becomes a tool for smarter, faster decision-making.
            Our analytics enhance planning, coordination, and resource allocation, ensuring every drop is efficiently managed and every life-saving opportunity is maximized"
              image="assets/images/service/s2.jpg"
              link="/register"
            />
            <ServiceItem
              title="Blood Bank Inventory"
              description="Managing blood supply effectively means saving lives faster — and Vital Sync empowers teams to do just that. Our system provides real-time visibility into available blood types, quantities, and expiration dates, ensuring that nothing goes unnoticed or to waste.
            Automated alerts and seamless coordination between hospitals and blood banks ensure quick response times and efficient blood utilization, especially during critical moments."
              image="assets/images/service/s3.jpg"
              link="/register"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
