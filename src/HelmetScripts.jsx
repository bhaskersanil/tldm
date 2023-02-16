import React from "react";
import { Helmet } from "react-helmet";
import Html from "./scripts/Html";
import "./scripts/letters.js";

export default function HelmetScripts() {
  return (
    <React.Fragment>
      <Helmet>
        <script src="scripts/letters.js" type="text/javascript" />
      </Helmet>
      <Html />
    </React.Fragment>
  );
}
