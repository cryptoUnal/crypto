import React, { Component } from 'react';
import Crime from '../components/Crimes';
import Cri from '../components/CreateCrime';
import ApolloClient from "apollo-boost";
import { ApolloProvider} from "react-apollo";


const client = new ApolloClient({
  uri: 'http://35.240.15.185/graphql'
});



class Denounce extends Component {

      constructor(props) {
        super(props);
        this.state = { value: 'show'};
      }
      onChange(e) {
        this.setState({ value: e.target.value });
        const value = this.state.value;
        console.log(this.state.value)

      }

      render() {

      return (
        <div className="App">
                <header className="masthead bg-info text-black text-center"  style={{ "paddingTop": "calc(4rem + 60px)" }}>
                    <ApolloProvider client={client}>

                      <div className="container mb-5 mt-4" >
                          <nav className="navbar navbar-white " >
                            <h2 className="text-center text-uppercase text-secondary mb-0 m-auto">Denuncia por hurto</h2>
                          </nav>
                    </div>

                    <div className="container mb-4">
                      <div className=" btn-group-vertical">
                        <button onClick={ this.onChange.bind(this) } type="button" className="btn btn-primary btn-sm" value="show">Denunciar</button>
                        <button onClick={ this.onChange.bind(this)} type="button" className="btn btn-secondary btn-sm mt-2"  value ="denounce" >ver casos de denuncias</button>
                      </div>

                    </div>


                    <div className="container col-md-4 mx-auto">
                      {this.state.value==="show" &&
                          <div className="row  ">
                            <div className="mx-auto">
                               <Cri/>
                            </div>
                          </div> }

                      {this.state.value==="denounce" &&
                        <div className="  mx-auto">
                            <Crime/>
                          </div> }

                    </div>



                    </ApolloProvider>
                </header>
            </div>
      );
  }
}

export default Denounce;
