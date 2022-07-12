import { useState, useEffect } from "react";
import {CircularProgressbar} from "react-circular-progressbar"

import "react-circular-progressbar/dist/styles.css"
const ControlPresupuesto = ({ gastos, presupuesto, divisa}) => {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(
    () => {
      const totalGastado = gastos.reduce(
        (total, gasto) => gasto.cantidad + total,
        0
      );

      const totalDisponible = presupuesto - totalGastado;

      setDisponible(totalDisponible);
      setGastado(totalGastado);
    },
    [gastos]
  );

  const formatear = (coin) => {
    switch (divisa) {
      case "USD":
        return coin.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });

      case "EUR":
        return coin.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
        });

      case "JYP":
        return coin.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JYP",
        });

      case "GBP":
        return coin.toLocaleString("en-GB", {
          style: "currency",
          currency: "GBP",
        });

      case "":
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={0}

        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatear(presupuesto)}
        </p>

        <p>
          <span>Disponible: </span> {formatear(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatear(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
