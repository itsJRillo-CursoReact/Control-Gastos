import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGasto from "./components/ListadoGasto";
import Modal from "./components/Modal";
import { generarID } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPres, setIsValidPres] = useState(false);
  const [divisa, setDivisa] = useState("");

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gasto.map((gastoState) =>
        gastoState.id === gastoState.id ? gasto : gastoState
      );

      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPres={isValidPres}
        setIsValidPres={setIsValidPres}
        divisa={divisa}
        setDivisa={setDivisa}
      />
      {isValidPres && (
        <>
          <main>
            <ListadoGasto
              gastos={gastos}
              divisa={divisa}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>

          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
