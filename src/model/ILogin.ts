export interface ILogin {
  login: string;
  password: string;
}

export const createEmptyLogin = (): ILogin => ({
  login: "",
  password: ""
});

export interface IErrorInfo {
  message: string,
  isValid: boolean
}