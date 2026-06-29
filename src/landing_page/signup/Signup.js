import { useState } from "react";
import { Link } from "react-router-dom";

import { API_BASE_URL, DASHBOARD_URL } from "../../config";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to create your account.");
      }

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      setStatus({
        type: "success",
        message: "Account created successfully. You can now open the dashboard.",
      });
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to create your account.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <section className="col-lg-6">
          <p className="text-primary fw-semibold">Open your trading account</p>
          <h1 className="display-5 fw-semibold mb-3">
            Start investing with a secure dashboard.
          </h1>
          <p className="lead text-muted">
            Create an account here, then manage holdings, positions, watchlists,
            and orders with protected login access.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            {DASHBOARD_URL && (
              <a className="btn btn-primary px-4" href={DASHBOARD_URL}>
                Open dashboard
              </a>
            )}
            <Link className="btn btn-outline-primary px-4" to="/pricing">
              View pricing
            </Link>
          </div>
        </section>

        <section className="col-lg-6">
          <form className="signup-card" onSubmit={handleSubmit}>
            <h2>Create account</h2>
            <label className="signup-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="signup-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="signup-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
                minLength="6"
                required
              />
            </label>
            {status.message && (
              <p className={`signup-message signup-message-${status.type}`}>
                {status.message}
              </p>
            )}
            <button className="btn btn-primary w-100 py-2" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default SignUp;
