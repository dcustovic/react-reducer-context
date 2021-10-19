export const myUser = JSON.parse(localStorage.getItem("myUser") || "{}");
export const loggedIn = myUser.loggedIn;
