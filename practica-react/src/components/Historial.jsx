import React, { useState } from "react";
import { ObtenerHistorial, BorrarHistorial } from "./historial.js";

const Historial = () => {
  const [valores, setValores] = useState(ObtenerHistorial());

  return (
    <div>
      {" "}
      <div className="historial">
        <h2>Historial:</h2>
        <div className="historial__items">
          {valores.map((valor, index) => (
            <p className="historial__item" key={index}>
              {valor}
            </p>
          ))}
        </div>
        <button
          className="historial__boton"
          onClick={() => {
            BorrarHistorial();
            setValores(["", "", "", ""]);
            setValores(ObtenerHistorial());
          }}
        >
          Borrar Historial
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Historial;
