
function Team() {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>
      <div
        className="row p-5   text-muted"
        style={{ lineheight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center ">
          <img
            src="media/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius:"100%",width:"60%" }}
          />
           <h5 className="mt-5">Founder,CEO</h5>
           <h4 >Nithin Kamath</h4>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /> Playing basketball is his zen.
            <br />
            Connect on{" "}
            <a href="/support" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /
            <a href="/support" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>
            /
            <a href="/support" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
