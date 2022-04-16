import React from "react";
import RadarChart from "./DifferentCharts";
import App from "./BarChart/App";

function return_chart(props) {
  console.log("haye i am from return chart");
  console.log(props.value);
  if (props.value === "Bar Chart") {
    return <App />;
  } else if (props.value === "Radar Chart") {
    return <RadarChart />;
  }
}
export default return_chart;
