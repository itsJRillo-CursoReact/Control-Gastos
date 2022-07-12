import { formatearFecha } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const diccionariosIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto, divisa, setGastoEditar, eliminarGasto}) => {
  const asignarSimbolo = () => {
    switch (divisa) {
      case "USD":
        return "$";

      case "EUR":
        return "€";

      case "JYP":
        return "¥";

      case "GBP":
        return "£";
    }
  };
  const { nombre, cantidad, categoria, id, fecha } = gasto;

  const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => {setGastoEditar(gasto)}}>
          Editar
        </SwipeAction>
      </LeadingActions>
  )

  

  const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
        destructive={true}
        onClick={() => {eliminarGasto(id)}}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
  )
    
  

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={diccionariosIconos[categoria]} />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formatearFecha(fecha)}</span>{" "}
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">
            {asignarSimbolo()}
            {cantidad}
          </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
