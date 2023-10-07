import { useLoaderData } from "react-router-dom";
import Discount from "../../Discount/Discount";
import SliderImage from "../../SliderImage/SliderImage";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    const service=useLoaderData();
    return (
        <div>

            <Banner></Banner>
            <Discount></Discount>
           <div className="text-amber-500">
           <h2 className="flex items-center justify-center text-3xl mt-5 font-bold gap-2">Our <span className="text-purple-600 italic"> Services </span> For You!!</h2>
           </div>
            <div  className="grid md:grid-cols-3 gap-1 mb-10 ml-10 mt-10">
            
                {
                      service.map(aService =><Services key={aService.id} service={aService}></Services>)
                }
            </div>
            <SliderImage></SliderImage>
        </div>
    );
};

export default Home;