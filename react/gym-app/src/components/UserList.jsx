import TrainingPlan from "./TrainingPlan";

function UserList({ users = [], setUserSelected, setSaldo }) {
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

      {users &&
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
        ))}
    </div>
  );
}

export default UserList;
