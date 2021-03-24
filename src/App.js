import { Fragment } from "react";
import "./App.css";
import LogInBtn from "./components/LogInBtn";
import LogOutBtn from "./components/LogOutBtn";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Fragment>
      <LogInBtn />
      <LogOutBtn />
      <Profile />
    </Fragment>
  );
}

export default App;
