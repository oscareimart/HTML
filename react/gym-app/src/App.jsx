import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import RegisterFormUser from "./components/RegisterFormUser";

import UserList from "./components/UserList";

import "./App.css";
import UserWizard from "./components/UserWizard";
import Dashboard from "./pages/Dashboard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import CardId from "./components/CardId";
import { useAuth } from "./context/AuthContext";
import Layout from "./pages/Layout";
import { Users } from "./pages/Users";
import { Diets } from "./pages/Diets";
import { Payments } from "./pages/Payments";

function App() {
  const { userLogged, logout, setUserLogged } = useAuth();

  const [users, setUsers] = useLocalStorage("gym-users", []); // useState([]);
  const [diets, setDiets] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [payments, setPayments] = useState([]);
  const [userSelected, setUserSelected] = useState("SinNombre");

  if (!userLogged) {
    return <Login />;
  }
  if (userLogged.status === 0) {
    return <UserWizard setUsers={setUsers} />;
  }
  if (userLogged.status === 1 && userLogged.menuSelected === "dashboard") {
    return (
      <Layout>
        <Dashboard
          users={users}
          diets={diets}
          saldo={saldo}
          payments={payments}
          userSelected={userSelected}
        />
      </Layout>
    );
  }
  if (userLogged.status === 1 && userLogged.menuSelected === "users") {
    return (
      <Layout>
        <Users
          users={users}
          setSaldo={setSaldo}
          setUserSelected={setUserSelected}
          setUsers={setUsers}
          setPayments={setPayments}
        />
      </Layout>
    );
  }
  if (userLogged.status === 1 && userLogged.menuSelected === "diets") {
    return (
      <Layout>
        <Diets setDiets={setDiets} diets={diets} users={users} />
      </Layout>
    );
  }
  if (userLogged.status === 1 && userLogged.menuSelected === "payments") {
    return (
      <Layout>
        <Payments
          payments={payments}
          setPayments={setPayments}
          users={users}
          setUsers={setUsers}
        />
      </Layout>
    );
  }
  // return (
  //   <div>
  //     <Header />
  //     <p> Bienvenido, {userLogged?.name}</p>
  //     <button className="btn-logout" onClick={logout}>
  //       Cerrar Sesion
  //     </button>
  //     <button
  //       style={{ marginLeft: "15px" }}
  //       className="btn-logout"
  //       onClick={() =>
  //         setUserLogged({ ...userLogged, menuSelected: "dashboard" })
  //       }
  //     >
  //       Atras
  //     </button>

  //     <div className="content">
  //       <div className="card">
  //         <CardId dietas={diets} userName={userSelected} saldo={saldo} />
  //       </div>
  //       {/* <div className="card">asd</div> */}
  //     </div>
  //     <div className="content">
  //       <div className="card">
  //         <RegisterFormUser users={users} setUsers={setUsers} />
  //         <UserList
  //           users={users}
  //           setUserSelected={setUserSelected}
  //           setSaldo={setSaldo}
  //         />
  //       </div>
  //       <div className="card">
  //         <RegisterFormDiet diets={diets} setDiet={setDiets} />
  //         <DietList diets={diets} />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
