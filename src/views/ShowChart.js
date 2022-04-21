import React from "react";
import DifferentCharts from "../variables/DifferentCharts";
// import App from "../variables/BarChart/App";
import App from "../variables/BarChart/App";

import PieChart from "../variables/PIeChart/App";

function ShowChart(props) {
  // alert("show function is rendered !");
  console.log("show chart is called !");
  console.log("and the show chart value is " + props.value);
  // console.log("data: "+ props.data);
  // alert("the props value in show chart is " + option);
  if(props.termSearched){
    if (props.value === "Bar Chart") {
      return <App data={props.data}/>;
    } else if (props.value === "Radar Graph") {
      return <DifferentCharts data={props.data}/>;
    } else if (props.value === "Pie Chart") {
      return <PieChart data={props.data}/>;
    } else if (props.value == "None"){
      return <h1>Please select a Chart type</h1>;
    }
  }
  else{
    return <h1>Please select a Chart type</h1>;
  }
}
// if rdar graph then bar chart
// if bar chart then radar graph
export default ShowChart;
