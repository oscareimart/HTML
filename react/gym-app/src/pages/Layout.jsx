import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks/useTheme";
import {
  faRightFromBracket,
  faBars,
  faDumbbell,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const stylesSidebar = {
  display: "flex",
  flexDirection: "column",
  width: "250px",
  height: "100vh",
  backgroundColor: "var(--bg)", //"#0A0A0A",
  padding: "20px",
  // color: "#333",
  paddingRight: "0px",
  paddingTop: "10px",
  paddingLeft: "0px",
  paddingBottom: "20px",
  margin: "20px",
  borderRadius: "8px",
  border: "1px solid #333",
};

const stylesMain = {
  flex: 1,
  // display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: "20px",
  width: "100%",
  borderLeft: "1px solid #525252",
  borderRight: "1px solid #525252",
  // backgroundColor: "#fff",
  // color: "#333",
};

const stylesTopBar = {
  flex: 1,
  display: "flex",
  height: "90px",
  // height: "150px",
  // width: "100%",
  backgroundColor: "var(--bg)", // "#0A0A0A",
  marginBottom: "20px",
  // color: "#fff",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "8px",
  border: "1px solid #333",
};

const stylesCard = {
  width: "350px",
  height: "250px",
  backgroundColor: "var(--bg-c)",
  border: "1px solid #333",
  // borderColor: "AccentColorText",
  borderStyle: "1px solid",
  borderRadius: "15px",
  // margin: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const menu = [
  { name: "Dashboard", path: "dashboard", canLoad: ["admin", "trainer"] },
  { name: "Usuarios", path: "users", canLoad: ["admin"] },
  { name: "Dietas", path: "diets", canLoad: ["admin", "trainer", "member"] },
  { name: "Sistema", path: "system", canLoad: ["admin"] },
];

export default function Layout({ children }) {
  const { userLogged, logout, setUserLogged } = useAuth();
  const { theme, toogleTheme } = useTheme();

  return (
    <>
      <div style={stylesSidebar}>
        <h2>
          Gym App <FontAwesomeIcon size="xl" icon={faDumbbell} />
        </h2>
        <div style={{ borderTop: "1px solid" }}></div>
        <div style={{ paddingTop: "25px" }}>
          {menu.map((item) => {
            if (item.canLoad.includes(userLogged.role)) {
              return (
                <div
                  className={`menu-item ${userLogged.menuSelected === item.name.toLowerCase() ? "active" : ""}`}
                  onClick={() => {
                    console.log(item.name.toLowerCase());

                    setUserLogged({
                      ...userLogged,
                      menuSelected: item.path.toLowerCase(),
                    });
                  }}
                >
                  {item.name}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div style={stylesMain}>
        <div style={stylesTopBar}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              marginLeft: "20px",
            }}
          >
            <button style={{ padding: "10px" }}>
              <FontAwesomeIcon size="xl" icon={faBars} />
            </button>

            <h2>{userLogged?.menuSelected}</h2>
          </div>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <button style={{ padding: "10px" }} onClick={toogleTheme}>
              {theme === "dark" ? (
                <FontAwesomeIcon size="1x" icon={faSun} />
              ) : (
                <FontAwesomeIcon size="1x" icon={faMoon} />
              )}
            </button>

            <button style={{ margin: "20px" }} onClick={logout}>
              Cerrar Sesion <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
