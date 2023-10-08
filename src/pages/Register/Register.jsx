import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name= form.get('name');
        const email=form.get('email')
        const password=form.get('password')
        console.log(name,email,password)
        createUser(email,password)
      .then(result=>{console.log(result)})
      .catch(error=>{
        console.error(error)
      })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
  <h2 className="text-3xl">Please Register</h2>
   
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-200">
      <form onClick={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center text-sm mb-4">Already have an account ?<Link className="text-red-600 font-bold" to='/login'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;