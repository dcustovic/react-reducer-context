import React from "react";

function DarkModeButton({ toggleTheme }: any) {
  return (
    <button type="button" onClick={toggleTheme}>
      Switch theme
    </button>
  );
}

export default DarkModeButton;
