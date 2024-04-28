import ls from "localstorage-slim";

const set = (k: string, v: string) => {
  if (!k || !v) return;
  return ls.set(k, v, { encrypt: true });
};

const get = (k: string) => {
  if (!k) return;
  return ls.get(k, { decrypt: true });
};

const removeItem = (k: string) => {
  if (!k) return;
  return ls.remove(k);
};

export { set, get, removeItem };