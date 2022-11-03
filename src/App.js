import { useState } from "react";
// import Form from "./components/Form";
// import Colors from "./components/Colors";
import Counter from "./components/Counter";
// import User from "./components/User";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* <Form /> */}
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button>

      {/* <User /> */}
      {/* <Colors /> */}
    </div>
  );
}

export default App;
