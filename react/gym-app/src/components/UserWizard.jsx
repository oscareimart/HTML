import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UserWizard({ setUsers }) {
  const { userLogged, logout, setUserLogged } = useAuth();

  const [user, setUser] = useState(userLogged);
  const handleChangeUser = (value) => {
    setUser({ ...user, role: value, status: 1, menuSelected: "dashboard" });

    setUsers((prev) =>
      prev.some((e) => e.name === user.name)
        ? prev
        : [
            ...prev,
            { id: Date.now(), name: user.name, plan: "Principiante", saldo: 0 },
          ],
    );
  };

  const handleSubmit = () => {
    setUserLogged(user);
  };

  return (
    <div style={{ margin: "auto" }}>
      <h1>Configuracion de Usuario</h1>
      <p>
        <FontAwesomeIcon size="6x" icon={faUserAlt} />
      </p>

      <p
        style={{
          color: "white",
          borderRadius: "5px",
          backgroundColor: "#555",
          padding: "5px",
          //   margin: "5px",
        }}
      >
        Bienvenido <strong>{user.name}</strong>, para ingresar al sistema por
        primera vez, debe configurar su usuario con el rol correspondiente{" "}
      </p>

      <form
        action={() => handleSubmit()}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          borderStyle: "groove",
          borderRadius: "15px",
          maxWidth: "500px",
          justifySelf: "center",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        <label htmlFor="" style={{ padding: "5px" }}>
          Seleccione el Rol para el Usuario:
        </label>
        <select
          name=""
          id=""
          style={{ height: "35px", padding: "5px", marginBottom: "10px" }}
          onChange={(e) => handleChangeUser(e.target.value)}
          defaultValue={""}
          required
          // value={""}
        >
          <option value="">Seleccione Opcion...</option>
          <option value="admin">Admin</option>
          <option value="trainer">Trainer</option>
          <option value="member">Member</option>
        </select>

        <button>Continuar</button>
      </form>

      <button className="btn-logout" onClick={logout}>
        Cerrar Sesion <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </div>
  );
}
