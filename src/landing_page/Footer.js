import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="media/logo.svg" style={{ width: "50%" }} alt="logo" />
          <p>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <p>Company</p>
          <Link to="/about" className="footer-link">About</Link>
          <br />
          <Link to="/product" className="footer-link">Products</Link>
          <br />
          <Link to="/pricing" className="footer-link">Pricing</Link>
          <br />
          <a href="https://zerodha.com/referral/" className="footer-link">Referral programme</a>
          <br />
          <a href="https://zerodha.com/careers/" className="footer-link">Careers</a>
          <br />
          <a href="https://zerodha.tech/" className="footer-link">Zerodha.tech</a>
          <br />
          <a href="https://zerodha.com/media/" className="footer-link">Press & media</a>
          <br />
          <a href="https://zerodha.com/z-connect/category/zerodha-cares" className="footer-link">Zerodha Cares (CSR)</a>
          <br />
        </div>
        <div className="col" >
          <p>Support</p>
          <Link to="/support" className="footer-link">Contact us</Link>
          <br />
          <Link to="/support" className="footer-link">Support</Link>
          <br />
          <a href="https://support.zerodha.com/" className="footer-link">Portal</a>
          <br />
          <a href="https://zerodha.com/z-connect/" className="footer-link">z-connect</a>
          <br />
          <a href="https://zerodha.com/z-connect/" className="footer-link">blog</a>
          <br />
          <Link to="/pricing" className="footer-link">List of charges</Link>
          <br />
          <a href="https://zerodha.com/resources/" className="footer-link">Download &</a>
          <br />
          <a href="https://zerodha.com/resources/" className="footer-link">resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <Link to="/signup" className="footer-link">
            open
            <br />
            accountFund
            <br />
            transfer
          </Link>

          <br />
        </div>
      </div>
      <div className="container mt-5 fs-6 text-muted" style={{fontSize:"14px"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
         <br />
         <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not</p>
         <br />
         <p>undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
