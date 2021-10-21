import { useState, useCallback } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export interface UserLayoutProperties {
  isOpen: boolean;
  handleSidebar: (isOpen: boolean) => void;
}

const UserLayout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Header handleSidebar={handleSidebar} isOpen={isOpen} />
      <Sidebar handleSidebar={handleSidebar} isOpen={isOpen} />
      {children}
    </>
  );
};

export default UserLayout;
