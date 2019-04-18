import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "../Dashboard.scss";
import AddProducts from "../AddProducts";
import Spinner from "../../commonFeilds/Spinner";
import DashboardContent from "./DashboardContent/DashboardContent";
import "./AdminDashboard.scss";

// import ACTIONS
import { getCurrentProfile } from "../../../actions/profileAction";

class AdminDashboard extends Component {
  state = {
    isDashboardClicked: true,
    isProductClicked: false,
    isUserClicked: false,
    isSettingClicked: false,
    isPaymentsClicked: false
  };

  componentDidMount() {
    this.props.getCurrentProfile(); // fired the getCurrentUser action
  }

  renderProducts = () => {
    this.setState({
      isProductClicked: true,
      isUserClicked: false,
      isSettingClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false
    });
  };

  renderUsers = () => {
    this.setState({
      isUserClicked: true,
      isProductClicked: false,
      isSettingClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false
    });
  };
  renderPayments = () => {
    this.setState({
      isPaymentsClicked: true,
      isUserClicked: false,
      isProductClicked: false,
      isSettingClicked: false,
      isDashboardClicked: false
    });
  };
  renderSettings = () => {
    this.setState({
      isSettingClicked: true,
      isUserClicked: false,
      isProductClicked: false,
      isPaymentsClicked: false,
      isDashboardClicked: false
    });
  };
  renderDashboard = () => {
    this.setState({
      isDashboardClicked: true,
      isSettingClicked: false,
      isUserClicked: false,
      isProductClicked: false,
      isPaymentsClicked: false
    });
  };

  render() {
    let dashboardContents;
    let adminDashBoardContents;

    const { user, isAdmin } = this.props.auth;
    const { profile, loading } = this.props.profile;

    if (profile === null || loading) {
      dashboardContents = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        //TODO: DISPLAY THE PROFILE
        dashboardContents = (
          <div>
            <p className="lead text-muted">
              {" "}
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}> {user.name} </Link>
            </p>
          </div>
        );
      } else {
        dashboardContents = (
          <div>
            <p className=" text-muted">
              Wecome <h3 className="text-muted">{user.name}</h3>
            </p>
            <p className="lead">Seems like you are enjoing are service!</p>
          </div>
        );
      }

      if (isAdmin) {
        adminDashBoardContents = <h1>You must be The Great Tawhid Abdullah</h1>;
      }
    }

    return (
      <div>
        <div id="nav" className="side-nav sidenav">
          <div class="sidenav__profile">
            <div class="sidenav__profile-avatar" />
            <div class="sidenav__profile-title text-light">Tawhid</div>
          </div>
          <ul>
            <div class="search">
              <input type="text" placeholder="Type here" />
              <i class="fa fa-search" />
            </div>
            <li
              className={this.state.isDashboardClicked ? "active" : "deactive"}
              onClick={this.renderDashboard}
            >
              <Link to="/dashboard">
                <i className="fa fa-fw fa-dashboard" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={this.state.isProductClicked ? "active" : "deactive"}
              onClick={this.renderProducts}
            >
              <a href="#">
                <i className="fa fa-fw fa-pencil" />
                <span className="swatch light-grey">Products</span>
              </a>
            </li>
            <li
              className={this.state.isUserClicked ? "active" : "deactive"}
              onClick={this.renderUsers}
            >
              <a href="#">
                <i className="fa fa-fw fa-user" />
                <span>Users</span>
              </a>
            </li>
            <li
              className={this.state.isPaymentsClicked ? "active" : "deactive"}
              onClick={this.renderPayments}
            >
              <a href="#">
                <i className="fa fa-fw fa-money" />
                <span>Payments</span>
              </a>
            </li>
            <li
              className={this.state.isSettingClicked ? "active" : "deactive"}
              onClick={this.renderSettings}
            >
              <a href="#">
                <i className="fa fa-fw fa-cog" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="main">
          <header>
            <ol className="breadcrumb">
              <li>
                {" "}
                <a href="#">haus</a>
              </li>
              <li className="active">dashboard</li>
            </ol>
          </header>
          <div id="content">
            <div className="box">
              {this.state.isProductClicked ? <AddProducts /> : ""}
              {this.state.isDashboardClicked ? <DashboardContent /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

export default connect(
  mapStateToProp,
  { getCurrentProfile }
)(withRouter(AdminDashboard));

// <div class="menu">

// <div id="panel">
//   <label class="text" for="toggle">Admin Settings</label>
//   <label class="icon fa fa-cog" for="toggle"></label>
// </div>

// <input type="checkbox" id="toggle" />

// <div class="dropdown">
//   <div class="arrow"></div>

//   <a href="#" class="row">
//     <div class="text">Edit User</div>
//     <i class="icon fa fa-user"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Statistics</div>
//     <i class="icon fa fa-home"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Upload Settings</div>
//     <i class="icon fa fa-upload"></i>
//   </a>
//   <a href="#" class="row">
//     <div class="text">Edit Sliders</div>
//     <i class="icon fa fa-pencil"></i>
//   </a>
// </div>

// </div>
