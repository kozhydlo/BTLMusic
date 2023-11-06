export function getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name))
}

export function setLocalStorage(name, value) {
    return localStorage.setItem(name, JSON.stringify(value)) 
}
