import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, Link } from "react-router-dom";
import linux from '../icon.png'
import { ActionsType } from "../reducers";
import { push } from 'react-router-redux'



class Logo extends Component {
  render() {
    return (
      <NavLink className="navbar-brand js-scroll-trigger " to="/">UNRISK</NavLink>
    );
  }
}

function NavBarLink(props) {
  if (props.render) {
    return (<Link onClick={() => props.onClick ? props.onClick() : null} className={props.className} to={props.to}>{props.value}</Link>)
  }
  return '';
}

class LinksCollapse extends Component {

  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      renderLogin: !props.isAuthenticated,
      renderMap: true,
      renderDenounce: props.isAuthenticated,
      renderLivingcost: true,
      renderViolence:  true,
      renderEntites:  true,
      renderLogout: props.isAuthenticated,

    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    return {
      renderLogin: !nextProps.isAuthenticated,
      renderLogout: nextProps.isAuthenticated,
    }
  }

  render() {
    console.log(`LinksCollapse.render: ${JSON.stringify(this.state)}`)
    return (
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto md-10">



          <li className="nav-item mx-0 md-2">
            <NavBarLink render={this.state.renderMap} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" value="mapa de riesgos" to="/map" />
          </li>
          <li className="nav-item mx-0 md-2">
            <NavBarLink render={this.state.renderDenounce} className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" value="denunciar" to="/denounce" />
          </li>
          <li className="nav-item mx-0 md-2">
            <NavBarLink render={this.state.renderViolence} className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" value="violencia" to="/violence" />
          </li>
          <li className="nav-item mx-0 md-2">
            <NavBarLink render={this.state.renderLivingcost} className="nav-link py-3 px-0 px-lg-2 rounded js-scroll-trigger" value="costo de vida" to="/livingcost" />
          </li>

          <li className="nav-item mx-0 md-1">
            <NavBarLink render={this.state.renderEntites}  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" value="entidades" to="/entities" />
          </li>

          <li className="nav-item mx-0 md-1">
            <NavBarLink render={this.state.renderLogin} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" value="Login" to="/login" />
          </li>

          <li className="nav-item mx-0 md-1">
            <NavBarLink render={this.state.renderLogout} onClick={this.props.onLogout} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/" value="Logout" />
          </li>
        </ul>
      </div>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
        type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

      <i className="fa fa-bars"></i>
      </button>
    );
  }
}

class ComponentNavBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: props.isAuthenticated,
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <NavLink className="navbar-brand js-scroll-trigger" to="/">  <img  src={linux} width="40" height="40" /></NavLink>
           <Logo />
          <Menu />
          <LinksCollapse isAuthenticated={this.props.isAuthenticated} onLogout={this.props.logout}/>
        </div>
      </nav>
    );
  }
}


const NavBar = connect(
  state => ({
    isAuthenticated: state.authReducers.isAuthenticated
  }),
  dispatch => ({
    logout: () => {
      console.log("logout")
      dispatch({
        type: ActionsType.LOGOUT
      })
      dispatch(push('/login'))
    }
  })
)(ComponentNavBar)

export default NavBar;
