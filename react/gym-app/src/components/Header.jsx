import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <h1>
      <FontAwesomeIcon icon={faDumbbell} /> Gym Manager Pro{" "}
      <FontAwesomeIcon icon={faDumbbell} />
    </h1>
  );
}

export default Header;
