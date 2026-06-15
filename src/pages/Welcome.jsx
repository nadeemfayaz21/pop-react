import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container welcome-page">
      <h1>Welcome to PopX</h1>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <Link to="/register">
        <button className="primary-btn">
          Create Account
        </button>
      </Link>

      <Link to="/login">
        <button className="secondary-btn">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}