import React from "react";
import Header from "./Header";

const UserLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default UserLayout;
