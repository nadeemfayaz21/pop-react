import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container form-page">
      <h2 className="form-title">
        Create your
        <br />
        PopX account
      </h2>

      <input type="text" placeholder="Full Name" />

      <input type="text" placeholder="Phone Number" />

      <input type="email" placeholder="Email Address" />

      <input type="password" placeholder="Password" />

      <input type="text" placeholder="Company Name" />

      <Link to="/account">
        <button className="primary-btn">
          Create Account
        </button>
      </Link>
    </div>
  );
}