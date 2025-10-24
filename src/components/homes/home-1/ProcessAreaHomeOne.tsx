import ProcessItem from "./partials/process-item";

const ProcessAreaHomeOne = () => {
	return (
		<section className="uxora-section-padding section tw:pt-20! tw:pb-36!" >
			<div className="container text-center">
				<div className="uxora-section-title center tw:max-w-5xl!  mx-auto" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, { start: 200 });" >
					<h2 className="tw:font-semibold! tw:text-3xl!  tw:md:text-6xl! mb-3" >Ensure Safe Blood Availability <br /> Anywhere, Anytime</h2>
					<p className="text-muted">From seamless setup to continuous support, we make your transition effortless — so you can focus on what truly matters: saving lives.</p>
				</div>

				<div className="tw:grid tw:md:grid-cols-3 tw:gap-5" >
					<ProcessItem 
						title="Seamless Onboarding"
						description="Get up and running quickly with our guided onboarding process. Vital Sync’s intuitive setup ensures your team can start monitoring, tracking, and managing blood safety in minutes — not weeks."
					/>
					
					<ProcessItem 
						title="Turn Data into Action"
						description="Unlock the power of analytics. Vital Sync transforms raw data into meaningful insights — helping you track performance, predict shortages, and improve blood safety outcomes across your network."
					/>
					
					<ProcessItem 
						title="Continuous Support"
						description="We’re with you every step of the way. Our expert support team provides 24/7 assistance, system updates, and proactive monitoring to keep your operations smooth, reliable, and connected."
					/>
				</div>
			</div>
		</section>
	);
};

export default ProcessAreaHomeOne;
