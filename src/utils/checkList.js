export function checkList() {
  try {
    return window.localStorage.getItem("userInfo")
      ? JSON.parse(window.localStorage.getItem("userInfo"))
      : null;
  } catch {
    return null;
  }
}