export default function ItemListContainer(props) {
  return (
    <div
      style={{
        fontSize: 80,
        textAlign: "center",
        padding: 100,
      }}
    >
      {props.greeting}
    </div>
  );
}
