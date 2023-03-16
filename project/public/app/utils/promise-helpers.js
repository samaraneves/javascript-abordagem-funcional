export const handleStatus = res => res.ok ? res.json() : Promise.reject(res.statusText)

export const log = param => {
    console.log(param)
    return param
}

export const logError = param => {
    console.error(param)
    return param
}