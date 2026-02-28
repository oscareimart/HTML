import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faDiagnoses,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import CardId from "../components/CardId";
import BarChartExample from "../components/dashboard/charts";

const stylesCard = {
  width: "100%",
  // paddi
  height: "250px",
  backgroundColor: "var(--bg-c)",
  border: "1px solid #333",
  // borderColor: "AccentColorText",
  borderStyle: "1px solid",
  borderRadius: "15px",
  // padding: "15px",
  display: "flex",
  gap: "5px",
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
  payments = [],
  saldo = 0,
  userSelected = "SinNombre",
}) {
  const usersChart = users.slice(0, 5);
  console.log(usersChart);
  const usersPaymentsPag = usersChart.map((u) => ({
    ...u,
    totalPayments: payments
      .filter((p) => p.usuario?.id === u.id && p.estado === "Pagado")
      .reduce((acc, cur) => acc + Number(cur.monto), 0),
  }));
  const usersPaymentsPen = usersChart.map((u) => ({
    ...u,
    totalPayments: payments
      .filter((p) => p.usuario?.id === u.id && p.estado === "Pendiente")
      .reduce((acc, cur) => acc + Number(cur.monto), 0),
  }));
  const usersPaymentsCan = usersChart.map((u) => ({
    ...u,
    totalPayments: payments
      .filter((p) => p.usuario?.id === u.id && p.estado === "Cancelado")
      .reduce((acc, cur) => acc + Number(cur.monto), 0),
  }));

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
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginBottom: "25px",
          gap: "25px",
        }}
      >
        <div style={stylesCard}>
          <div style={styleCard}>
            <FontAwesomeIcon size="2x" icon={faUserCheck} />
            <h3>Usuarios Registrados</h3>
            <strong>{users.length}</strong>
          </div>
        </div>
        <div style={stylesCard}>
          <div style={styleCard}>
            <FontAwesomeIcon size="2x" icon={faDiagnoses} />
            <h3>Dietas Registradas</h3>
            <strong>{diets.length}</strong>
          </div>
        </div>
        <div style={stylesCard}>
          <div style={styleCard}>
            <FontAwesomeIcon size="2x" icon={faMoneyBill} />
            <h3>Pagos Registrados</h3>
            <strong>
              {payments.length} |{" "}
              {payments
                .filter((p) => p.estado === "Pagado")
                .reduce((acc, cur) => acc + Number(cur?.monto), 0)}{" "}
              Bs
            </strong>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginBottom: "25px",
          gap: "25px",
        }}
      >
        <div style={stylesCard}>
          <BarChartExample
            usersPaymentsPag={usersPaymentsPag}
            usersPaymentsPen={usersPaymentsPen}
            usersPaymentsCan={usersPaymentsCan}
          />
        </div>
        <div style={{ ...stylesCard }}>
          {/* <div> */}
          {/* <BarChartExample /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
