export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login() user: ", username, "\nlogin() password: ", password);
      console.log(username === "test" && password === "test");
      if (username === "test" && password === "test") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
