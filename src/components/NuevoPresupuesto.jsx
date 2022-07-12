import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPres,
  divisa,
  setDivisa,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0 || divisa === "") {
      setMensaje("No es un presupuesto válido");
      return;
    }

    setMensaje("");
    setIsValidPres(true);
  };

  return (
    <div>
      <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
          <div className="campo">
            <section>
              <label>Definir Presupuesto</label>
              <input
                className="nuevo-presupuesto"
                type="number"
                placeholder="Añade tu presupuesto"
                value={presupuesto}
                onChange={(e) => {
                  setPresupuesto(Number(e.target.value));
                }}
              />
            </section>

            <section>
              <label>Seleccionar divisas</label>
              <br />
              <select onChange={(e) => {setDivisa(e.target.value)}} name="divisa" id="divisa">
              <option value="" > -- Seleccion divisa -- </option>
                <option value="USD" defaultChecked>USD</option>
                <option value="EUR">EUR</option>
                <option value="JYP">JYP</option>
                <option value="GBP">GBP</option>
              </select>
            </section>
          </div>

          <input type="submit" value="Añadir" />

          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      </div>

      <div>
        <form className="formulario"></form>
      </div>
    </div>
  );
};

export default NuevoPresupuesto;
