import React from "react";
import instagram from "../../img/icons/instagram.png";
import facebook from "../../img/icons/facebook.png";
import whatsapp from "../../img/icons/whatsapp.png";

import { Link as Linkrouter } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer2">
      <div className="container mb-0 mr-0">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <p className="menu mt-3 mb-2">
              <Linkrouter to="/inicio" className="fmenu">
                Home
              </Linkrouter>
              <Linkrouter to="/ciudades" className="fmenu">
                Cities
              </Linkrouter>
              <Linkrouter to="/review" className="fmenu">
                Review
              </Linkrouter>
              <Linkrouter to="/usuarios" className="fmenu">
                Signup
              </Linkrouter>
            </p>
            <a
              href="https://www.whatsapp.com/?lang=es"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
              target="_blank"
            >
              <img src={whatsapp} width="15vw" alt="Whatsapp" className="m-2" />
            </a>
            <a
              href="https://www.facebook.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
              target="_blank"
            >
              <img src={facebook} width="15vw" alt="Facebook" className="m-2" />
            </a>
            <a
              href="https://www.instagram.com/"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
              target="_blank"
            >
              <img
                src={instagram}
                width="15vw"
                alt="Whatsapp"
                className="m-2"
              />
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <p className="copyright">© 2013 Mytinerary. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
