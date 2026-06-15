export default function Login() {
  return (
    <div className="container form-page">
      <h2 className="form-title">
        Signin to your
        <br />
        PopX account
      </h2>

      <p className="form-subtitle">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <input type="email" placeholder="Email Address" />

      <input type="password" placeholder="Password" />

      <button className="login-btn">
        Login
      </button>
    </div>
  );
}