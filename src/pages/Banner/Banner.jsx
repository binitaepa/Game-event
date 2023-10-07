import { Link } from "react-router-dom";

import img from '../../assets/cool-background.png'

const Banner = () => {
    
    return (
        <div className="md:w-full">
<div className="hero min-h-screen" >
  <div className="hero-overlay bg-opacity-70">
    <img className="w-full bg-opacity-70" src={img} alt="" />
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-purple-700">Level Up Your Tech and Gaming Experience</h1>
      <p className="mb-5 text text-amber-500 text-bold">Welcome to the Ultimate Gaming Event Hub! Get ready for a thrilling experience as we bring you the latest and greatest gaming events from around the world. Whether you are a casual player or a hardcore gamer, there is something here for everyone. Explore upcoming tournaments, conventions, eSports competitions, and more. Don not miss out on the action—join us and level up your gaming</p>
      <Link to='/register'><button className="btn btn-primary">Register</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;