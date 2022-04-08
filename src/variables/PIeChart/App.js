import "./styles.css";
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Racism", value: 400 },
  { name: "Sexism", value: 300 },
  { name: "Islamophobia", value: 300 },
  { name: "General Hate", value: 200 },
  { name: "No Hate", value: 278 }
];

function App() {
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />

      <Tooltip />
    </PieChart>
  );
}
export default App;
