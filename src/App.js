import { Fragment } from "react";
import "./App.css";
import LogInBtn from "./components/LogInBtn";
import LogOutBtn from "./components/LogOutBtn";

function App() {
  return (
    <Fragment>
      <LogInBtn />
      <LogOutBtn />
    </Fragment>
  );
}

export default App;
