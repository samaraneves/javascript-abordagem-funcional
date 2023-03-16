import "./utils/array-helpers.js";
import { log, logError } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime } from "./utils/operators.js";

const action = debounceTime(500, takeUntil(3, () => 
service
    .sumItems('1')
    .then(log)
    .catch(logError)
))

document
  .querySelector("#myButton")
  .onclick = action

