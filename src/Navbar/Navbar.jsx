import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

  const  navLinks=<>
          <li ><NavLink className='hover:text-red-500' to='/'>Home</NavLink></li>
             <li><NavLink className='hover:text-red-500' to='/about'>About</NavLink></li>
             <li><NavLink className='hover:text-red-500' to='/news'>News</NavLink></li>
             
    </>
    return (
        <div>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{ navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><span className="text-purple-500 font-medium  border-b-2">GamenTo</span> <span className="text-amber-500 font-bold">Event</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-purple-500 gap-5 px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   
  </div>
  {
                    user ?
                        <button onClick={handleSignOut} className="btn bg-amber-500 text-white">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn bg-purple-600 text-white">Login</button>
                        </Link>
                }
</div>
        </div>
    );
};

export default Navbar;