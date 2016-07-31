import React from "react";
import { Link } from "react-router";

import '../../css/style.scss';
import Footer from "../components/layout/Footer";
import PrimaryNav from "../components/layout/PrimaryNav";

export default class Layout extends React.Component {
  render() {

    return (
        <div>
            <PrimaryNav />

            <div class="container">
                <div class="row">
                    {this.props.children}
                </div>
            </div>

        </div>

    );
  }
}
