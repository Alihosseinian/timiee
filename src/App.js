/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import LoginForm from "./components/login-form/index";
import SignupForm from "./components/signup-form/index";

import "./App.css";

function App() {
  // const [page, setPage] = useState(true);

  return (
    <div className="page">
      <div className="container">
        <div className="image-box" />
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
}
export default App;
