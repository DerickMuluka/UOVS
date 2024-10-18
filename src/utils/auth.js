export function isAuthenticated() {
  if (typeof window !== "undefined") {
    return localStorage.getItem('token') !== null;
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem('token');
  }
}
