import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Table } from "./Table";

const stylesCell = {
  border: "1px solid var(--bg-a)",
  //   padding: "8px",
};

const stylesCellHeader = {
  border: "1px solid var(--bg-a)",
  padding: "8px",
  backgroundColor: "var(--text)",
  color: "var(--bg)",
};

const stylesTable = {
  width: "100%",
  // border: "1px solid var(--bg-a)",
  borderRadius: "8px",
};

const headers = [
  { field: "id", displayName: "Codigo" },
  { field: "monto", displayName: "Monto" },
  { field: "concepto", displayName: "Concepto" },
  { field: "estado", displayName: "Estado" },
  { field: "usuario", displayName: "Usuario" },
  { field: "fecha", displayName: "Fecha" },
];

const ButtonsActions = ({ id, setPayments }) => {
  const handleClickButton = (action) => {
    if (action === "delete") {
      setPayments((prev) => prev.filter((e) => e.id !== id));
    }
  };

  return (
    <div>
      <button
        style={{
          padding: "5px",
          marginRight: "5px",
          backgroundColor: "var(--bg-c)",
        }}
      >
        <FontAwesomeIcon
          size="1x"
          color="#F54927"
          icon={faTrash}
          onClick={() => handleClickButton("delete")}
        />
      </button>
      <button style={{ padding: "5px", backgroundColor: "var(--bg-c)" }}>
        <FontAwesomeIcon size="1x" color="#0F418C" icon={faPrint} />
      </button>
    </div>
  );
};

export const PaymentList = ({ payments = [], setPayments }) => {
  payments = payments.map((e) => ({ ...e, usuario: e.usuario?.name }));

  return (
    <>
      <h3>Lista de Pagos Realizados</h3>
      <Table
        data={payments}
        headers={headers}
        actions={(row) => (
          <ButtonsActions id={row.id} setPayments={setPayments} />
        )}
      />
    </>
  );
};
