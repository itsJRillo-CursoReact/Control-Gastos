import Gasto from "./Gasto"

const ListadoGasto = ({gastos, divisa, setGastoEditar, eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? "Gastos" : "Aún no hay gastos"}</h2>
        {gastos.map( gasto => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
            divisa={divisa}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
          />
        ))}
    </div>
  )
}

export default ListadoGasto