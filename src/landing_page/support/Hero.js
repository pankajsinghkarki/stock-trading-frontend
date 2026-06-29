
function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-5" id="supportWrapper">
                <h4>Support Portel</h4>
                <a href="/support">Track Tickets</a>
            </div> 
            <div  className="row p-3 m-3">
                <div className="col-6 p-5">
                    <h1 className="fs-3">
                        Search for an asnwer or browse help topics to create a ticket
                    </h1>
                    <input placeholder="Eg. how do i activate F&O" />
                    <br />
                    <a href="/support">Track account opening</a>
                    <a href="/support">Track segment activation</a>
                    <a href="/support">Interaday margins</a>
                    <a href="/support">Kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li><a  href="/support">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="/support">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
export default Hero;