import MyDropzone from "./MyDropzone";
import { useUserContext } from "../containers/UserProvider/context";

//
const LoginPlain = () => {
  const userState = useUserContext();
  const { logged } = userState;

  return <div>{logged && <MyDropzone />}</div>;
};

export default LoginPlain;
