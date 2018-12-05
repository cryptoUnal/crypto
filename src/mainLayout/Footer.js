import React, { Component } from 'react';


class Info extends Component {
    render() {
        return (
            <div className="col-md-4 m-auto">
                <h4 className="text-uppercase mb-4">UNRISK</h4>
                <p className="lead mb-0">Proyecto para el curso Arquitectura de software</p>
                <p>Universidad Nacional de Colombia</p>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <Info />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
