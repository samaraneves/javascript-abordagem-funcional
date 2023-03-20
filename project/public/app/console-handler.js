import { EventEmitter } from "./utils/event-emitter.js";
import { log } from "./utils/promise-helpers.js";

EventEmitter.on('itensTotalizados', log)