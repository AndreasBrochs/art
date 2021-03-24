import { Fragment } from "react";
import "./App.css";
import LogInBtn from "./components/LogInBtn";
import LogOutBtn from "./components/LogOutBtn";
import Profile from "./components/Profile";

function App() {
  return (
    <Fragment>
      <LogInBtn />
      <LogOutBtn />
      <Profile/>
    </Fragment>
  );
}

export default App;
