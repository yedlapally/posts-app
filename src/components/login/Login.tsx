import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ILogin } from "../../model/ILogin";
import { isValidLogin } from "../../api/login";
import { NotificationComponent } from "../../common/notification";
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./login.scss";
interface Props extends RouteComponentProps { }
const initLoginInfo = { login: "", password: "" };

export const LoginPage = (props: Props) => {
  const [loginInfo, setLoginInfo] = useState<ILogin>(initLoginInfo);
  const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false);
  window.sessionStorage.clear();
  const onLogin = () => {
    const validateLoginfo = isValidLogin(loginInfo);
    if (validateLoginfo.isValid) {
      window.sessionStorage.setItem("username", JSON.stringify(loginInfo.login));
      window.sessionStorage.setItem("isAuthenticate", JSON.stringify(true));
      props.history.push("/posts");
    } else {
      setShowLoginFailedMsg(true);

    }
  };

  const onUpdateLoginField = (name, value) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  const onTexFieldChange = fieldId => e => {
    onUpdateLoginField(fieldId, e.target.value);
  };
  return (
    <div className="login-page">
      <Card>
        <CardHeader>Login</CardHeader>
        <CardBody>
          <Form className="login-form">
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input type="email" name="username" id="username" placeholder="Username"
                value={loginInfo.login}
                onChange={onTexFieldChange("login")} />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password"
                value={loginInfo.password}
                onChange={onTexFieldChange("password")}
              />
            </FormGroup>
            <Button variant="contained" className="submit_btn" color="primary" onClick={onLogin}>Submit</Button>
          </Form>
        </CardBody>
        <NotificationComponent
          message={isValidLogin(loginInfo).message}
          show={showLoginFailedMsg}
          onClose={() => setShowLoginFailedMsg(false)}
        />
      </Card>

    </div>
  );
};


