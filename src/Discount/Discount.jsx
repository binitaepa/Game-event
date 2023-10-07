import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Discount = () => {
    return (
        <div className="flex mt-5">
        <button className=" btn text-white bg-purple-500">Discount</button>
        <div className="w-full text-2xl text-purple-500 bg-gray-400">
        <Marquee pauseOnHover={true} speed={100}>
            <Link className="mr-12" to='/'>Discount is going on</Link>
            <Link className="mr-12" to='/register'>Register</Link>
            <Link className="mr-12" to='/login'>Login Please</Link>
        </Marquee>
        </div>

    </div>
    );
};

export default Discount;