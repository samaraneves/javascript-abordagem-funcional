import "./utils/array-helpers.js";
import { log, logError } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime, pipe, partialize } from "./utils/operators.js";

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500),
)

const actions = operations(() => 
service
    .sumItems('1')
    .then(log)
    .catch(logError)
)

document
  .querySelector("#myButton")
  .onclick = actions

