import React, { useState } from "react";

function UserManager() {
  // Alap osztályok
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    getInfo() {
      return `Név: ${this.name}, Email: ${this.email}`;
    }
  }

  class Admin extends User {
    constructor(name, email, role) {
      super(name, email);
      this.role = role;
    }

    getInfo() {
      return `Admin - ${super.getInfo()}, Szerepkör: ${this.role}`;
    }
  }

  // Felhasználók állapota
  const [users, setUsers] = useState([
    new User("Kiss Péter", "peter.kiss@example.com"),
    new Admin("Tóth László", "laszlo.toth@example.com", "Rendszergazda"),
  ]);

  // Új felhasználó hozzáadása
  const addUser = (name, email, role) => {
    const newUser = role ? new Admin(name, email, role) : new User(name, email);
    setUsers([...users, newUser]);
  };

  // Felhasználó törlése
  const deleteUser = (index) => {
    if (window.confirm("Biztosan törölni szeretnéd ezt a felhasználót?")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  // Felhasználó szerkesztése
  const editUser = (index) => {
    const user = users[index];
    const name = prompt("Új név:", user.name);
    const email = prompt("Új email:", user.email);

    if (name && email) {
      const updatedUsers = [...users];
      updatedUsers[index].name = name;
      updatedUsers[index].email = email;

      if (user instanceof Admin) {
        const role = prompt("Új szerepkör:", user.role);
        if (role) {
          updatedUsers[index].role = role;
        }
      }

      setUsers(updatedUsers);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Felhasználói Kezelő Rendszer</h1>

      {/* Felhasználók listája */}
      <div id="userList" className="mt-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="alert alert-info d-flex justify-content-between align-items-center"
          >
            <span>{user.getInfo()}</span>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => editUser(index)}
              >
                Szerkesztés
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteUser(index)}
              >
                Törlés
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Új felhasználó hozzáadása */}
      <h3 className="mt-4">Új Felhasználó Hozzáadása</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const role = e.target.role.value;
          addUser(name, email, role);
          e.target.reset();
        }}
        className="mb-4"
      >
        <div className="mb-2">
          <input type="text" name="name" className="form-control" placeholder="Név" required />
        </div>
        <div className="mb-2">
          <input type="email" name="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-2">
          <select name="role" className="form-control">
            <option value="">Felhasználó</option>
            <option value="Rendszergazda">Rendszergazda</option>
            <option value="Fejlesztő">Fejlesztő</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Hozzáadás
        </button>
      </form>
    </div>
  );
}

export default UserManager;