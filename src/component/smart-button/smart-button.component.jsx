import React from "react";
import { Link } from "@reach/router";

const SmartButton = ({ type = "link", children }) => {
  return (
    <div>
      {type === "button" && <button>{children}</button>}
      {type === "link" && <Link to="button">{children}</Link>}
    </div>
  );
};

export { SmartButton };
