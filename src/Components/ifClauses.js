import React from "react";
function UserGreeting(props) {
  return <div>Hoşgeldiniz !</div>;
}
function GuestGreeting(props) {
  return <div>Lütfen Giriş Yapınız!</div>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <UserGreeting />;
  else return <GuestGreeting />;
}
const LoginButton = (props) => {
  return <button onClick={props.onClick}>Giriş Yap</button>;
};
function LogoutButton(props) {
  return <button onClick={props.onClick}>Çıkış Yap</button>;
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        ) : (
          <LoginButton onClick={this.handleLoginClick}></LoginButton>
        )}
      </div>
    );
  }
}

export default LoginControl;
