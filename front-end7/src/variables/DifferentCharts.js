import react from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

function DifferentCharts(x) {
  //example data
  // const data = [
  //   { Label: "Racism", x: 12000 },
  //   { Label: "Sexism", x: 1300 },
  //   { Label: "Islamophobic", x: 1200 },
  //   { Label: "Geenral Hate", x: 12000 },
  //   { Label: "No Hate", x: 100 }
  // ];

  var Racism = 0;
  var Sexism = 0;
  var Islamophobia = 0;
  var General = 0;
  var No_Hate = 0;

  var data01 = [
    { Label: "No Hate", x: 0 },
    { Label: "General Hate", x: 0 },
    { Label: "Racism", x: 0 },
    { Label: "Sexism", x: 0 },
    { Label: "Islamophobia", x: 0 }

  ];
  var data02 = x.data;
  data02['types'].forEach((element, index) => {
    switch(data02['types'][index]){
      case 0:
        No_Hate+=1;
        break;
      case 1:
        General+=1
        break;
      case 2:
        Racism+=1;
        break;
      case 3:
        Sexism+=1;
        break;
      case 4:
        Islamophobia+=1;
        break;

    }
  });


data01[0]['x'] = No_Hate
data01[1]['x'] = General
data01[2]['x'] = Racism
data01[3]['x'] = Sexism
data01[4]['x'] = Islamophobia

  return (
    <RadarChart height={600} width={600} outerRadius="80%" data={data01}>
      <PolarGrid />
      <PolarAngleAxis dataKey="Label" />
      <PolarRadiusAxis />
      <Radar dataKey="x" stroke="green" fill="green" fillOpacity={0.5} />
    </RadarChart>
  );
}
export default DifferentCharts;
