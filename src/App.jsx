import { useState } from "react";

const App = () => {
  let greeting;
  let [isLoggedIn, setLoggedIn] = useState(true);
  if (isLoggedIn) {
    greeting = "hello world";
  }

  return <>{greeting}</>;
};

export default App;
