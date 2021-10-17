import { MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";


import { useDispatchContext } from "../containers/UserProvider/context";
import { ActionType } from "../types/types";

//
function SignOutButton() {
  const dispatch = useDispatchContext();
  return (
    <div>
      <MenuItem dense onClick={() => dispatch({ type: ActionType.LOGOUT })}>
        <LogoutIcon style={{ marginRight: ".7rem" }} /> Log out
      </MenuItem>
    </div>
  );
}

export default SignOutButton;
