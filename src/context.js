import { createContext } from "react";

export const UserContext = createContext();
export const DispatchContext = createContext();

export const initState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  logged: true,
  message: "",
};

// export const UserProvider = (props) => {
//   const [user, setUser] = useState({
//     name: "Marko",
//     password: "password",
//     age: 30,
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };
