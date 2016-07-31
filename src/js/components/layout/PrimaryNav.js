import React from "react";
import { IndexLink, Link } from "react-router";

import UpcomingEvent from "../UpcomingEvent";

export default class PrimaryNav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav class="primaryNav" role="navigation">
          <div class="leftSide">
              <UpcomingEvent />
          </div>

          <div class="centerSide">
              <div class="logo">jboard project</div>
          </div>

          <div class="rightSide">
              right side stuff
          </div>
      </nav>
    );
  }
}
