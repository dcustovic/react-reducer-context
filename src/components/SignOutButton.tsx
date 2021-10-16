import { MenuItem } from "@material-ui/core";

import { useDispatchContext } from "../containers/UserProvider/context";
import { ActionType } from "../types/types";

//
function SignOutButton() {
  const dispatch = useDispatchContext();
  return (
    <div>
      <MenuItem onClick={() => dispatch({ type: ActionType.LOGOUT })}>
        Logout
      </MenuItem>
    </div>
  );
}

export default SignOutButton;
