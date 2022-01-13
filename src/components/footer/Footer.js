import React from "react";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import whatsapp from "../../img/whatsapp.png";

const footer = () => {
  return (
    <div className="footer col-12">
      <div>
        <h3 className="tfooter col-sm-6 col-md-12">
          {" "}
          © 2013 Mytinerary. All rights reserved.{" "}
        </h3>
      </div>
      <div className="ifooter col-sm-6 col-md-12">
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} width="15vw" alt="Instagram" className="m-2" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} width="15vw" alt="Facebook" className="m-2" />
        </a>
        <a href="https://www.whatsapp.com/?lang=es" target="_blank">
          <img src={whatsapp} width="15vw" alt="Whatsapp" className="m-2" />
        </a>
      </div>
    </div>
  );
};

export default footer;
