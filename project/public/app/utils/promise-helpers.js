export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText)

export const log = (param) => {
    console.log(param)
    return param
}

export const logError = (param) => {
    console.error(param)
    return param
}
export const timeoutPromise = (milliseconds, promise) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => {
            reject(`Limite da promise excedido (Limite: ${milliseconds}ms)`)
        }, milliseconds));

    return Promise.race(
        [
            timeout, 
            promise
        ]
    );
}

export const delay = milliseconds => data => 
    new Promise((resolve, reject) => setTimeout(() => {
        resolve(data)
    }, milliseconds))


export const retry = (retries, milliseconds, fn) => 
    fn().catch((err) => {
        log(retries)
        return delay(milliseconds)()
        .then(retries > 1
            ? retry(--retries, milliseconds, fn)
            : Promise.reject(err)
        )
    })