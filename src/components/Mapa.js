import React, { Component } from 'react';
import * as d3 from "d3";

import localidades from './localidades_bogota.json';
import {allScore} from '../data.json'


import './Mapa.css';

class Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "",
            allScore
        }
    }

    matcher() {
        let arr =[]
        let scoLoc = []

        this.state.allScore.map((sco,i) =>{

          arr.push(sco.locality)
          arr.push(sco.value)
          scoLoc.push(arr)
          arr=[]
          console.log(sco.locality)
        })

        return scoLoc;
    }

    componentDidMount() {
        var margin = { top: 20, bottom: 20, right: 20, left: 20 };
        var width = "800";
        var height = "800";
        var svg = d3.select("svg");

        let votLoc = this.matcher();


        var path = d3.geoPath()
            .projection(
                d3.geoTransverseMercator()
                    .fitExtent(
                        [
                            [margin.left, margin.top],
                            [width - margin.right, height - margin.bottom]
                        ],
                        localidades
                    )
            );

        svg.selectAll("path")
            .data(localidades.features)
            .enter().append("path")
            .style(
                "fill",
                (d) => {
                    let nomLoc =  d.properties.name;
                    let value = "rgb(255,255,255)";


                    votLoc.forEach(element => {
                        if (element[0]=== nomLoc) {

                            if (parseInt(element[1], 10) === 0) {
                                return value;
                              } else if (parseInt(element[1], 10) <= 100) {
                                return value = 'rgb(52, 78, 184)';
                            } else if (parseInt(element[1], 10) <= 200) {
                                return value = 'rgb(55, 82, 192)';
                            } else if (parseInt(element[1], 10) <= 300) {
                                return value = 'rgb(74, 98, 193)';
                            } else if (parseInt(element[1], 10) <= 400) {
                                return value = 'rgb(97, 116, 196)';
                            } else if (parseInt(element[1], 10) <= 500) {
                                return value = 'rgb(120, 136, 202)';
                            } else if (parseInt(element[1], 10) <= 600) {
                                return value = 'rgb(142, 154, 205)';
                            } else if (parseInt(element[1], 10) <= 700) {
                                return value = 'rgb(169, 177, 209)';
                            } else if (parseInt(element[1], 10) <= 800) {
                                return value = 'rgb(197, 200, 212)';
                            } else if (parseInt(element[1], 10) <= 900) {
                                return value = 'rgb(223, 230, 255)';
                            } else if (parseInt(element[1], 10) <= 1000) {
                                return value = 'rgb(225, 226, 229)';
                            }

                        }
                    })
                    return value
                }
            )
            .attr("class", "tract")
            .attr("d", path)
            .append("title")

            .text(
                (d) => {
                    let text;
                    let nomLoc = d.properties.name;
                    votLoc.forEach(element => {
                        if (element[0] === nomLoc) {
                            text = nomLoc + ": " + element[1]
                        }
                    })
                    return text;
                }
            );



        svg.selectAll(".tract-border")
            .data(localidades.features)
            .enter()
            .append("path")
            .attr("class", "tract-border")
            .attr("d", path);
    }


    render() {

        return (
            <svg viewBox="0 0 800 800" width="80%" height="80%" >

            </svg>
        )
    }
}

export default Mapa;
