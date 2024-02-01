const App = () => {
  let cars = [
    {
      color: "red",
      price: 50000,
    },
    {
      color: "red",
      price: 5000000,
    },
  ];

  // not using {} inside map() method
  const listing = cars.map((car) => (
    <li key={car.price}>
      car color is {car.color} and price is {car.price}
    </li>
  ));
  return (
    <>
      <ul>{listing}</ul>
    </>
  );
};

export default App;
