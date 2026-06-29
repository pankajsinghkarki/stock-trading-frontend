import { Link } from "react-router-dom";

function SignUp() {
  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <section className="col-lg-6">
          <p className="text-primary fw-semibold">Open your trading account</p>
          <h1 className="display-5 fw-semibold mb-3">
            Start investing with a secure dashboard.
          </h1>
          <p className="lead text-muted">
            Create an account from the dashboard app, then manage holdings,
            positions, watchlists, and orders with protected login access.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a className="btn btn-primary px-4" href={dashboardUrl}>
              Create account
            </a>
            <Link className="btn btn-outline-primary px-4" to="/pricing">
              View pricing
            </Link>
          </div>
        </section>

        <section className="col-lg-6">
          <img
            src="media/signup.png"
            alt="Account signup preview"
            className="img-fluid"
          />
        </section>
      </div>
    </main>
  );
}

export default SignUp;
