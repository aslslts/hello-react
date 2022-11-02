import User from "./components/User";

function App() {
  return (
    <div>
      <User
        title="Kişi"
        data={{ name: "Asli Sulutas", city: "Mersin", age: 25 }}
        friends={["Asli", "Murat", "Fatma", "Ahmet"]}
      />
    </div>
  );
}

export default App;
