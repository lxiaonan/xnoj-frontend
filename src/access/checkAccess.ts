import ACCESS_ENUM from "./accessEnum";
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  if (loginUser.access === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  if (
    needAccess === ACCESS_ENUM.ADMIN &&
    loginUserAccess !== ACCESS_ENUM.ADMIN
  ) {
    return false;
  }
  return true;
};
export default checkAccess;
