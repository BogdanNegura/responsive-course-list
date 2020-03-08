import React from "react";
import { Router } from "@reach/router";

import { Header } from "../header";
import "../../index.css";
import { Home } from "../home";
import { SignIn } from "../sign-in";
import { LogIn } from "../log-in";
import { Hero } from "../hero/hero.component";
import { Footer } from "../footer";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <SignIn path="/sign-in" />
        <LogIn path="/log-in" />
      </Router>
      <Footer />
    </div>
  );
};

export { App };
