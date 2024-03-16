function readLocal<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function writeLocal<T = any>(key: string, value: T): T {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export { readLocal, writeLocal };
