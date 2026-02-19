import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ margin: "auto" }}>
      <FontAwesomeIcon size="6x" icon={faDumbbell} />
      <h1>Gym Manager Pro </h1>
      <h2>Inicia Sesion</h2>
      <button onClick={handleLogin}>
        Iniciar Sesion con Google <FontAwesomeIcon icon={faGoogle} />
      </button>
    </div>
  );
}
export default Login;
