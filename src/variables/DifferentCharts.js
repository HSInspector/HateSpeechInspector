import react from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

function DifferentCharts() {
  const data = [
    { Label: "Racism", x: 12000 },
    { Label: "Sexism", x: 1300 },
    { Label: "Islamophobic", x: 1200 },
    { Label: "Geenral Hate", x: 12000 },
    { Label: "No Hate", x: 100 }
  ];

  return (
    <RadarChart height={500} width={500} outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="Label" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="green" fill="green" fillOpacity={0.5} />
    </RadarChart>
  );
}
export default DifferentCharts;
