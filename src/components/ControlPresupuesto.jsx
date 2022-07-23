import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ gastos, presupuesto, divisa, setGastos, setPresupuesto, setIsValidPres, setDivisa}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas reinicar la app?")

    if (resultado){
      setGastos([])
      setPresupuesto(0)
      setDivisa("")
      setIsValidPres(false)
    }
  }

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 750);
    setDisponible(totalDisponible);
    setGastado(totalGastado);
  }, [gastos]);

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
        styles={buildStyles({
          pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
        })}
        value={porcentaje}
        text={`${porcentaje}%  Gastado`} />
      </div>

      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
          <span>Presupuesto: </span> {formatear(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo': ''}`}>
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
