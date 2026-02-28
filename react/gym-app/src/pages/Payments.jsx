import { PaymentList } from "../components/PaymentsList";
import RegisterFormPayment from "../components/RegisterFormPayment";

export const Payments = ({
  payments = [],
  setPayments,
  users = [],
  setUsers,
}) => {
  return (
    <div className="card">
      <RegisterFormPayment
        payments={payments}
        setPayments={setPayments}
        users={users}
        setUsers={setUsers}
      />
      <PaymentList payments={payments} setPayments={setPayments} />
      {/* <RegisterFormDiet diets={diets} setDiets={setDiets} /> */}
      {/* <DietList diets={diets} /> */}
    </div>
  );
};
