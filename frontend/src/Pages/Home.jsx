import { useContext } from "react";
import UserContext from "../Context/AuthContext";
import { useNavigate } from "react-router";

function Home() {
  const { Registration, login } = useContext(UserContext);
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    Registration(email.value, password.value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };
  const Login = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    login(email.value, password.value)
      .then((res) => {
        console.log(res);
        navigate("/blog");
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={register} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">registration</button>
          </div>
        </form>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={Login} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">LOgin</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
