import { useAuth } from "../context/AuthContext";
import UserList from "../components/UserList";
import TrainingPlan from "../components/TrainingPlan";
import DietList from "../components/DietList";

export default function Dashboard() {
  const { userLogged, logout } = useAuth();

  return (
    <div>
      <div></div>
      <h1>Gym Dashboard</h1>
      <p>Rol: {userLogged.role}</p>
      <button onClick={logout}>Logout</button>
      <UserList />
      <TrainingPlan />
      <DietList />
    </div>
  );
}
