import TrainingPlan from "./TrainingPlan";
import { Table } from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPrint } from "@fortawesome/free-solid-svg-icons";

const headers = [
  { field: "id", displayName: "Codigo" },
  { field: "name", displayName: "Nombre" },
  { field: "saldo", displayName: "Saldo" },
  { field: "plan", displayName: "Plan" },
];

const ButtonsActions = ({ id, setUsers }) => {
  const handleClickButton = (action) => {
    if (action === "delete") {
      setUsers((prev) => prev.filter((e) => e.id !== id));
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

function UserList({ users = [], setUsers, setUserSelected, setSaldo }) {
  const handleSelectUser = (user) => {
    const { name, saldo } = user;
    setUserSelected(name);
    setSaldo(saldo);
  };

  console.log(users);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      {users?.length === 0 && <p>No hay Usuarios aun</p>}

      {users && (
        <Table
          data={users}
          headers={headers}
          actions={(row) => <ButtonsActions id={row.id} setUsers={setUsers} />}
        />
      )}
      {/* {users &&
        users?.map((user) => (
          <div key={user.id} className="item">
            <p>
              Nombre de Usuario: {user.name}{" "}
              <button onClick={() => handleSelectUser(user)}>
                ver tarjeta
              </button>{" "}
            </p>
            <TrainingPlan plan={user.plan} />
          </div>
        ))} */}
    </div>
  );
}

export default UserList;
