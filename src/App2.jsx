import React from "react";
import Select from "react-select";

const styles = {
  app: {
    backgroundColor: "lightgray",
    display: "grid",
    gridTemplateColums: "1fr",
    justifyItems: "center",
    alignItems: "center",
    height: "100vh",
    color: "black",
    fontSize: 25,
    fontFamily: "Arial",
  },
  select: {
    width: "100%",
    maxWidth: 600,
  },
};
const options = [
  { label: "React", value: "react" },
  { label: "javascript", value: "js" },
  { label: "css", value: "css" },
  { label: "Flutter", value: "flutter" },
];

const App = () => {
  return (
    <div style={styles.app}>
      <h1>React-Select Package Tutorial</h1>
      <div style={styles.select}>
        <h1 style={{ fontSize: 35, marginBottom: 2, fontWeight: "bold" }}>
          Choose A Library
        </h1>
        <Select
          options={options}
          defaultValue={[options[2], options[3]]}
          isMulti
        />
      </div>
    </div>
  );
};

export default App;
