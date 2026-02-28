const styleInput = {
  width: "100%",
  height: "35px",
  color: "var(--text)",
  background: "var(--bg-b)",
  borderRadius: "5px",
  boxSizing: "border-box",
};

const styleForm = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  border: "1px solid",
  borderRadius: "15px",
  justifySelf: "center",
  marginTop: "25px",
  marginBottom: "25px",
};

const styleRow = {
  display: "grid",
  height: "100%",
  gridTemplateColumns: "1fr 1fr",
  gridAutoFlow: "column",
  alignItems: "center",
  gap: "14px",
};

const styleFill = {
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  alignItems: "start",
  paddingTop: "10px",
};

const styleButton = { marginTop: "25px", marginBottom: "10px", width: "100%" };

export { styleFill, styleForm, styleInput, styleRow, styleButton };
