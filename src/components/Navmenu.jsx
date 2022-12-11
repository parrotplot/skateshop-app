import "./Navmenu.css";
export default function (props) {
  return (
    <ul className="Navmenu">
      <li onClick={() => props.funcionParaCambiarPagina("Home")}>Home</li>
      <li onClick={() => props.funcionParaCambiarPagina("Decks")}>Decks</li>
      <li onClick={() => props.funcionParaCambiarPagina("Trucks")}>Trucks</li>
      <li onClick={() => props.funcionParaCambiarPagina("Wheels")}>Wheels</li>
      <li onClick={() => props.funcionParaCambiarPagina("Accessories")}>
        Accessories
      </li>
    </ul>
  );
}
