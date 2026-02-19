import TrainingPlan from "./TrainingPlan";

function UserCard({ user, setUser }) {
  const handleDelete = () => {
    setUser((prev) => prev.filter((u) => u.id !== user.id));
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <TrainingPlan plan={user.plan} />
      <small>Registrado: {new Date(user.createdAt).toLocaleDateString()}</small>

      <br />
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default UserCard;
