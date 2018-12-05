import React, { Component } from 'react';
import {allScore} from '../data.json'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let order = 'desc';

class Table extends Component{
  constructor() {
      super();
      this.state = {
          allScore
      }
  }


  render() {
  return (

      <BootstrapTable data={ allScore } bordered={ false } >
        <TableHeaderColumn dataField='locality' isKey> Localidad </TableHeaderColumn>
        <TableHeaderColumn dataField='value'  dataSort={ true }>Puntaje </TableHeaderColumn>

      </BootstrapTable>
    );
  }

}

export default Table;
