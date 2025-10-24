import { ENV } from "../../../../data/env";

interface ServiceItemProps {
	title: string
	description: string
	image: string
	link?: string
}


export const ServiceItem = ({ title, description, image, link = ENV.APP_REGISTER }: ServiceItemProps) => {
	return (
		<div className="uxora-content01 rounded-3 tw:mb-5 p-3 tw:shadow-lg! bg-white tw:border-gray-100!" >
			<div className="tw:grid tw:md:grid-cols-2 md:gap-5!" >
				<div className="uxora-about-us-thumb">
					<img className="w-100 rounded-3 tw:h-80! tw:object-cover" src={image} alt="" />
				</div>
				<div className="uxora-default-content py-5">
					<h3 className="tw:text-3xl! tw:font-semibold!">{title}</h3>
					<p>{description}</p>
					<a href={link} target="__blank" className="uxora-default-btn">Get Started</a>
				</div>
			</div>
		</div>
	)
}
export default ServiceItem;


