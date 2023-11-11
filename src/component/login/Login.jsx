import "./login.css"

export default function Login() {
  return (
   
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Nodes Connects</h3>
          <span className="loginDesc">Connect with friends and the world around you on Nodes connect..</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username"  className="loginInput" />
            <input placeholder="Email"  className="loginInput" />
            <input placeholder="password"  className="loginInput" />
            <input placeholder="re-enter password"  className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forget Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
