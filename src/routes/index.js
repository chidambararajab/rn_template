// import React, { useState, useMemo } from "react";
// import { AuthContext } from "./context";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   RootStackScreen,
//   AuthStackScreen,
//   AppStackScreen,
//   UIprototypeStackScreen,
//   LoginStackScreen,
// } from "./navigationStack";

// export const navigationRef = React.createRef();
// export default function Navigation(params) {
//   const [currentStack, setCurrentStack] = useState("");
//   const authContext = useMemo(() => {
//     return {
//       auth: () => {
//         setCurrentStack("auth");
//       },
//       app: () => {
//         setCurrentStack("app");
//       },
//       login: () => {
//         setCurrentStack("login");
//       },
//       uiPrototype: () => {
//         setCurrentStack("uiPrototype");
//       },
//     };
//   });

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer ref={navigationRef}>
//         {currentStack === "" ? (
//           <RootStackScreen />
//         ) : currentStack === "auth" ? (
//           <AuthStackScreen />
//         ) : currentStack === "login" ? (
//           <LoginStackScreen />
//         ) : currentStack === "app" ? (
//           <AppStackScreen />
//         ) : (
//           <UIprototypeStackScreen />
//         )}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }
