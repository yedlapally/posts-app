import { ILogin, IErrorInfo } from '../model/ILogin';
import Constants from '../config/Constants'

export const isValidLogin = (loginInfo: ILogin): IErrorInfo => {
  if (loginInfo.login.length < 5) {
    return { isValid: false, message: Constants.USERNAME_ERROR_MSG }
  }
  if (loginInfo.password.length < 8) {
    return { isValid: false, message: Constants.PASSWORD_ERROR_MSG }
  }
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g.test(loginInfo.password)) {
    return { isValid: false, message: Constants.PASSWORD_REG_EXP_ERROR_MSG }
  }
  if (loginInfo.login === Constants.USER_NAME && loginInfo.password === Constants.PASSWORD) {
    return { isValid: true, message: "Login Success" }
  }
  return { isValid: false, message: "Invalid Username and Password" }
}
