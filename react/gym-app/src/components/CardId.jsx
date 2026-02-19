import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function CardId({ userName = "SinNombre", saldo = "0,00", dietas = [] }) {
  console.log(userName);

  return (
    <div className="card-id">
      <div className="card-header">
        <FontAwesomeIcon size="2x" icon={faAddressCard} />
        <div>{userName}</div>
      </div>
      <div className="card-content">
        <div className="saldo">
          <strong>{saldo} Bs</strong>{" "}
        </div>
        <div>
          <ul>
            {dietas?.map((e) => (
              <li>{e.name}</li>
            ))}
            {/* <li>asd</li>
            <li>sss</li> */}
          </ul>
        </div>

        {/* <div>Tarjeta ID</div> */}
      </div>
    </div>
  );
}

export default CardId;
