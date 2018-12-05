import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../logo.png';


class ComponentPageHome extends Component {

  landing(){
    return (
      <header className="masthead bg-info text-black text-center">
        <div className="container">
          <div className="wrap">
              <img src={logo}  className="img-fluid" alt="Responsive image" />
          </div>
          <h1 className="text-uppercase mb-0">UNrisk</h1>
          <h2 className="font-weight-light mb-0"> Indicadores de riesgo para la ciudad de Bogotá</h2>
        </div>
      </header>


    );
  }

  render() {
    if(!this.props.isAuthenticated)
      return this.landing();
    else
      return <Redirect to='/denounce' />
  }
}

const PageHome = connect(
  state => ({
    isAuthenticated: state.authReducers.isAuthenticated,
  })
)(ComponentPageHome)


export default PageHome;
