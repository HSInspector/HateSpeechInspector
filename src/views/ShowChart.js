import React from "react";
import DifferentCharts from "../variables/DifferentCharts";
// import App from "../variables/BarChart/App";
import App from "../variables/BarChart/App";

import PieChart from "../variables/PIeChart/App";

function ShowChart(props) {
  // alert("show function is rendered !");
  console.log("show chart is called !");
  console.log("and the show chart value is " + props.value);
  // alert("the props value in show chart is " + option);
  if (props.value === "Bar Chart") {
    return <App />;
  } else if (props.value === "Radar Graph") {
    return <DifferentCharts />;
  } else if (props.value === "Pie Chart") {
    return <PieChart />;
  }
  return <h1>hello showchart</h1>;
}
// if rdar graph then bar chart
// if bar chart then radar graph
export default ShowChart;
