import "./App.css";
import appleLogo from "./assets/apple_icon.svg";
import gmailLogo from "./assets/google_icon.svg";
import facebookLogo from "./assets/facebook_icon.svg";
import eye_slashLogo from "./assets/eye-slash.svg";

function App() {
  return (
    <div class="container">
      <div class="image-box"></div>
      <div class="login-form">
        <div class="question">
          <p>
            Not a member?
            <span> </span>
            <span> </span>
            <a class="register" href="#">
              Resgister now
            </a>
          </p>
        </div>
        <div class="form">
          <div class="title">
            <h2>Hello Again!</h2>
            <p>wellcome back you've been missed!</p>
          </div>
          <form class="input-box">
            <input type="text" placeholder="Enter username" required></input>
            <div class="password-container">
              <input
                type="password"
                placeholder="Password"
                class="password"
                required
              ></input>
              <img src={eye_slashLogo} alt="eye_slashLogo" class="eye_slash" />
            </div>
            <div class="recovery-password">
              <a href="#">Recovery Password</a>
            </div>
            <input type="submit" class="submit" value="Sign In"></input>
          </form>
          <div class="footer">
            <p class="line">Or continue with</p>
            <div class="icon">
              <div class="gmail">
                <img src={gmailLogo} alt="gmailLogo" />
              </div>
              <div class="apple-id">
                <img src={appleLogo} alt="appleLogo" />
              </div>
              <div class="facebook">
                <img src={facebookLogo} alt="facebookLogo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
