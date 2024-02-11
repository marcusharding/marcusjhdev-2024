// event-bus.js
import mitt from 'mitt';
let emitter = mitt();

export default {
    $on: (...args) => emitter.on(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
}
