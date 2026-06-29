function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <img
          src="media/homeHero.png"
          alt="Online investing platform"
          className="mb-5"
          style={{ width: "1300px", height: "auto" }}
        />

        <h1 className="mt-5 text-center">Invest in everything</h1>

        <p className="text-center">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
