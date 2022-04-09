import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "Racism",
    Tweets: 800
  },
  {
    name: "Sexism",
    Tweets: 967
  },
  {
    name: "Islamophobia",
    Tweets: 1200
  },
  {
    name: "General Hate",
    Tweets: 1108
  },
  {
    name: "No hate",
    Tweets: 680,
    cnt: 380
  }
];

export default function App() {
  return (
    <ComposedChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Tweets" barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
}
