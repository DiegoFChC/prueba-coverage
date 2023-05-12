import { useState } from "react";
import "./suma.css";

const Suma = ({ title, important, funct }) => {
  const [suma, setSuma] = useState(0);
  const label = important ? "is important" : "is not important";
  return (
    <div className="Card">
      <h4>{title}</h4>
      <h5>{important == true ? "Hi" : "Bye"}</h5>
      <div className="salida">{suma}</div>
      <button
        onClick={() => {
          setSuma(suma + 1);
        }}
      >
        Sumar 1
      </button>
      <button onClick={funct}>{label}</button>
    </div>
  );
};

export default Suma;
