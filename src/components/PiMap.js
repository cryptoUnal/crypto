import React, { Component } from 'react';
import {allScore} from '../data.json'

import ReactSvgPieChart from "react-svg-piechart"



class PiChart extends Component{
  constructor() {
      super();
      this.state = {
          allScore
      }
  }

  matcher() {
      let arr = []


      this.state.allScore.map((sco,i) =>{
        let dat = {}

        dat["title"] = sco.locality
        dat["value"] = sco.value

        if (sco.value === 0) {
            dat["color"] = "#ffffff";
          } else if (sco.value <= 100) {
            dat["color"] = '#344eb8';
        } else if (sco.value <= 200) {
            dat["color"] = '#3752C0';
        } else if (sco.value <= 300) {
            dat["color"] = '#4A62C1';
        } else if (sco.value <= 400) {
            dat["color"] = '#6174C4';
        } else if (sco.value <= 500) {
            dat["color"] = '#7888CA';
        } else if (sco.value <= 600) {
            dat["color"] = '#8E9ACD';
        } else if (sco.value <= 700) {
            dat["color"] = '#A9B1D1';
        } else if (sco.value <= 800) {
            dat["color"] = '#C5C8D4';
        } else if (sco.value <= 900) {
            dat["color"] = '#DFE6FF';
        } else if (sco.value <= 1000) {
            dat["color"] = '#E1E2E5';
        }

        arr.push(dat)

      })

      return arr;
  }



  render() {

  return (

    <ReactSvgPieChart
      data={this.matcher()}
      expandOnHover
      onSectorHover={(d, i, e) => {
        if (d) {        
          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
        } else {
          console.log("Mouse leave - Index:", i, "Event:", e)
        }
      }}
    />

    );
  }

}

export default PiChart;
