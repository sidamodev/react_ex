const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const ShoppingList = () => {
  const listItem = products.map((product) => (
    <li
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
      key={product.id}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default ShoppingList;
