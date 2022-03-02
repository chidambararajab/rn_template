import React, { useContext } from "react";

import { AuthContext } from "@routes/context";
import Loader from "@components/Essentials/Loader";

export default function Root() {
  const { app, auth, login } = useContext(AuthContext);

  const storeDataToLocalFunction = async (data) => {};
  const beforeJumpToApp = (oldData) => {};
  const checkAuthentication = async (props) => {};

  return <Loader />;
}
