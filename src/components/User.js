import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ name: "Asli", surname: "Sulutas" });
  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <br />
      <br />
      <div>
        <button onClick={() => setUser((prev) => ({ ...prev, name: "Ahmet" }))}>
          İsmi Değiştir
        </button>
        <button
          onClick={() =>
            setUser((prev) => ({ ...prev, surname: "Test Soyisim" }))
          }
        >
          Soyismi Değiştir
        </button>
      </div>
    </div>
  );
}

export default User;
