import { navigationRef } from "../routes/index";
export const navigateTo = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};
export const navigateFromDrawer = (routeName, params) => {
  navigationRef.current?.navigate(routeName, params);
};
export const navigateBack = () => {
  navigationRef.current.goBack();
};
