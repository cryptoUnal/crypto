import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";



const getCrimes = gql`
 {
  allCrimes {
    date
    state
    day
    hour
    zone
    neighbourhood
    mobility_victim
    mobility_agresor
  }
}
`;


const Crime = () => (
  <Query
    query={getCrimes}>
      {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( </p>;
        console.log("holaaaa", data.allCrimes)
      const a = data.allCrimes.map((cri,i) =>{
          return(
            <div className="col-md-12">
              <div className="card mt-5">
                <div className="card-header">
                  <h4>Fecha del hurto {cri.date}</h4>
                  <h5>hora {cri.hour}</h5>

                  <p>Estado <mark>{cri.state}</mark></p>
                  <p><mark>Barrio {cri.neighbourhood}</mark></p>
                </div>
                <div className="card-body">
                  <p>la movilidad del agresor era :  {cri.mobility_agresor}</p>
                  <p>la movilidad de la victima era: {cri.mobility_victim}</p>

                </div>
              </div>
            </div>
          )
        })
      return (
          <div className="row mt-4">
            {a}
        </div>

      );
    }}
  </Query>
);
export default Crime;
