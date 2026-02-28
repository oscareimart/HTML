import RegisterFormDiet from "../components/RegisterFormDiet";
import DietList from "../components/DietList";

export const Diets = ({ diets = [], setDiets, users = [] }) => {
  return (
    <div className="card">
      <RegisterFormDiet diets={diets} setDiets={setDiets} users={users} />
      <DietList diets={diets} setDiets={setDiets} />
    </div>
  );
};
