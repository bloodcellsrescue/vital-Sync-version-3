import ServiceItem from "./service-item";

const ServiceAreaHomeOne = () => {
	return (
		<>
			<section className="uxora-section-padding bg-light d-flex align-items-center justify-content-center min-vh-100">
				<div className="container">
					<div
						className="uxora-section-title tw:max-w-5xl text-center mx-auto mb-3 "
						data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
					>
						<h2 className="tw:font-semibold! tw:text-6xl! mb-3" >Ensure safe blood availability where ever its needed</h2>
						<p className="text-muted">Explore the innovative solutions that make Vital Sync the heartbeat of modern blood management.
						</p>
					</div>

					<div className="container tw:space-y-10!">
						<ServiceItem
							title="Smart Donor Management"
							description="Recruit, engage, and retain donors with ease. Vital Sync helps you manage donor profiles, track eligibility, schedule drives, and monitor donation history — all in one connected platform."
							image="assets/images/service/s4.jpg"
						/>

						<ServiceItem
							title="Intelligent Blood Inventory"
							description="Gain full visibility into your blood bank operations. Monitor stock levels, track expiry dates, and automate alerts to ensure timely availability and zero wastage across facilities."
							image="assets/images/service/s2.jpg"
						/>

						<ServiceItem
							title="Safe Transfusion Monitoring"
							description="Ensure safety from transfusion to follow-up. Vital Sync records every transfusion event and tracks adverse reactions in real time, helping you strengthen traceability and patient safety."
							image="assets/images/service/s3.jpg"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceAreaHomeOne;
