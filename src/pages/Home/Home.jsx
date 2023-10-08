import { useLoaderData } from "react-router-dom";
import Discount from "../../Discount/Discount";
import SliderImage from "../../SliderImage/SliderImage";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    const service=useLoaderData();
    useEffect(() => {
        Aos.init({duration:1000}); // Initialize AOS when the component mounts
      }, []);
    return (
        <div >

            <div data-aos='fade-right'>
            <Banner></Banner>
            <Discount></Discount>
            </div>
           <div data-aos="fade-right" className="text-amber-500">
           <h2  className="flex items-center justify-center text-3xl mt-5 font-bold gap-2">Our <span className="text-purple-600 italic"> Services </span> For You!!</h2>
           </div>
            <div data-aos="fade-left" className="grid md:grid-cols-3 gap-1 mb-10 ml-10 mt-10">
            
                {
                      service.map(aService =><Services key={aService.id} service={aService}></Services>)
                }
            </div>
           <div data-aos="flip-left">
           <SliderImage></SliderImage>
           </div>
        </div>
    );
};

export default Home;