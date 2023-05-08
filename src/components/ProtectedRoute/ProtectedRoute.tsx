import { Loader } from "../../components/Loader/Loader";
import { FC, ReactNode } from "react";

type ProtectedRoutesProps = {
  loggedIn: boolean;
  children: ReactNode;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children, ...props }) => {
  return props.loggedIn ? <>{children}</> : <Loader />;
};

export default ProtectedRoutes;
