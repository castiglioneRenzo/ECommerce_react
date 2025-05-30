function ItemListContainer({ greeting }) {
  return (
    <div className="grid grid-cols-3">
      <div></div> {/* columna vacía izquierda */}
      <div className="item-list-container col-span-1">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl antialiased text-indigo-900">{greeting}</h1>
          <p>Here you will find a list of items.</p>
        </div>
      </div>
      <div></div> {/* columna vacía derecha */}
    </div>
  );
}
export default ItemListContainer;