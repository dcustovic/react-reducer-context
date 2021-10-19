export async function login(
  username: string | number,
  password: string | number
) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "test") {
        let localUser = {
          user: username,
          pass: password,
        };
        localStorage.setItem("localUser", JSON.stringify(localUser));
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
