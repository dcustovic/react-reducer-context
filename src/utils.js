export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "test") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
