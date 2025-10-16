import { Link } from "react-router-dom";

interface ServiceItemProps {
    title: string
    description: string
    image: string
    link?: string
}
       
       
       export const ServiceItem = ({title, description, image, link}: ServiceItemProps) => {
         return (
           <div><div className="uxora-content01 p-5 rounded-3 bg-white border mb-5" >
          <div className="row align-items-center g-5" >
            <div className="col-lg-6">
              <div className="uxora-about-us-thumb">
                <img className="w-100 rounded-3" style={{height: '500px', objectFit: 'cover'}} src={image} alt="" />
              </div>
            </div>
            <div className="col-lg-6 d-flex py-5 align-items-center">
              <div className="uxora-default-content">
                <h3 className="fs-1 !important">{title}</h3>
                <p>{description}</p>
                {/* <p>The system securely manages donor data and tracks eligibility, ensuring compliance while building a lasting relationship between donors and blood centers. It’s recruitment and retention made effortless.</p> */}
                {
                    link 
                    ?
                    <Link to={link} className="uxora-default-btn">Explore More</Link>            
                    : null
                }
              </div>
            </div>
          </div>
        </div></div>
         )
       }
       export default ServiceItem;
       
       
       