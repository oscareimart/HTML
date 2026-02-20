import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faDiagnoses } from "@fortawesome/free-solid-svg-icons";
import CardId from "../components/CardId";

const stylesCard = {
  width: "350px",
  height: "200px",
  backgroundColor: "var(--bg-c)",
  border: "1px solid #333",
  // borderColor: "AccentColorText",
  borderStyle: "1px solid",
  borderRadius: "15px",
  // margin: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const styleCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  justifyItems: "center",
  alignItems: "center",
};

export default function Dashboard({
  users = [],
  diets = [],
  saldo = 0,
  userSelected = "SinNombre",
}) {
  const { userLogged, logout, setUserLogged } = useAuth();
  return (
    <>
      <div
        style={{
          ...stylesCard,
          marginBottom: "25px",
          height: "180px",
          width: "100%",
        }}
      >
        <h2>
          Bienvenido <strong>{userLogged?.name}</strong>, su rol es{" "}
          <strong>{userLogged?.role}</strong>
        </h2>
        <p>
          En este panel podras visualizar las estadisticas generales del
          gimnasio
        </p>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", marginBottom: "25px" }}
      >
        <div style={{ ...stylesCard, marginRight: "15px" }}>
          <div style={styleCard}>
            <FontAwesomeIcon size="2x" icon={faUserCheck} />
            <h3>Usuarios Registrados</h3>
            <strong>{users.length}</strong>
          </div>
        </div>
        <div style={{ ...stylesCard, marginRight: "15px" }}>
          <div style={styleCard}>
            <FontAwesomeIcon size="2x" icon={faDiagnoses} />
            <h3>Dietas Registradas</h3>
            <strong>{diets.length}</strong>
          </div>
        </div>
        <div style={stylesCard}>Card Usuarios</div>
      </div>
      <CardId dietas={diets} userName={userSelected} saldo={saldo} />

      {/* <UserList /> */}
      {/* <TrainingPlan />
        <DietList /> */}
    </>
  );
}
