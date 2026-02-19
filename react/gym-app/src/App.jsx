import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import RegisterFormUser from "./components/RegisterFormUser";
import RegisterFormDiet from "./components/RegisterFormDiet";
import UserList from "./components/UserList";
import DietList from "./components/DietList";
import "./App.css";
import UserWizard from "./components/UserWizard";
import Dashboard from "./pages/Dashboard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import CardId from "./components/CardId";
import { useAuth } from "./context/AuthContext";

function App() {
  const { userLogged, logout, setUserLogged } = useAuth();
  console.log(userLogged);

  const [users, setUsers] = useLocalStorage("gym-users", []); // useState([]);
  const [diets, setDiets] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [userSelected, setUserSelected] = useState("SinNombre");

  if (!userLogged) {
    return <Login />;
  }
  if (userLogged.status === 0) {
    return (
      <UserWizard
        userLogged={userLogged}
        logout={logout}
        setUserLogged={setUserLogged}
      />
    );
  }
  if (userLogged.status === 1) {
    return <Dashboard />;
  }
  return (
    <div>
      <Header />
      <p> Bienvenido, {userLogged?.name}</p>
      <button className="btn-logout" onClick={logout}>
        Cerrar Sesion
      </button>

      <div className="content">
        <div className="card">
          <CardId dietas={diets} userName={userSelected} saldo={saldo} />
        </div>
        {/* <div className="card">asd</div> */}
      </div>
      <div className="content">
        <div className="card">
          <RegisterFormUser users={users} setUsers={setUsers} />
          <UserList
            users={users}
            setUserSelected={setUserSelected}
            setSaldo={setSaldo}
          />
        </div>
        <div className="card">
          <RegisterFormDiet diets={diets} setDiet={setDiets} />
          <DietList diets={diets} />
        </div>
      </div>
    </div>
  );
}

export default App;
