import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetails = () => {
    const {id} =useParams();
    const service=useLoaderData();
    const idInt = parseInt(id);
     
    const serviceDetail= service.find(serviceDetail=> serviceDetail.id == idInt);
     const handleClick=()=>{
        console.log('clicked')
        toast('Thank You for Booking.We will contact with you soon')
     }

    return (
        <div className="flex flex-col items-center font-bold justify-center mb-10">
            <h2 className="text-3xl mb-10"> Service: <span className="text-purple-500"> {serviceDetail.event_name}</span></h2>
          <div className="w-1/2 mb-10">
          <img  src={serviceDetail.image_url} alt="" />

          </div>
          <p className="text-2xl italic">{serviceDetail.event_description}</p>
          <button onClick={handleClick} className="text-red-500">CLICK to BOOK at Price:{serviceDetail.ticket_price}$ </button>
          <ToastContainer></ToastContainer>
        </div>

        
    );
};

export default ServiceDetails;