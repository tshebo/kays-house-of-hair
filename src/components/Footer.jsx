import React from "react";
import "../assets/footer.css";
import {
  RiPhoneLine,
  RiMap2Line,
  RiTimeLine,
  RiFacebookFill,
  RiInstagramLine,
  RiInstagramFill,
  RiWhatsappLine,
  RiMessage2Fill,
  RiMessengerFill,
  RiTiktokFill,
  RiWhatsappFill,
} from "@remixicon/react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <RiMap2Line className="icon" />
            <div>
              <h4>Address</h4>
              <p>
                2722 Sochilla Complex <br />
                Themba <br />
                Hammanskraal <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <RiPhoneLine className="icon" />
            <div>
              <h4>Reservations</h4>
              <p>
                <strong>Phone:</strong> 076 783 1191
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <RiTimeLine className="icon" />
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Tue - Sat:</strong> 10AM - 5PM
                <br />
                <b>Monday & Sunday</b>: Closed
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a
                href=" https://www.instagram.com/khensani_house_of_hair?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="instagram"
                target="_blank"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.facebook.com/p/Khensani-House-Of-Hair-100063489014753/"
                className="facebook"
                target="_blank"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.tiktok.com/discover/khensani-house-of-hair"
                className="tiktok"
                target="_blank"
              >
                <RiTiktokFill />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B27767831191&context=ARApjTuFOG_BrE8E48GnE0pXAUe0Qgjll2sXMXsIlmMJajv9ujDE8vQZEswBKYzgNrEdzD5Eo5b0eqj9RWBW6hoR1YXcraAXtuAmquuGWizoiBmqkh4sGj-v2PUJJJP2yUPR6lkSxcyiDqRbkU_Jh2_j1Q&source=FB_Page&app=facebook&entry_point=page_cta"
                className="whatsapp"
                target="_blank"
              >
                <RiWhatsappFill />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Khensani's House Of Hair</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Tshebo</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
