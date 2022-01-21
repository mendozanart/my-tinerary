import React from "react";
import like from "../../img/icons/like1 - copia.png";
import like2 from "../../img/icons/like2.png";

export default function icon({ gustar }) {
  return (
    <div>
      {gustar ? (
        <span>
          <img src={like2} className="icobut btn d-block w-100" alt="..." />
        </span>
      ) : (
        <span>
          <img src={like} className="icobut btn d-block w-100" alt="..." />
        </span>
      )}
    </div>
  );
}
