import "./utils/array-helpers.js";
import { log, logError } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";

document.querySelector("#myButton").onclick = () =>
  service
    .sumItems('1')
    .then(log)
    .catch(logError);
