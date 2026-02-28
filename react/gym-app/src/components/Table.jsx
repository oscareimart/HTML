const stylesCell = {
  border: "1px solid var(--bg-a)",
  //   padding: "8px",
};

const stylesCellHeader = {
  border: "1px solid var(--bg-a)",
  padding: "8px",
  backgroundColor: "var(--text)",
  color: "var(--bg)",
};

const stylesTable = {
  width: "100%",
  // border: "1px solid var(--bg-a)",
  borderRadius: "8px",
};

export const Table = ({ headers = [], data = [], actions }) => {
  console.log(headers);
  console.log(data);

  return (
    <table style={stylesTable}>
      <thead>
        <tr>
          {headers.map((e) => (
            <th key={e.field} style={stylesCellHeader}>
              {e.displayName}
            </th>
          ))}

          {actions && <th style={stylesCellHeader}>Opciones</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((h) => (
              <td key={h.field} style={stylesCell}>
                {row[h.field]}
              </td>
            ))}

            {actions && <td style={stylesCell}>{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
