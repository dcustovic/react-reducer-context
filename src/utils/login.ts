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

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
