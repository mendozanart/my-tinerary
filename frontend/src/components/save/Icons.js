import React from "react";
import save1 from "../../img/icons/save1.png";
import save2 from "../../img/icons/save2.png";

export default function Icons({ guardar }) {
  return (
    <div>
      {guardar ? (
        <span>
          <img src={save2} className="save2 btn d-block w-100" alt="..." />
        </span>
      ) : (
        <span>
          <img src={save1} className="save2 btn d-block w-100" alt="..." />
        </span>
      )}
    </div>
  );
}
