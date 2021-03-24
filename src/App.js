import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Fragment>
        <NavBar />
        <main className="main-content">
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
