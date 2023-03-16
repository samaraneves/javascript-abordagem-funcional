import "./utils/array-helpers.js";
import { log, logError } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil } from "./utils/operators.js";

const operation = takeUntil(3, () => 
service
    .sumItems('1')
    .then(log)
    .catch(logError)
)

document
  .querySelector("#myButton")
  .onclick = () => operation()

