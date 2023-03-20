const events = new Map()
// map1.set('a', 1);
// map1.get('a')

export const EventEmitter = {
    on(event, listener) {
        if(!events.has(event)) events.set(event, [])
        events.get(event).push(listener)
    },
    emit(event, data) {
        const listeners = events.get(event)
        if(listeners)
            listeners.forEach(listener => {
                listener(data)
            });
    }
} 
