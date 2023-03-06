import "./utils/array-helpers.js";
import { handleStatus, log } from "./utils/promise-helpers.js";

document.querySelector("#myButton").onclick = () =>
  fetch("http://localhost:3000/notas")
    .then(handleStatus)
    .then((notas) => notas.$flatMap((nota) => nota?.itens))
    .then((itensNota) => itensNota.filter((item) => item?.codigo == "2143"))
    .then((itensFiltered) =>
      itensFiltered.reduce((total, item) => total + item?.valor, 0)
    )
    .then(log)
    .catch(log);
