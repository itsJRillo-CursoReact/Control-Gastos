import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPres,
  setIsValidPres,
  divisa,
  setDivisa

}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPres ? (
        <ControlPresupuesto
            presupuesto={presupuesto}
            divisa={divisa}
            setDivisa={setDivisa}
            gastos={gastos}    
        />
       ) : (
        <NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPres={setIsValidPres}
        divisa={divisa}
        setDivisa={setDivisa}
        />
       )}      
    </header>
  );
};

export default Header;
