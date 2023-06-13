export function setLocalStorage(name, val) {
  return localStorage.setItem(name, val);
}

export function getLocalStorage(name) {
  const val = localStorage.getItem(name);
  return val;
}

export function deleteLocalStorage(name) {
  return localStorage.removeItem(name);
}
