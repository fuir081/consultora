import Header from "./header/header";
import Bienvenida from "./panelInicio/bienvenida/bienvenida";
import PendientesDiarios from "./panelInicio/pendientesDiarios/pendientesDiarios";
import TarjetaResumen from "./panelInicio/tarjetaResumen/tarjetaResumen";

export default function Dashboard() {
  return (
    <>
      <Header />

      <main
        style={{
          width: "100vw",
          overflow: "hidden",
          background: "rgb(248, 248, 248)",
        }}
      >
        <Bienvenida />
        <PendientesDiarios />
        <TarjetaResumen />
      </main>
    </>
  );
}
