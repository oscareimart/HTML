import { useState } from "react";
import {
  styleFill,
  styleForm,
  styleInput,
  styleRow,
  styleButton,
} from "../styles/formStyles";

function RegisterFormPayment({ payments, setPayments, users = [], setUsers }) {
  const [monto, setMonto] = useState();
  const [fecha, setFecha] = useState("");
  const [concepto, setConcepto] = useState("");
  const [estado, setEstado] = useState("");
  const [userSelected, setUserSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Number(userSelected);
    const userFound = users.find((e) => e.id === user);
    console.log(payments);

    const newPayment = {
      id: `P${Date.now()}`,
      monto,
      fecha,
      estado,
      usuario: userFound,
      concepto,
    };
    setPayments([...payments, newPayment]);
    const montoPago = estado === "Pagado" ? Number(monto) : 0;
    const totalPayments =
      payments
        .filter((p) => p.usuario?.id === userFound?.id && p.estado === "Pagado")
        .reduce((acc, cur) => acc + Number(cur.monto), 0) + montoPago;

    setUsers((prev) =>
      prev.map((user) =>
        user.id === userFound?.id ? { ...user, saldo: totalPayments } : user,
      ),
    );

    setMonto(0);
    setFecha("");
    setConcepto("");
  };
  return (
    <form onSubmit={handleSubmit} className="forms" style={styleForm}>
      <h2>Registro de Pago 💵</h2>
      <div style={{ padding: "15px" }}>
        <div style={styleRow}>
          <div style={styleFill}>
            <label>Monto</label>
            <input
              id="monto"
              name="monto"
              style={styleInput}
              type="number"
              placeholder="100,30"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              required
            />
          </div>
          <div style={styleFill}>
            <label>Fecha</label>
            <input
              id="fecha"
              style={styleInput}
              type="date"
              placeholder="10/10/2020"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
        </div>

        <div style={styleRow}>
          <div style={styleFill}>
            <label>Estado</label>
            <select
              name=""
              id=""
              style={styleInput}
              defaultValue={""}
              onChange={(e) => setEstado(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Pagado">Pagado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
          <div style={styleFill}>
            <label>Usuario</label>
            <select
              name=""
              id=""
              style={styleInput}
              defaultValue={""}
              onChange={(e) => setUserSelected(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              {users.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* <div style={styleRow}> */}
        <div style={styleFill}>
          <label>Concepto</label>
          <textarea
            style={{ ...styleInput, height: "60px" }}
            type="text"
            placeholder="Pago Mensualidad"
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
            required
          />
        </div>
        {/* </div> */}

        <button style={styleButton} type="submit">
          Registrar
        </button>
      </div>
    </form>
  );
}

export default RegisterFormPayment;
