import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../../commonFeilds/Spinner";
import "../Dashboard.scss";

// import ACTIONS
import { getCurrentProfile } from "../../../actions/profileAction";

class UserDashboard extends Component {
  state = {
    isProductClicked: false,
    isUserClicked: false,
    isSettingClicked: false,
    isPaymentsClicked: false
  };

  componentDidMount() {
    this.props.getCurrentProfile(); // fired the getCurrentUser action
  }

  renderPayments = () => {
    this.setState({
      isPaymentsClicked: true,
      isUserClicked: false,
      isProductClicked: false,
      isSettingClicked: false
    });
  };

  renderSettings = () => {
    this.setState({
      isSettingClicked: true,
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
          <div className="sidenav__profile">
            <img
              className="profile-avatar sidenav__profile-avatar"
              src={user.avatar}
              alt="user's photo"
            />

            <div className="sidenav__profile-title text-light">{user.name}</div>
          </div>
          <ul>
            <div className="search">
              <input type="text" placeholder="Type here" />
              <i className="fa fa-search" />
            </div>
            <li className="head">General</li>
            <li className="active">
              <Link to="/dashboard">
                <i className="fa fa-fw fa-dashboard" />
                <span>Dashboard</span>
              </Link>
            </li>

            <li onClick={this.renderPayments}>
              <a>
                <i className="fa fa-fw fa-money" />
                <span>Payments</span>
              </a>
            </li>
            <li onClick={this.renderSettings}>
              <a>
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
                <a>haus</a>
              </li>
              <li className="active">dashboard</li>
            </ol>
          </header>
          <div id="content">
            <div className="box" />
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
)(withRouter(UserDashboard));

// <div class="menu">

// <div id="panel">
//   <label class="text" for="toggle">Admin Settings</label>
//   <label class="icon fa fa-cog" for="toggle"></label>
// </div>

// <input type="checkbox" id="toggle" />

// <div class="dropdown">
//   <div class="arrow"></div>

//   <a class="row">
//     <div class="text">Edit User</div>
//     <i class="icon fa fa-user"></i>
//   </a>
//   <a class="row">
//     <div class="text">Statistics</div>
//     <i class="icon fa fa-home"></i>
//   </a>
//   <a class="row">
//     <div class="text">Upload Settings</div>
//     <i class="icon fa fa-upload"></i>
//   </a>
//   <a class="row">
//     <div class="text">Edit Sliders</div>
//     <i class="icon fa fa-pencil"></i>
//   </a>
// </div>

// </div>
