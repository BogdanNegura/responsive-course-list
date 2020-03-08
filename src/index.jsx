import React from "react";
import { render } from "react-dom";
import { App } from "./component/app";

const appWillRenderHere = document.querySelector("#react-will-render-here");

render(<App />, appWillRenderHere);
