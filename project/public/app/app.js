import "./utils/array-helpers.js";
import { delay, log, logError, retry, timeoutPromise } from "./utils/promise-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime, pipe, partialize } from "./utils/operators.js";

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounceTime, 500),
)

const actions = operations(() => 
    retry(3, 3000, () => timeoutPromise(200, 
      service.sumItems('2143')
    ))
    .then(log)
    .catch(logError)
)

document
  .querySelector("#myButton")
  .onclick = actions

