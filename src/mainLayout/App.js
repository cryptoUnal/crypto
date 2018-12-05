import React, { Component } from 'react';
import { Route,  Redirect } from "react-router-dom"
import Nav from './NavBar';
import Footer from './Footer';
import PageLogin from '../pages/PageLogin';
import PageHome from '../pages/PageHome';
import PageGraph from '../pages/PageGraph';
import PageDenounce   from '../pages/PageDenounce';
import PageLivingcost from '../pages/PageLivingcost';
import PageViolence from '../pages/PageViolence';
import PageEntities from '../pages/PageEntities';



class App extends Component {
    render() {
        return (
            <div id="page-top" className="App">
                <Nav />
                <Route path="/" exact component={PageHome} />
                <Route path="/map" component={PageGraph} />
                <Route path="/denounce" component={PageDenounce} />
                <Route path="/violence" component={PageViolence} />
                <Route path="/livingcost" component={PageLivingcost} />
                <Route path="/entities" component={PageEntities} />
                 <Route path="/login" component={PageLogin} />
                <Footer />
            </div>
        );
    }
}

export default App;
