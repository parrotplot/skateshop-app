import "./CartDropdown.css";
export default function CartDropdown(props) {
  return (
    <>
      <div
        //  style={{ display: props.showCart ? "block" : "none" }}
        className={`CartDropdown ${props.showCart ? "show" : "hide"}`}
      >
        CartDropdown
      </div>
    </>
  );
}
