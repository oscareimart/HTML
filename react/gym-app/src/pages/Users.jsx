import RegisterFormUser from "../components/RegisterFormUser";
import UserList from "../components/UserList";

export const Users = ({
  users = [],
  setUsers,
  setUserSelected,
  setSaldo,
  setPayments,
}) => {
  return (
    <div className="card">
      <RegisterFormUser
        users={users}
        setUsers={setUsers}
        setPayments={setPayments}
      />
      <UserList
        users={users}
        setUserSelected={setUserSelected}
        setUsers={setUsers}
        setSaldo={setSaldo}
      />
    </div>
  );
};
